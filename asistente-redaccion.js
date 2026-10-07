/* ── ASISTENTE DE REDACCIÓN SST · Compliance Pro ──
   Botón "✨ Redactar por mí" para el formulario de Inspecciones y el módulo de Supervisión.
   Se tocan opciones y el texto profesional se escribe solo en los campos del formulario
   (siempre editable antes de guardar). Mismo archivo en los 5 edificios: se adapta a los
   nombres de campos de cada uno (Nepal 2 / Convivienda / modulares). */
(function () {
    'use strict';

    /* ── BIBLIOTECA DE FRASES ──
       Cada ítem se reconoce por su texto (regex). Opciones: c = chip, h = hallazgo,
       a = acción correctiva, r = nivel de riesgo (Bajo / Medio / Alto). */
    const ITEMS = [
        { re: /cinta|antideslizante/i, nombre: 'Cintas antideslizantes', ops: [
            { c: 'cintas desgastadas', h: 'Las cintas antideslizantes de la escalera presentan desgaste y pérdida de adherencia, aumentando el riesgo de resbalones y caídas.', a: 'Reemplazar las cintas antideslizantes desgastadas en los peldaños afectados.', r: 'Medio' },
            { c: 'faltan cintas', h: 'Se identifican peldaños sin cinta antideslizante, condición que incrementa el riesgo de caída, especialmente con el piso húmedo.', a: 'Instalar cinta antideslizante en la totalidad de los peldaños de la escalera.', r: 'Medio' }
        ]},
        { re: /escalera/i, nombre: 'Escaleras', ops: [
            { c: 'peldaños deteriorados', h: 'Se evidencian peldaños con desgaste o fisuras en la escalera de uso común, condición que genera riesgo de caída de personas a distinto nivel.', a: 'Reparar los peldaños deteriorados y verificar su estado una vez intervenidos.', r: 'Alto' },
            { c: 'pasamanos flojo', h: 'Se identifica pasamanos con anclajes flojos o tramos sin continuidad en la escalera, lo que reduce el punto de apoyo durante el desplazamiento y en caso de evacuación.', a: 'Asegurar los anclajes del pasamanos y garantizar su continuidad en todo el recorrido.', r: 'Medio' },
            { c: 'objetos en escalera', h: 'Se encuentran objetos almacenados en la escalera, que obstaculizan el tránsito y la ruta de evacuación.', a: 'Retirar los objetos de la escalera y socializar con residentes y personal la prohibición de almacenar elementos en esta zona.', r: 'Alto' }
        ]},
        { re: /iluminaci/i, nombre: 'Iluminación', ops: [
            { c: 'bombillos fundidos', h: 'Se evidencian luminarias fundidas en zonas comunes, generando áreas con iluminación deficiente que aumentan el riesgo de caídas y afectan la seguridad.', a: 'Reemplazar las luminarias fundidas y establecer una revisión periódica de la iluminación de zonas comunes.', r: 'Medio' },
            { c: 'zonas oscuras', h: 'Se identifican sectores de circulación con iluminación insuficiente para el tránsito seguro de personas.', a: 'Evaluar y reforzar la iluminación de los sectores identificados.', r: 'Medio' }
        ]},
        { re: /luces de emergencia/i, nombre: 'Luces de emergencia', ops: [
            { c: 'no encienden', h: 'Al realizar la prueba funcional, algunas luces de emergencia no encienden, lo que compromete la evacuación segura en caso de corte de energía.', a: 'Revisar y reparar o reemplazar las luces de emergencia que no funcionan, y registrar la prueba funcional mensual.', r: 'Alto' },
            { c: 'batería baja', h: 'Las luces de emergencia encienden pero su autonomía es reducida, posiblemente por desgaste de la batería.', a: 'Reemplazar las baterías de las luces de emergencia y verificar una autonomía mínima de 90 minutos.', r: 'Medio' },
            { c: 'mal ubicadas', h: 'Hay tramos de la ruta de evacuación sin cobertura de luces de emergencia.', a: 'Instalar luces de emergencia adicionales en los tramos sin cobertura.', r: 'Medio' }
        ]},
        { re: /señalizaci[oó]n de evacuaci|señalizaci[oó]n equipos/i, nombre: 'Señalización', ops: [
            { c: 'señales deterioradas', h: 'La señalización de seguridad se encuentra deteriorada o desteñida, lo que reduce su visibilidad y comprensión.', a: 'Reemplazar las señales deterioradas cumpliendo la NTC 1461.', r: 'Bajo' },
            { c: 'faltan señales', h: 'Se identifican puntos sin la señalización requerida (rutas de evacuación, salidas o equipos de emergencia).', a: 'Instalar la señalización faltante en los puntos identificados.', r: 'Medio' },
            { c: 'señal tapada', h: 'Hay señalización obstruida por objetos, que impiden su visibilidad.', a: 'Despejar la señalización y mantenerla visible en todo momento.', r: 'Bajo' }
        ]},
        { re: /puertas el[eé]ctricas|puertas autom/i, nombre: 'Puertas eléctricas', ops: [
            { c: 'falla apertura/cierre', h: 'La puerta eléctrica presenta fallas intermitentes de apertura o cierre, con riesgo de atrapamiento o golpes.', a: 'Solicitar revisión y mantenimiento correctivo de la puerta eléctrica a la empresa contratista, y conservar el soporte.', r: 'Medio' },
            { c: 'sin mantenimiento', h: 'No se evidencia soporte del mantenimiento preventivo vigente de las puertas eléctricas.', a: 'Programar el mantenimiento preventivo de las puertas eléctricas y conservar el soporte en el SG-SST.', r: 'Bajo' }
        ]},
        { re: /pisos/i, nombre: 'Pisos', ops: [
            { c: 'objetos en el piso', h: 'Se encuentran objetos en zonas de circulación, que generan riesgo de tropiezos y caídas al mismo nivel.', a: 'Retirar los objetos y mantener despejadas las zonas de circulación.', r: 'Medio' },
            { c: 'piso dañado', h: 'Se evidencia piso con baldosas sueltas, desniveles o fisuras en zonas comunes.', a: 'Reparar el piso afectado y señalizar la zona mientras se interviene.', r: 'Medio' },
            { c: 'piso húmedo sin aviso', h: 'Se observan labores de aseo con piso húmedo sin señalización preventiva.', a: 'Dotar al personal de aseo de avisos de piso húmedo y capacitarlo en su uso.', r: 'Bajo' }
        ]},
        { re: /rutas de evacuaci/i, nombre: 'Rutas de evacuación', ops: [
            { c: 'rutas obstruidas', h: 'Las rutas de evacuación se encuentran parcialmente obstruidas por objetos o mobiliario, lo que puede retrasar la salida de las personas en una emergencia.', a: 'Despejar de inmediato las rutas de evacuación y comunicar a la copropiedad la prohibición de obstruirlas.', r: 'Alto' },
            { c: 'puerta con llave', h: 'Se encuentra una puerta de la ruta de evacuación asegurada con llave o candado, lo que impide la salida rápida.', a: 'Garantizar que las puertas de la ruta de evacuación se puedan abrir desde adentro sin llave.', r: 'Alto' }
        ]},
        { re: /tanque/i, nombre: 'Tanques de agua', ops: [
            { c: 'acceso inseguro', h: 'El acceso a los tanques de agua no cuenta con condiciones seguras (escalera sin protección o tapa deteriorada), con riesgo de caída.', a: 'Adecuar el acceso a los tanques con los elementos de protección necesarios y restringir el ingreso a personal autorizado.', r: 'Alto' },
            { c: 'lavado vencido', h: 'No se evidencia soporte vigente del lavado y desinfección semestral de los tanques de agua.', a: 'Programar el lavado y la desinfección de los tanques con una empresa certificada y archivar el certificado.', r: 'Medio' },
            { c: 'tapa abierta', h: 'Se encuentra la tapa del tanque de agua abierta o mal asegurada.', a: 'Asegurar la tapa del tanque y verificar su hermeticidad.', r: 'Medio' }
        ]},
        { re: /filtraci|humedad/i, nombre: 'Filtraciones', ops: [
            { c: 'filtración en techo/muro', h: 'Se evidencian filtraciones o manchas de humedad en muros o techos de zonas comunes, que pueden deteriorar la estructura y los acabados.', a: 'Identificar el origen de la filtración y realizar la reparación correspondiente.', r: 'Medio' },
            { c: 'humedad cerca de tableros', h: 'Hay humedad cerca de tableros o instalaciones eléctricas, con riesgo eléctrico.', a: 'Intervenir con prioridad la filtración y verificar con un técnico el estado de las instalaciones eléctricas cercanas.', r: 'Alto' }
        ]},
        { re: /extintor/i, nombre: 'Extintores', ops: [
            { c: 'recarga vencida', h: 'El extintor tiene la fecha de recarga vencida, por lo que no se garantiza su funcionamiento en caso de conato de incendio.', a: 'Recargar el extintor con un proveedor certificado y actualizar la tarjeta de control.', r: 'Alto' },
            { c: 'despresurizado', h: 'El manómetro del extintor indica una presión fuera del rango operativo.', a: 'Enviar el extintor a revisión y recarga y disponer de uno de reemplazo mientras tanto.', r: 'Alto' },
            { c: 'obstruido', h: 'El acceso al extintor se encuentra obstruido por objetos.', a: 'Despejar el acceso al extintor y mantener libre el área a su alrededor.', r: 'Medio' },
            { c: 'sin señalización', h: 'El extintor no cuenta con la señalización correspondiente.', a: 'Instalar la señalización del extintor conforme a la NTC 1461.', r: 'Bajo' },
            { c: 'sin soporte', h: 'El extintor está ubicado en el piso o sin soporte adecuado.', a: 'Instalar el extintor en un soporte a la altura reglamentaria (NTC 2885).', r: 'Bajo' }
        ]},
        { re: /v[aá]lvula/i, nombre: 'Válvula del gabinete', ops: [
            { c: 'válvula no opera', h: 'La válvula del gabinete contra incendio presenta dificultad de apertura o fugas.', a: 'Solicitar el mantenimiento de la válvula a una empresa especializada en sistemas contra incendio.', r: 'Alto' }
        ]},
        { re: /manguera|gabinete/i, nombre: 'Gabinete contra incendio', ops: [
            { c: 'manguera deteriorada', h: 'La manguera del gabinete contra incendio está deteriorada o mal plegada.', a: 'Revisar la manguera, reemplazarla si es necesario y dejarla correctamente plegada.', r: 'Alto' },
            { c: 'gabinete incompleto', h: 'Al gabinete contra incendio le faltan elementos (hacha, llave spanner, boquilla o vidrio).', a: 'Completar la dotación del gabinete contra incendio.', r: 'Medio' }
        ]},
        { re: /acceso a equipos/i, nombre: 'Acceso a equipos', ops: [
            { c: 'equipos obstruidos', h: 'El acceso a los equipos contra incendio se encuentra obstruido.', a: 'Despejar el acceso a los equipos contra incendio y demarcar el área frente a ellos.', r: 'Medio' }
        ]}
    ];

    const ops = nombre => ITEMS.find(it => it.nombre === nombre).ops;
    const minus = arr => arr.map(o => ({ ...o, r: o.r.toLowerCase() }));

    /* Áreas del módulo de Supervisión: frases positivas y riesgos frecuentes */
    const AREAS = {
        'Portería': {
            pos: ['La portería se encuentra en orden y aseo, con el botiquín y los números de emergencia visibles.',
                  'El personal de portería conoce el procedimiento de reporte de emergencias y el plan de evacuación.'],
            neg: [
                { c: 'sin números de emergencia', h: 'En la portería no se encuentran visibles los números de emergencia actualizados.', a: 'Publicar en la portería el listado actualizado de números de emergencia.', r: 'bajo' },
                { c: 'botiquín incompleto', h: 'El botiquín de primeros auxilios de la portería está incompleto o tiene elementos vencidos.', a: 'Reponer los elementos faltantes o vencidos del botiquín y llevar un inventario mensual.', r: 'medio' },
                { c: 'cables expuestos', h: 'En la portería hay cables eléctricos expuestos o extensiones en mal estado.', a: 'Organizar el cableado y retirar las extensiones en mal estado.', r: 'medio' }
            ]},
        'Lobby': {
            pos: ['El lobby se encuentra limpio, iluminado y libre de obstáculos en las zonas de circulación.',
                  'La señalización de evacuación del lobby es visible y está en buen estado.'],
            neg: [
                { c: 'mobiliario obstruye', h: 'En el lobby hay mobiliario u objetos que reducen el ancho de la zona de circulación hacia la salida.', a: 'Reubicar el mobiliario para liberar la zona de circulación.', r: 'medio' },
                { c: 'piso resbaloso', h: 'El piso del lobby está resbaloso, con riesgo de caída.', a: 'Instalar tapete o cinta antideslizante en la zona y señalizar el piso húmedo durante el aseo.', r: 'medio' }
            ]},
        'Escaleras': {
            pos: ['Las escaleras se encuentran despejadas, con los pasamanos firmes y las cintas antideslizantes en buen estado.',
                  'Las escaleras cuentan con iluminación adecuada y luces de emergencia operativas.'],
            neg: minus(ops('Escaleras').concat(ops('Cintas antideslizantes')))
        },
        'Cuarto de Máquinas': {
            pos: ['El cuarto de máquinas se encuentra con acceso restringido, en orden y con la señalización de riesgo eléctrico.',
                  'Los equipos del cuarto de máquinas cuentan con soporte de mantenimiento vigente.'],
            neg: [
                { c: 'usado como bodega', h: 'El cuarto de máquinas se está usando para almacenar materiales u objetos ajenos a su función.', a: 'Retirar los materiales almacenados y prohibir el uso del cuarto de máquinas como bodega.', r: 'alto' },
                { c: 'sin señal riesgo eléctrico', h: 'El cuarto de máquinas no tiene la señalización de riesgo eléctrico ni de acceso restringido.', a: 'Instalar la señalización de riesgo eléctrico y de acceso solo para personal autorizado.', r: 'medio' },
                { c: 'puerta sin seguro', h: 'El cuarto de máquinas está abierto o sin control de acceso.', a: 'Asegurar la puerta del cuarto de máquinas y controlar el acceso.', r: 'medio' }
            ]},
        'Tanques de Agua': {
            pos: ['Los tanques de agua cuentan con tapa asegurada y con el soporte vigente de lavado y desinfección.',
                  'El acceso a los tanques está restringido a personal autorizado.'],
            neg: minus(ops('Tanques de agua'))
        },
        'Zonas Comunes': {
            pos: ['Las zonas comunes se encuentran en orden y aseo, con iluminación adecuada.',
                  'No se observan condiciones locativas que representen riesgo para residentes y visitantes.'],
            neg: [
                { c: 'objetos en pasillos', h: 'En los pasillos de zonas comunes hay objetos de residentes (bicicletas, cajas, materas) que obstaculizan la circulación.', a: 'Pedir a los residentes, por medio de la administración, que retiren los objetos de las zonas comunes.', r: 'medio' },
                { c: 'luminarias fundidas', h: ops('Iluminación')[0].h, a: ops('Iluminación')[0].a, r: 'medio' },
                { c: 'filtraciones', h: ops('Filtraciones')[0].h, a: ops('Filtraciones')[0].a, r: 'medio' }
            ]},
        'Extintores': {
            pos: ['Los extintores se encuentran vigentes, presurizados, señalizados y con acceso despejado.',
                  'Las tarjetas de control de los extintores están diligenciadas.'],
            neg: minus(ops('Extintores'))
        },
        'Salidas de Emergencia': {
            pos: ['Las salidas de emergencia están despejadas, señalizadas y se abren desde adentro sin dificultad.',
                  'La ruta de evacuación hacia el punto de encuentro está libre de obstáculos.'],
            neg: minus(ops('Rutas de evacuación').concat(ops('Señalización')[1]))
        }
    };

    const PLAZO_DIAS = { alto: 8, medio: 15, bajo: 30 };
    const ORDEN_RIESGO = ['Bajo', 'Medio', 'Alto'];
    const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    /* ── UTILIDADES ── */
    function hoyISO(dias) {
        const d = new Date();
        if (dias) d.setDate(d.getDate() + dias);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }
    function fechaLarga(iso) {
        if (!iso) return '';
        const [y, m, d] = iso.split('-').map(Number);
        return `${d} de ${MESES[m - 1].toLowerCase()} de ${y}`;
    }
    function lista(arr) {
        return arr.length < 2 ? arr.join('') : arr.slice(0, -1).join(', ') + ' y ' + arr[arr.length - 1];
    }
    function esc(s) {
        return String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
    }
    function poner(el, valor) {
        if (!el) return;
        el.value = valor;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
    }
    function ponerSelect(sel, texto) {
        if (!sel) return;
        const op = [...sel.options].find(o => (o.value || o.text).toLowerCase() === texto.toLowerCase() || o.text.toLowerCase() === texto.toLowerCase());
        if (op) poner(sel, op.value || op.text);
    }
    function itemDe(texto) {
        return ITEMS.find(it => it.re.test(texto));
    }
    function visible(el) {
        return !!(el && el.offsetParent !== null);
    }

    /* ── ESTILOS ── */
    const css = document.createElement('style');
    css.textContent = `
        .ar-panel { border: 2px solid #5DCCC1; border-radius: 14px; background: #f3fbfa; margin: 18px 0; overflow: hidden; font-family: inherit; }
        .ar-head { display: flex; align-items: center; gap: 10px; width: 100%; padding: 14px 16px; background: #192638; color: #fff; border: 0; cursor: pointer; font: inherit; font-weight: 700; font-size: 1rem; text-align: left; }
        .ar-head small { font-weight: 400; opacity: .7; font-size: .8rem; display: block; }
        .ar-head .ar-flecha { margin-left: auto; transition: transform .15s; }
        .ar-panel.ar-abierto .ar-flecha { transform: rotate(180deg); }
        .ar-body { display: none; padding: 14px 16px 16px; }
        .ar-panel.ar-abierto .ar-body { display: block; }
        .ar-ayuda { font-size: .85rem; color: #475569; margin: 0 0 12px; }
        .ar-item { padding: 10px 0; border-top: 1px solid #d5ecea; }
        .ar-item:first-child { border-top: 0; }
        .ar-item-t { font-weight: 700; font-size: .9rem; color: #192638; margin-bottom: 6px; }
        .ar-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .ar-chip { border: 1.5px dashed #dc2626; background: #fff; color: #b91c1c; border-radius: 999px; padding: 5px 12px; font: inherit; font-size: .82rem; cursor: pointer; text-align: left; }
        .ar-chip.ar-pos { border-color: #15803d; color: #15803d; }
        .ar-chip[aria-pressed="true"] { background: #dc2626; border-style: solid; color: #fff; }
        .ar-chip.ar-pos[aria-pressed="true"] { background: #15803d; color: #fff; }
        .ar-chip:focus-visible, .ar-head:focus-visible, .ar-btn:focus-visible { outline: 3px solid #5DCCC1; outline-offset: 2px; }
        .ar-vacio { font-size: .85rem; color: #64748b; font-style: italic; }
        .ar-acciones { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
        .ar-btn { border: 0; border-radius: 10px; padding: 11px 16px; font: inherit; font-weight: 700; font-size: .9rem; cursor: pointer; background: #5DCCC1; color: #192638; }
        .ar-btn.ar-sec { background: #fff; color: #192638; border: 1.5px solid #cbd5e1; }
        .ar-ok { font-size: .85rem; color: #15803d; margin-top: 8px; min-height: 1.2em; }
        .ar-sub { font-weight: 700; font-size: .8rem; letter-spacing: .04em; text-transform: uppercase; color: #2f9f95; margin: 14px 0 4px; }
    `;
    document.head.appendChild(css);

    function crearPanel(titulo, subtitulo) {
        const panel = document.createElement('div');
        panel.className = 'ar-panel';
        panel.innerHTML = `
            <button type="button" class="ar-head" aria-expanded="false">✨ <span>${titulo}<small>${subtitulo}</small></span><span class="ar-flecha">▾</span></button>
            <div class="ar-body"></div>`;
        const head = panel.querySelector('.ar-head');
        head.addEventListener('click', () => {
            const abierto = panel.classList.toggle('ar-abierto');
            head.setAttribute('aria-expanded', abierto);
            if (abierto && panel._render) panel._render();
        });
        return panel;
    }

    /* ══════════ INSPECCIONES (Formularios de registros) ══════════ */
    function montarInspeccion() {
        const cont = document.getElementById('form-inspecciones');
        if (!cont) return;
        const campo = n => cont.querySelector(n.map(x => `[name="${x}"]`).join(','));
        const fHallazgos = campo(['hallazgos']);
        if (!fHallazgos) return;
        const fAcciones = campo(['accionesCorrectivas', 'acciones']);
        const fNivel = campo(['nivelRiesgo', 'nivel_riesgo']);
        const fEstado = campo(['estado']);
        const fTipo = campo(['tipoInspeccion', 'tipo']);
        const fPeriodo = campo(['periodo']);
        const fFecha = campo(['fecha']);
        const seccionHallazgos = fHallazgos.closest('.form-section') || fHallazgos.parentElement;

        const panel = crearPanel('Redactar por mí', 'Toca lo que encontraste y el texto se escribe solo');
        seccionHallazgos.parentElement.insertBefore(panel, seccionHallazgos);
        const body = panel.querySelector('.ar-body');
        const elegidos = {}; /* clave del checklist → Set de índices de opciones */

        function checklistVisible() {
            return [...cont.querySelectorAll('.checklist-item')].filter(visible).map(row => {
                const cb = row.querySelector('input[type="checkbox"]');
                const lb = row.querySelector('label');
                return { clave: cb.id || cb.name, texto: lb ? lb.textContent.trim() : '', cb };
            });
        }

        panel._render = function () {
            const filas = checklistVisible();
            const sinMarcar = filas.filter(f => !f.cb.checked);
            if (!filas.length) {
                body.innerHTML = '<p class="ar-vacio">Primero escoge el tipo de inspección.</p>';
                return;
            }
            body.innerHTML = `
                <p class="ar-ayuda">Marca en el checklist lo que <b>cumple</b>. Aquí salen los ítems que dejaste sin marcar: toca qué encontraste en cada uno. Si un ítem no tiene problema, márcalo arriba.</p>
                ${sinMarcar.length ? sinMarcar.map(f => {
                    const it = itemDe(f.texto);
                    if (!it) return '';
                    const sel = elegidos[f.clave] || new Set();
                    return `<div class="ar-item"><div class="ar-item-t">${esc(f.texto)}</div><div class="ar-chips">${
                        it.ops.map((o, i) => `<button type="button" class="ar-chip" data-k="${esc(f.clave)}" data-i="${i}" aria-pressed="${sel.has(i)}">${esc(o.c)}</button>`).join('')
                    }</div></div>`;
                }).join('') : '<p class="ar-vacio">Todos los ítems están marcados como cumple. 👍</p>'}
                <div class="ar-acciones">
                    <button type="button" class="ar-btn" data-accion="escribir">✍️ Escribir hallazgos y acciones</button>
                </div>
                <div class="ar-ok" aria-live="polite"></div>`;
            body.querySelectorAll('.ar-chip').forEach(ch => ch.addEventListener('click', () => {
                const k = ch.dataset.k, i = Number(ch.dataset.i);
                const set = elegidos[k] = elegidos[k] || new Set();
                set.has(i) ? set.delete(i) : set.add(i);
                ch.setAttribute('aria-pressed', set.has(i));
            }));
            body.querySelector('[data-accion="escribir"]').addEventListener('click', escribir);
        };

        function escribir() {
            const filas = checklistVisible();
            if (fFecha && !fFecha.value) poner(fFecha, hoyISO());
            if (fPeriodo && !fPeriodo.value) {
                const d = new Date();
                ponerSelect(fPeriodo, `${MESES[d.getMonth()]} ${d.getFullYear()}`);
            }
            const tipoTxt = fTipo && fTipo.selectedIndex > 0 ? fTipo.options[fTipo.selectedIndex].text.toLowerCase() : 'de seguridad';
            const fecha = fechaLarga(fFecha && fFecha.value);
            const hallazgos = [], acciones = [];
            let riesgoMax = -1;
            filas.filter(f => !f.cb.checked).forEach(f => {
                const it = itemDe(f.texto);
                const set = elegidos[f.clave];
                if (!it || !set || !set.size) return;
                [...set].sort().forEach(i => {
                    const o = it.ops[i];
                    const ref = /extintor \d/i.test(f.texto) ? ` (${f.texto.split(' - ')[0]})` : '';
                    hallazgos.push(o.h.replace(/\.$/, '') + ref + '.');
                    acciones.push(o.a);
                    riesgoMax = Math.max(riesgoMax, ORDEN_RIESGO.indexOf(o.r));
                });
            });
            const cumplen = filas.filter(f => f.cb.checked).map(f => f.texto.split(' (')[0].split(' - ')[0].toLowerCase());
            const intro = `Durante la ${tipoTxt.startsWith('inspecci') ? tipoTxt : 'inspección ' + tipoTxt}${fecha ? ' realizada el ' + fecha : ''} en las áreas comunes de la copropiedad`;
            let txtH, txtA;
            if (hallazgos.length) {
                txtH = `${intro} se identificaron las siguientes condiciones:\n` +
                    hallazgos.map((h, i) => `${i + 1}. ${h}`).join('\n') +
                    (cumplen.length ? `\n\nLos demás ítems verificados (${lista([...new Set(cumplen)])}) se encontraron en condiciones adecuadas.` : '');
                txtA = acciones.map((a, i) => `${i + 1}. ${a}`).join('\n') +
                    '\n\nResponsable de gestionar las acciones: Administración de la copropiedad. El cierre se verificará en la próxima inspección.';
                ponerSelect(fNivel, ORDEN_RIESGO[riesgoMax]);
                ponerSelect(fEstado, 'En seguimiento');
            } else {
                txtH = `${intro} se verificaron ${filas.length} ítems del checklist y no se identificaron condiciones inseguras. Los elementos inspeccionados se encontraron en condiciones adecuadas de funcionamiento, orden y señalización.`;
                txtA = 'No se requieren acciones correctivas. Mantener las condiciones verificadas y continuar con el programa de inspecciones.';
                ponerSelect(fNivel, 'Sin hallazgos');
                ponerSelect(fEstado, 'Todo OK');
            }
            poner(fHallazgos, txtH);
            poner(fAcciones, txtA);
            body.querySelector('.ar-ok').textContent = '✅ Listo. Revisa el texto abajo y cámbialo si quieres antes de guardar.';
            fHallazgos.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        cont.addEventListener('change', e => {
            if ((e.target.type === 'checkbox' || e.target === fTipo) && panel.classList.contains('ar-abierto')) panel._render();
        });
        const form = cont.querySelector('form');
        if (form) form.addEventListener('reset', () => {
            Object.keys(elegidos).forEach(k => delete elegidos[k]);
            setTimeout(panel._render, 0);
        });
    }

    /* ══════════ SUPERVISIÓN MENSUAL ══════════ */
    function montarSupervision() {
        const txtPos = document.getElementById('hallazgos-positivos');
        const txtNeg = document.getElementById('hallazgos-negativos-input');
        if (!txtPos || !txtNeg || typeof window.agregarHallazgoNegativo !== 'function') return;
        const seccionPos = txtPos.closest('.form-section') || txtPos.parentElement;

        const panel = crearPanel('Redactar por mí', 'Frases listas para cada área que marcaste');
        seccionPos.parentElement.insertBefore(panel, seccionPos);
        const body = panel.querySelector('.ar-body');
        const usados = new Set();

        function areasMarcadas() {
            return [...document.querySelectorAll('.checkbox-item input[type="checkbox"]:checked')].map(cb => cb.value).filter(v => AREAS[v]);
        }

        panel._render = function () {
            const areas = areasMarcadas();
            if (!areas.length) {
                body.innerHTML = '<p class="ar-vacio">Marca arriba las áreas que recorriste y aquí salen las frases.</p>';
                return;
            }
            body.innerHTML = `
                <p class="ar-ayuda">Toca una frase <b style="color:#15803d">verde</b> para agregarla como hallazgo positivo, o una <b style="color:#b91c1c">roja</b> para crear el hallazgo negativo con acción correctiva, responsable y plazo ya llenos.</p>
                ${areas.map(a => `
                    <div class="ar-item"><div class="ar-item-t">${esc(a)}</div>
                        <div class="ar-sub">Positivo</div>
                        <div class="ar-chips">${AREAS[a].pos.map((p, i) => {
                            const k = `${a}|p|${i}`;
                            return `<button type="button" class="ar-chip ar-pos" data-k="${esc(k)}" aria-pressed="${usados.has(k)}">${esc(p.length > 60 ? p.slice(0, 57) + '…' : p)}</button>`;
                        }).join('')}</div>
                        <div class="ar-sub">Por mejorar</div>
                        <div class="ar-chips">${AREAS[a].neg.map((n, i) => {
                            const k = `${a}|n|${i}`;
                            return `<button type="button" class="ar-chip" data-k="${esc(k)}" aria-pressed="${usados.has(k)}">${esc(n.c)}</button>`;
                        }).join('')}</div>
                    </div>`).join('')}
                <div class="ar-ok" aria-live="polite"></div>`;
            body.querySelectorAll('.ar-chip').forEach(ch => ch.addEventListener('click', () => usar(ch)));
        };

        function usar(ch) {
            const k = ch.dataset.k;
            const ok = body.querySelector('.ar-ok');
            if (usados.has(k)) { ok.textContent = 'Esa frase ya la agregaste. Si quieres quitarla, usa "Eliminar" en la lista de abajo.'; return; }
            const [area, tipo, i] = k.split('|');
            if (tipo === 'p') {
                txtPos.value = AREAS[area].pos[Number(i)];
                window.agregarHallazgoPositivo();
                ok.textContent = `✅ Hallazgo positivo agregado (${area}).`;
            } else {
                const n = AREAS[area].neg[Number(i)];
                txtNeg.value = n.h;
                window.agregarHallazgoNegativo();
                const items = document.querySelectorAll('#hallazgos-negativos-lista .hallazgo-item');
                const nuevo = items[items.length - 1];
                const id = nuevo && nuevo.id.replace('hallazgo-', '');
                if (id) {
                    const nivel = document.getElementById('nivel-' + id);
                    if (nivel) {
                        nivel.value = n.r;
                        if (typeof window.actualizarNivelRiesgo === 'function') window.actualizarNivelRiesgo(nivel);
                    }
                    poner(document.getElementById('ubicacion-' + id), area);
                    poner(document.getElementById('accion-' + id), n.a);
                    poner(document.getElementById('responsable-' + id), 'Administración de la copropiedad');
                    poner(document.getElementById('plazo-' + id), hoyISO(PLAZO_DIAS[n.r] || 15));
                }
                ok.textContent = `✅ Hallazgo negativo agregado (${area}), con un plazo de ${PLAZO_DIAS[n.r] || 15} días. Puedes ajustar la ubicación exacta abajo.`;
            }
            usados.add(k);
            ch.setAttribute('aria-pressed', 'true');
        }

        document.addEventListener('change', e => {
            if (e.target.matches('.checkbox-item input[type="checkbox"]') && panel.classList.contains('ar-abierto')) panel._render();
        });
        /* Al guardar o limpiar, el módulo vacía las listas: se liberan las frases usadas */
        const listaPos = document.getElementById('hallazgos-positivos-lista');
        const listaNeg = document.getElementById('hallazgos-negativos-lista');
        if (window.MutationObserver && listaPos && listaNeg) {
            const obs = new MutationObserver(() => {
                if (!listaPos.children.length && !listaNeg.children.length && usados.size) {
                    usados.clear();
                    if (panel.classList.contains('ar-abierto')) panel._render();
                }
            });
            obs.observe(listaPos, { childList: true });
            obs.observe(listaNeg, { childList: true });
        }
    }

    function iniciar() {
        try { montarInspeccion(); } catch (e) { console.warn('Asistente de redacción (inspección):', e); }
        try { montarSupervision(); } catch (e) { console.warn('Asistente de redacción (supervisión):', e); }
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
    else iniciar();
})();
