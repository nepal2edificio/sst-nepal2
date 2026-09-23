/* ═══════════════════════════════════════════════════════════════
   CONTENIDO DE INDUCCIÓN — Edificio Avalon
   Fuente: Induccion_SST_Capacitaciones.docx (Compliance Pro)
   Este archivo se edita APARTE del motor de la plataforma (induccion-individual.html).
   ═══════════════════════════════════════════════════════════════ */

const TEMAS_INDUCCION = [
    {
        id: 'julio',
        mes: 'Julio',
        tema: 'Prevención de riesgos locativos',
        duracion: '1 hora',
        minAprobar: 80,
        contenido: `
            <h4>¿Qué es un riesgo locativo?</h4>
            <p>Un riesgo locativo es cualquier condición física de las instalaciones —pisos, escaleras, techos, instalaciones eléctricas, estructuras, zonas comunes— capaz de generar un accidente. En edificios residenciales estos riesgos son especialmente frecuentes porque las áreas comunes son transitadas a diario por residentes, visitantes, personal de servicios generales, vigilancia y contratistas, con distintos niveles de familiaridad con el lugar y distinta percepción del riesgo.</p>
            <p>A diferencia de un riesgo laboral asociado a una tarea específica, el riesgo locativo está presente todo el tiempo, incluso cuando nadie está realizando ninguna actividad de mantenimiento. Por eso su gestión no puede depender solo de reportes ocasionales: requiere revisión periódica y sistemática de las condiciones físicas del edificio.</p>
            <h4>Causas más comunes de accidentes locativos</h4>
            <p><strong>Pisos y superficies:</strong> pisos húmedos o recién encerados sin señalización, baldosas sueltas, desniveles no advertidos entre ambientes, alfombras o tapetes sin fijación, y superficies muy pulidas que pierden adherencia con el agua.</p>
            <p><strong>Escaleras y circulaciones verticales:</strong> ausencia de cinta antideslizante en los bordes de los escalones, pasamanos flojos o inexistentes, escalones de altura irregular, e iluminación insuficiente que dificulta calcular bien cada paso, especialmente en horas de la noche.</p>
            <p><strong>Instalaciones eléctricas:</strong> cableado expuesto o improvisado, tomacorrientes sobrecargados, lámparas fundidas en zonas de tránsito y tableros eléctricos sin señalización de acceso restringido.</p>
            <p><strong>Vidrios y puertas:</strong> puertas de vidrio sin cinta o vinilo de señalización a la altura de los ojos, puertas de vaivén sin visor, y cerraduras o bisagras en mal estado que dificultan el cierre seguro.</p>
            <p><strong>Obstrucciones:</strong> materiales de obra, muebles o basura dejados temporalmente en pasillos, escaleras o salidas de emergencia, que reducen el ancho de circulación y se convierten en riesgo de tropiezo, especialmente en una evacuación.</p>
            <p><strong>Condiciones estructurales:</strong> filtraciones de agua que debilitan techos o generan humedad y moho, grietas en muros o columnas, corrosión en rejas, barandas y cubiertas metálicas, todas ellas condiciones que se agravan con el tiempo si no hay mantenimiento preventivo.</p>
            <h4>Responsabilidad compartida</h4>
            <p>La gestión de riesgos locativos es responsabilidad compartida entre la administración, el personal de mantenimiento y cada residente o trabajador del edificio. La administración y el personal de mantenimiento deben identificar y corregir estas condiciones antes de que generen un accidente, programar revisiones periódicas de las áreas comunes y llevar un registro escrito de cada revisión y de las correcciones realizadas.</p>
            <p>Cada residente, visitante o trabajador, por su parte, tiene la obligación de reportar cualquier condición insegura que observe, así no sea su área de responsabilidad directa: una baldosa suelta en el lobby, un cable pelado en el parqueadero, una lámpara fundida en la escalera de emergencia. Reportar a tiempo, por simple que parezca, es la acción más efectiva para evitar que una condición menor termine en un accidente grave.</p>
            <h4>Qué hacer al detectar un riesgo</h4>
            <p>El procedimiento recomendado sigue un ciclo de cinco pasos: identificar la condición insegura, reportarla de inmediato a la administración o al personal de mantenimiento (verbalmente y, si es posible, por escrito o por el canal formal establecido), señalizar el área mientras se programa la corrección (usando conos, cinta de peligro o avisos visibles), corregir la condición en el menor tiempo posible según su nivel de riesgo, y verificar que la corrección quedó bien hecha y que el riesgo no volvió a presentarse.</p>
            <p>Este ciclo —identificar, reportar, señalizar, corregir, verificar— es la base de la gestión de riesgos locativos en cualquier propiedad horizontal, y es el mismo esquema que debe aplicarse, con matices, a los demás riesgos que se estudian en los módulos siguientes de este programa.</p>
            <h4>Puntos clave</h4>
            <ul>
                <li>Mantener pasillos, escaleras y zonas comunes libres de obstáculos.</li>
                <li>Reportar de inmediato pisos húmedos, grietas o desniveles sin señalizar.</li>
                <li>Verificar que barandas y pasamanos estén firmes y en buen estado.</li>
                <li>No improvisar conexiones eléctricas ni sobrecargar tomacorrientes.</li>
                <li>Usar señalización visible (cinta, avisos) mientras se corrige cualquier riesgo detectado.</li>
                <li>Informar al administrador o al Comité de Convivencia cualquier condición insegura observada.</li>
            </ul>`,
        preguntas: [
            { pregunta: '¿Qué se considera un riesgo locativo?', opciones: ['Un conflicto entre vecinos', 'Una condición física de las instalaciones que puede causar un accidente', 'Un problema de facturación', 'Una falla en el software'], correcta: 1 },
            { pregunta: 'Si encuentra un piso mojado sin señalizar, ¿qué debe hacer primero?', opciones: ['Ignorarlo', 'Señalizar el área y reportarlo a la administración', 'Limpiarlo con sus propios elementos sin avisar', 'Esperar a que otra persona lo resuelva'], correcta: 1 },
            { pregunta: '¿Cuál de las siguientes NO es una buena práctica frente a riesgos locativos?', opciones: ['Reportar barandas sueltas', 'Mantener pasillos despejados', 'Sobrecargar tomacorrientes para ahorrar espacio', 'Señalizar desniveles'], correcta: 2 },
            { pregunta: '¿A quién se debe informar una condición insegura en el edificio?', opciones: ['A ningún responsable, se resuelve solo', 'Al administrador o Comité de Convivencia', 'Solo a un vecino cualquiera', 'Solo si ocurre un accidente'], correcta: 1 },
            { pregunta: '¿Por qué es importante la buena iluminación en zonas comunes?', opciones: ['Por estética únicamente', 'Porque reduce el riesgo de caídas y accidentes', 'No tiene relación con la seguridad', 'Solo importa en horario nocturno'], correcta: 1 }
        ]
    },
    {
        id: 'agosto',
        mes: 'Agosto',
        tema: 'Uso correcto de extintores',
        duracion: '1 hora',
        minAprobar: 80,
        contenido: `
            <h4>¿Para qué sirve realmente un extintor?</h4>
            <p>El extintor es un equipo de primera respuesta: sirve para controlar un fuego incipiente (conato) en sus primeros segundos, mientras aún es pequeño y manejable, antes de que se propague. No está diseñado para apagar un incendio ya desarrollado, con llamas altas, humo denso o que ya comprometió más de un elemento combustible. En ese escenario la prioridad deja de ser combatir el fuego y pasa a ser evacuar y dar la alarma de inmediato.</p>
            <p>Saber diferenciar estos dos escenarios —conato manejable versus incendio desarrollado— es la primera y más importante lección de este módulo, porque un error de juicio en ese momento (insistir en apagar un fuego que ya no se puede controlar) es una de las causas más frecuentes de lesiones graves durante una emergencia.</p>
            <h4>Tipos de extintor según la clase de fuego</h4>
            <p><strong>Tipo A:</strong> para sólidos combustibles comunes como madera, papel, cartón o tela. <strong>Tipo B:</strong> para líquidos inflamables como gasolina, aceites, pinturas o solventes. <strong>Tipo C:</strong> para fuegos de origen eléctrico o en presencia de equipos energizados; el agente no debe ser conductor de electricidad. <strong>Tipo ABC</strong> (polvo químico seco): es multipropósito y cubre los tres casos anteriores; es el más común en zonas comunes de edificios residenciales precisamente por su versatilidad.</p>
            <p>Usar el tipo de agente equivocado puede agravar el incendio en lugar de controlarlo. El ejemplo más peligroso es usar agua —o un extintor de agua a presión— sobre un fuego eléctrico o de líquidos inflamables: en el primer caso se corre riesgo de electrocución, y en el segundo el líquido inflamable puede flotar sobre el agua y esparcir el fuego en lugar de apagarlo.</p>
            <h4>Técnica de uso: PASS</h4>
            <p><strong>Prender:</strong> retirar el seguro (pasador) tirando de él con firmeza; este paso libera el mecanismo de disparo. <strong>Apuntar:</strong> dirigir la boquilla o manguera hacia la base de las llamas, nunca hacia la parte alta del fuego, porque el objetivo es eliminar el material que se está quemando, no el humo o las llamas visibles. <strong>Sostener:</strong> presionar la palanca de descarga de forma constante y firme, sin soltarla y volverla a presionar de forma intermitente. <strong>Sacudir:</strong> mover la boquilla de lado a lado, cubriendo todo el ancho de la base del fuego, avanzando hacia el foco a medida que las llamas van cediendo.</p>
            <p>Durante toda la maniobra se debe mantener una vía de escape despejada detrás de la persona que opera el extintor, y nunca darle la espalda a la única salida disponible. Si el humo se intensifica o el calor se vuelve insoportable, se debe abandonar el intento y evacuar de inmediato.</p>
            <h4>Antes de intervenir: evalúe la situación</h4>
            <p>Antes de usar un extintor, hágase estas preguntas: ¿el fuego es pequeño y está contenido en un solo elemento?, ¿conozco la ubicación del extintor más cercano y sé que es del tipo correcto para este fuego?, ¿tengo una ruta de salida despejada detrás de mí y no estoy atrapado en un espacio cerrado con el fuego entre la salida y yo? Si la respuesta a cualquiera de estas preguntas es no, la decisión correcta es no intentar apagarlo: active la alarma, evacúe siguiendo el procedimiento del módulo de evacuación, y deje que actúen los bomberos u organismos de socorro especializados.</p>
            <h4>Después del uso y mantenimiento</h4>
            <p>Después de cualquier uso del extintor, por parcial o breve que haya sido, debe reportarse de inmediato a la administración para su recarga, ya que queda inutilizado o con presión insuficiente para una siguiente intervención, aunque visualmente parezca casi lleno.</p>
            <p>El mantenimiento periódico de los extintores es responsabilidad de la administración e incluye: revisión mensual visual de presión (el manómetro debe marcar en la zona verde), estado del sello de seguridad, legibilidad de la etiqueta y que el equipo esté ubicado en un punto visible y libre de obstáculos; y recarga o cambio según la vida útil indicada por el proveedor o la normativa técnica vigente. Cada residente y trabajador debe conocer, como mínimo, la ubicación del extintor más cercano a su unidad y a las zonas comunes que frecuenta con mayor regularidad.</p>
            <h4>Puntos clave</h4>
            <ul>
                <li>Identifique la ubicación de los extintores en su zona y su fecha de vigencia.</li>
                <li>Reconozca el tipo de extintor según el tipo de fuego (A: sólidos, B: líquidos inflamables, C: eléctricos, ABC: multipropósito).</li>
                <li>Recuerde la técnica PASS: Prender (quitar el seguro), Apuntar a la base del fuego, Sostener y apretar la palanca, Sacudir de lado a lado.</li>
                <li>Solo intente apagar un fuego incipiente; si el fuego crece, evacúe y dé la alarma.</li>
                <li>Nunca use agua sobre fuegos eléctricos o de líquidos inflamables.</li>
                <li>Después de usar un extintor, repórtelo para su recarga inmediata.</li>
            </ul>`,
        preguntas: [
            { pregunta: '¿Qué significa la técnica PASS?', opciones: ['Prender, Apuntar, Sostener, Sacudir', 'Parar, Alertar, Salir, Silenciar', 'Presionar, Anunciar, Sostener, Salir', 'Proteger, Avisar, Suspender, Salir'], correcta: 0 },
            { pregunta: '¿Hacia dónde se debe apuntar el chorro del extintor?', opciones: ['Hacia las llamas altas', 'Hacia la base del fuego', 'Hacia el techo', 'Hacia el humo'], correcta: 1 },
            { pregunta: '¿Qué tipo de extintor NO se debe usar en un fuego eléctrico?', opciones: ['Extintor de CO2', 'Extintor tipo C', 'Extintor de agua', 'Extintor ABC'], correcta: 2 },
            { pregunta: '¿Qué debe hacer si el fuego crece y no puede controlarlo con el extintor?', opciones: ['Insistir hasta vaciar el extintor', 'Evacuar y dar la alarma', 'Buscar otro extintor sin avisar a nadie', 'Cerrar puertas y esperar'], correcta: 1 },
            { pregunta: '¿Qué se debe verificar periódicamente en los extintores?', opciones: ['El color del cilindro', 'La fecha de vigencia y presión', 'El peso exacto en gramos', 'Nada, no requieren revisión'], correcta: 1 }
        ]
    },
    {
        id: 'septiembre',
        mes: 'Septiembre',
        tema: 'Procedimientos de evacuación',
        duracion: '1 hora',
        minAprobar: 80,
        contenido: `
            <h4>Qué es evacuar y por qué importa tanto</h4>
            <p>Evacuar es desplazarse de forma ordenada desde una zona de riesgo hacia un lugar seguro, siguiendo rutas y procedimientos previamente establecidos. La diferencia entre una evacuación exitosa y una tragedia casi nunca está en la gravedad del evento que la origina, sino en qué tan bien conoce la comunidad el procedimiento, qué tan clara es la señalización y qué tan rápido actúa cada persona sin caer en pánico ni en comportamientos individualistas que entorpecen la salida de los demás.</p>
            <p>Por esta razón, este es uno de los módulos más importantes de todo el programa de capacitación: cualquier emergencia —incendio, sismo, fuga de gas, amenaza externa— puede requerir una evacuación, y el procedimiento base es en gran medida el mismo para todas ellas.</p>
            <h4>Conocer las rutas antes de necesitarlas</h4>
            <p>El edificio cuenta con rutas de evacuación señalizadas, salidas de emergencia y un punto de encuentro definido fuera de la edificación. Todo residente y trabajador debe identificar, desde su propia unidad o puesto de trabajo, cuál es la ruta más cercana y, de ser posible, una ruta alterna, por si la principal está bloqueada, llena de humo o inaccesible por cualquier motivo.</p>
            <p>Esta información debe estar visible en carteleras, ascensores y zonas comunes mediante planos de evacuación (usted está aquí), y se debe revisar y actualizar cada vez que haya cambios en la distribución del edificio, obras, o traslados temporales de zonas de circulación.</p>
            <h4>Qué hacer al sonar la alarma</h4>
            <p>Mantener la calma es el primer paso, y también el más difícil: el pánico es lo que convierte una evacuación ordenada en una situación caótica y peligrosa. Suspenda de inmediato la actividad que esté realizando, sin detenerse a guardar o recoger objetos personales que no sean estrictamente necesarios (llaves, documento de identidad si están a la mano).</p>
            <p>No utilice los ascensores bajo ninguna circunstancia: pueden quedar atrapados entre pisos, perder energía durante la emergencia o, en caso de incendio, convertirse en una chimenea que propaga humo y calor entre plantas. Diríjase caminando —sin correr— hacia la salida de emergencia más cercana, y al descender o transitar por las escaleras mantenga su derecha, dejando el otro costado libre para el paso de brigadistas, personal de socorro o personas que suben en sentido contrario.</p>
            <p>No se debe regresar por objetos personales dejados atrás, ni por mascotas, ni para avisar a alguien de viva voz si eso implica desviarse de la ruta establecida: para verificar que todos salieron existe el procedimiento de conteo en el punto de encuentro, que es mucho más confiable y seguro que buscar a alguien dentro de una zona de riesgo.</p>
            <h4>Apoyo a personas con necesidades especiales</h4>
            <p>Se debe prestar apoyo prioritario a personas con movilidad reducida, adultos mayores, niños, mujeres en embarazo avanzado y visitantes que no conozcan bien la distribución del edificio. En edificios que cuentan con brigada de emergencia, esta tiene protocolos específicos para asistir a estas personas, incluyendo, en algunos casos, zonas de refugio temporal para quienes no pueden usar escaleras mientras llega ayuda especializada. Cada residente debe conocer si su edificio cuenta con este tipo de protocolo y cómo activarlo.</p>
            <h4>En el punto de encuentro</h4>
            <p>Una vez en el punto de encuentro, se debe permanecer allí, alejado de la edificación y de las vías de acceso de los organismos de socorro (para no obstruir el ingreso de bomberos, ambulancias o patrullas), y esperar instrucciones del coordinador de evacuación o de los delegados de piso.</p>
            <p>El coordinador realiza un conteo para verificar que todas las personas lograron salir con seguridad; por esta razón es fundamental no abandonar el punto de encuentro sin avisar, y reportar de inmediato si se tiene conocimiento de alguna persona que no logró evacuar. El reingreso al edificio solo se autoriza cuando la autoridad competente (bomberos, defensa civil o el coordinador de emergencia) lo indique explícitamente; nunca se debe reingresar por iniciativa propia.</p>
            <h4>Puntos clave</h4>
            <ul>
                <li>Identifique las rutas de evacuación y salidas de emergencia de su torre o piso.</li>
                <li>Conozca el punto de encuentro asignado fuera del edificio.</li>
                <li>Al sonar la alarma, suspenda su actividad, no use ascensores y diríjase con calma a la ruta más cercana.</li>
                <li>Ayude a personas con movilidad reducida, niños o adultos mayores durante la salida.</li>
                <li>No se devuelva por objetos personales.</li>
                <li>Una vez en el punto de encuentro, permanezca allí hasta recibir instrucciones del coordinador de evacuación.</li>
            </ul>`,
        preguntas: [
            { pregunta: '¿Qué NO se debe usar durante una evacuación?', opciones: ['Las escaleras', 'Los ascensores', 'Las salidas de emergencia', 'El punto de encuentro'], correcta: 1 },
            { pregunta: '¿Qué debe hacer si ya evacuó y recuerda que dejó su celular adentro?', opciones: ['Regresar de inmediato por él', 'No regresar y esperar a que termine la emergencia', 'Pedirle a otra persona que entre por él', 'Ignorar la alarma y buscarlo'], correcta: 1 },
            { pregunta: '¿Cuál es la función del punto de encuentro?', opciones: ['Es un lugar decorativo', 'Permite verificar que todos evacuaron con seguridad', 'Es donde se guardan los extintores', 'No tiene ninguna función'], correcta: 1 },
            { pregunta: '¿Qué se debe hacer al escuchar la alarma de evacuación?', opciones: ['Terminar lo que se está haciendo con calma', 'Suspender la actividad y evacuar de inmediato', 'Esperar una segunda alarma', 'Llamar primero a un familiar'], correcta: 1 },
            { pregunta: '¿Quién requiere apoyo prioritario durante una evacuación?', opciones: ['Nadie, cada quien sale solo', 'Personas con movilidad reducida, niños y adultos mayores', 'Solo el personal administrativo', 'Solo quienes viven en pisos altos'], correcta: 1 }
        ]
    },
    {
        id: 'octubre',
        mes: 'Octubre',
        tema: 'Cómo actuar durante un simulacro de emergencia',
        duracion: '1 hora',
        minAprobar: 80,
        contenido: `
            <h4>Qué es un simulacro y para qué sirve</h4>
            <p>Un simulacro es un ejercicio planeado que reproduce, de forma controlada, las condiciones de una emergencia real —incendio, sismo, fuga de gas, entre otras— con el fin de evaluar y mejorar la capacidad de respuesta del edificio y de cada una de las personas que lo habitan o trabajan en él. No es un trámite administrativo ni una interrupción molesta de la rutina diaria: es la única forma de comprobar, antes de que ocurra una emergencia real, si los procedimientos, las rutas de evacuación, la señalización y los tiempos de reacción realmente funcionan como se espera.</p>
            <p>Un edificio puede tener el plan de emergencia mejor documentado del país, pero si nunca se ha puesto a prueba con personas reales moviéndose por las rutas reales, ese plan sigue siendo solo teoría. El simulacro convierte la teoría en práctica y revela los problemas que ningún documento puede anticipar: una puerta que se traba, un tramo de escalera mal señalizado, una alarma que no se escucha bien en cierto piso.</p>
            <h4>Antes del ejercicio</h4>
            <p>La administración generalmente informa la fecha del simulacro y recuerda con anticipación las rutas de evacuación, el punto de encuentro y el rol de cada brigadista. En algunos casos, y de forma legítima, el simulacro se realiza sin previo aviso, precisamente para medir la reacción real de la comunidad ante una alarma inesperada, que es lo más parecido a lo que ocurriría en una emergencia genuina.</p>
            <h4>Durante el simulacro: actuar como si fuera real</h4>
            <p>Durante el ejercicio, cada persona debe actuar exactamente como lo haría en una emergencia real: suspender su actividad al sonar la alarma, seguir la ruta señalizada sin correr, no usar ascensores, y dirigirse con calma pero sin demora hacia el punto de encuentro asignado.</p>
            <p>Tratar el simulacro con ligereza —quedarse a terminar una tarea antes de salir, caminar sin ninguna prisa, ignorar la alarma pensando que "de todas formas es un simulacro", o tomarlo como motivo de burla o distracción— invalida el ejercicio y deja a la comunidad sin datos reales sobre su capacidad de respuesta ante una emergencia verdadera. El valor del simulacro depende directamente de la seriedad con la que se realice.</p>
            <h4>Qué observar durante el desplazamiento</h4>
            <p>Es útil que cada persona, mientras evacúa, preste atención a algunos aspectos que serán valiosos en la retroalimentación posterior: si su ruta estaba despejada o encontró obstáculos, si la señalización era clara y visible en todo el trayecto, si se formaron cuellos de botella en escaleras, puertas o pasillos angostos, y si el tiempo que tomó llegar al punto de encuentro le pareció razonable comparado con la distancia recorrida.</p>
            <h4>Retroalimentación y mejora continua</h4>
            <p>Al finalizar el ejercicio se realiza una retroalimentación (debriefing) donde el coordinador de evacuación informa el tiempo total que tomó la evacuación completa, los hallazgos identificados —obstáculos, personas que no supieron identificar su ruta, fallas en la señalización o en el sistema de alarma— y las acciones de mejora que se implementarán antes del próximo ejercicio.</p>
            <p>La participación activa de los residentes en esta retroalimentación, aportando lo que observaron durante su propio desplazamiento, es lo que permite que cada simulacro sea mejor que el anterior. El objetivo final no es lograr el tiempo más rápido posible, sino una evacuación ordenada, completa y segura, en la que nadie quede atrás y nadie se lesione en el proceso.</p>
            <h4>Puntos clave</h4>
            <ul>
                <li>Trate cada simulacro como si fuera una emergencia real: no lo minimice.</li>
                <li>Siga las instrucciones del coordinador de evacuación y brigadistas en todo momento.</li>
                <li>Cronometre mentalmente su tiempo de salida y evalúe si conoce bien su ruta.</li>
                <li>Observe posibles obstáculos o dificultades durante el ejercicio y repórtelos al finalizar.</li>
                <li>Participe en la retroalimentación posterior al simulacro; ahí se identifican mejoras.</li>
                <li>Recuerde que el objetivo no es la rapidez extrema sino la evacuación ordenada y segura.</li>
            </ul>`,
        preguntas: [
            { pregunta: '¿Cuál es el objetivo principal de un simulacro?', opciones: ['Medir quién corre más rápido', 'Poner a prueba y mejorar los procedimientos de emergencia', 'Interrumpir las actividades del edificio', 'Cumplir un requisito sin importancia'], correcta: 1 },
            { pregunta: 'Durante un simulacro, ¿a quién se debe seguir?', opciones: ['A cualquier persona que corra primero', 'Al coordinador de evacuación y brigadistas', 'A nadie, cada quien decide su ruta', 'Solo a la administración por teléfono'], correcta: 1 },
            { pregunta: '¿Qué se debe hacer al finalizar el simulacro?', opciones: ['Retirarse sin dar información', 'Participar en la retroalimentación y reportar dificultades', 'Olvidar lo ocurrido', 'Solo comentarlo informalmente entre vecinos'], correcta: 1 },
            { pregunta: '¿Cómo se debe asumir un simulacro?', opciones: ['Como algo opcional', 'Como si fuera una emergencia real', 'Como una molestia', 'Solo participan quienes quieran'], correcta: 1 },
            { pregunta: '¿Qué se prioriza durante la evacuación en un simulacro?', opciones: ['La velocidad extrema sobre todo lo demás', 'El orden y la seguridad', 'Salir por cualquier ventana', 'Ignorar las rutas señalizadas'], correcta: 1 }
        ]
    },
    {
        id: 'simulacro-nacional',
        mes: 'Octubre',
        tema: 'Simulacro Nacional ante sismo — rol del delegado de seguridad',
        duracion: '1 hora',
        minAprobar: 80,
        contenido: `
            <h4>1. Qué es el Simulacro Nacional y el papel del delegado</h4>
            <p>El Simulacro Nacional es un ejercicio coordinado por la Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD) en el que entidades públicas, privadas, instituciones educativas y familias de todo el país practican, el mismo día y a la misma hora, su respuesta ante una emergencia. La edición 2026 se realiza el <strong>miércoles 21 de octubre a las 10:00 a.m.</strong> y el escenario es un <strong>sismo (terremoto)</strong>.</p>
            <p>El edificio se inscribe ante la oficina municipal de gestión del riesgo y participa como una organización más. El ejercicio no es un trámite: es la única forma de comprobar, antes de un sismo real, si las rutas de evacuación, la señalización, la alarma y los tiempos de reacción de la comunidad funcionan como se espera.</p>
            <p>El <strong>delegado de seguridad laboral</strong> (vigía SST y líder de la brigada) es quien planea, coordina y evalúa la participación del edificio en las tres fases del ejercicio: antes, durante y después.</p>

            <h4>2. Antes del simulacro</h4>
            <p>La preparación es responsabilidad del delegado junto con la administración:</p>
            <ul>
                <li>Confirmar la inscripción del edificio ante la alcaldía y la fecha y hora del ejercicio.</li>
                <li>Revisar que las rutas de evacuación, las salidas de emergencia y el punto de encuentro estén señalizados, despejados y visibles.</li>
                <li>Actualizar el censo de personas con movilidad reducida, adultos mayores, niños y visitantes frecuentes que requieran apoyo prioritario.</li>
                <li>Verificar que la alarma se escuche en todos los pisos y zonas comunes.</li>
                <li>Difundir el ejercicio con anticipación: carteleras, página web del edificio y los canales de la comunidad, recordando los tres pasos de autoprotección.</li>
                <li>Asignar roles: quién activa la alarma, quién guía cada piso o torre, quién hace el conteo en el punto de encuentro y quién cronometra.</li>
            </ul>

            <h4>3. Durante el simulacro: Agáchate, Cúbrete, Agárrate</h4>
            <p>A las 10:00 a.m. se activa la alarma. La secuencia de autoprotección ante sismo, que el delegado debe conocer y hacer cumplir, es:</p>
            <ul>
                <li><strong>Agáchate:</strong> bajar al nivel del piso antes de que el movimiento lo tumbe.</li>
                <li><strong>Cúbrete:</strong> proteger cabeza y cuello bajo una mesa o escritorio resistente, o junto a un muro estructural interno, lejos de ventanas, vidrios y objetos que puedan caer.</li>
                <li><strong>Agárrate:</strong> sujetarse del mueble de protección y permanecer ahí hasta que el movimiento termine.</li>
            </ul>
            <p>Solo cuando el sismo simulado termina se da la orden de evacuar. El delegado y los guías de piso conducen la salida: caminando sin correr, sin devolverse por objetos personales, <strong>sin usar los ascensores</strong>, manteniendo la derecha en las escaleras y apoyando a las personas del censo de vulnerables. Todos se dirigen al punto de encuentro definido, alejado de la edificación y de las vías de acceso de los organismos de socorro.</p>

            <h4>4. Después del simulacro</h4>
            <ul>
                <li>En el punto de encuentro, el responsable asignado hace el <strong>conteo</strong> y lo verifica contra el censo para saber quién evacuó.</li>
                <li>Se reporta de inmediato a cualquier persona que no haya logrado salir.</li>
                <li>Nadie reingresa al edificio hasta que el delegado o la autoridad competente lo autorice explícitamente.</li>
                <li>Se realiza la <strong>retroalimentación (debriefing)</strong>: tiempo total de evacuación, hallazgos (puertas trabadas, tramos mal señalizados, alarma que no se oye, personas que no supieron su ruta) y acciones de mejora.</li>
            </ul>

            <h4>5. Evaluación y reporte</h4>
            <p>El delegado consolida los resultados y <strong>diligencia el formulario de registro del simulacro</strong> publicado en el sistema SST del edificio (participantes, tiempos, llegada al punto de encuentro, observaciones). Con esa información se elabora el <strong>informe de evaluación</strong> que se entrega a la alcaldía en la segunda semana de noviembre. El objetivo no es el tiempo más rápido, sino una evacuación ordenada, completa y segura en la que nadie quede atrás ni se lesione.</p>

            <h4>Puntos clave</h4>
            <ul>
                <li>Simulacro Nacional 2026: miércoles 21 de octubre, 10:00 a.m., escenario de sismo.</li>
                <li>El delegado planea, coordina y evalúa la participación del edificio en las tres fases.</li>
                <li>Antes: inscripción, rutas despejadas, censo de vulnerables, prueba de alarma, difusión y asignación de roles.</li>
                <li>Durante: Agáchate, Cúbrete, Agárrate; evacuar solo al terminar el movimiento y nunca por el ascensor.</li>
                <li>Después: conteo en el punto de encuentro, reporte de faltantes, no reingresar sin autorización, debriefing.</li>
                <li>Cerrar con el formulario de registro y el informe para la alcaldía en la segunda semana de noviembre.</li>
            </ul>`,
        preguntas: [
            { pregunta: '¿Cuándo se realiza el Simulacro Nacional 2026 y cuál es el escenario?', opciones: ['El 21 de octubre a las 10:00 a.m., escenario de sismo', 'El 22 de octubre a las 9:00 a.m., escenario de incendio', 'Cualquier día de octubre, escenario de inundación', 'El 21 de octubre en la noche, escenario de fuga de gas'], correcta: 0 },
            { pregunta: 'Antes del simulacro, ¿cuál de estas tareas corresponde al delegado de seguridad?', opciones: ['Esperar a que la comunidad se organice sola', 'Actualizar el censo de personas que requieren apoyo prioritario y verificar rutas y alarma', 'Cerrar las salidas de emergencia para que nadie salga antes de tiempo', 'Encargarse únicamente de tomar fotos del ejercicio'], correcta: 1 },
            { pregunta: '¿Cuál es la secuencia de autoprotección ante un sismo?', opciones: ['Correr hacia la salida más cercana de inmediato', 'Agáchate, Cúbrete, Agárrate', 'Ubicarse junto a una ventana para pedir ayuda', 'Tomar el ascensor para bajar más rápido'], correcta: 1 },
            { pregunta: 'Durante la evacuación del simulacro, ¿qué NO se debe hacer?', opciones: ['Caminar sin correr', 'Usar los ascensores', 'Mantener la derecha en las escaleras', 'Apoyar a personas con movilidad reducida'], correcta: 1 },
            { pregunta: 'Después del ejercicio, ¿qué debe hacer el responsable en el punto de encuentro?', opciones: ['Autorizar el reingreso inmediato al edificio', 'Hacer el conteo contra el censo y reportar a quien no haya evacuado', 'Retirarse sin dar información', 'Esperar a que cada quien regrese cuando quiera'], correcta: 1 }
        ]
    },
    {
        id: 'noviembre',
        mes: 'Noviembre',
        tema: 'Manejo seguro de sustancias químicas',
        duracion: '1 hora',
        minAprobar: 80,
        contenido: `
            <h4>Productos de uso cotidiano, riesgos reales</h4>
            <p>En el mantenimiento y aseo de zonas comunes se usan de forma habitual sustancias químicas: hipoclorito de sodio (cloro), amoniaco, ácidos para destape de tuberías, desengrasantes industriales, pulidores de piso y removedores de manchas. Aunque son productos de uso cotidiano y de venta libre, todos son potencialmente peligrosos si se manipulan, almacenan o combinan de forma incorrecta, y pueden causar quemaduras químicas en piel y ojos, intoxicaciones por inhalación, daño respiratorio permanente o, en los casos más graves, incendios y explosiones.</p>
            <p>El riesgo no está solo en los productos más obvios (como los ácidos concentrados), sino también en combinaciones aparentemente inofensivas de productos de limpieza doméstica que, al mezclarse, generan reacciones químicas peligrosas sin que exista ninguna advertencia visible en el momento.</p>
            <h4>La regla de oro: no mezclar productos</h4>
            <p>La regla más importante del manejo de sustancias químicas es no mezclar productos entre sí, incluso si ambos parecen seguros por separado. La combinación más peligrosa y, lamentablemente, más común en labores de limpieza es cloro con amoniaco (presente en algunos limpiadores de vidrios y multiusos), que genera gases de cloramina, altamente tóxicos e irritantes para las vías respiratorias, capaces de causar daño pulmonar severo en cuestión de minutos.</p>
            <p>Igual de riesgosa es la mezcla de cloro con productos ácidos (como algunos destapadores de tuberías), que libera gas cloro, un agente que fue usado históricamente como arma química y que en concentraciones altas puede ser letal en espacios cerrados. Como norma general y sin excepciones, cada producto químico se debe usar solo, nunca combinado con otro, y siempre en espacios ventilados.</p>
            <h4>Antes de usar cualquier producto</h4>
            <p>Antes de usar cualquier sustancia química, se debe leer completamente la etiqueta del envase y, cuando esté disponible, la ficha de datos de seguridad (FDS) del producto, la cual indica su composición, los riesgos asociados, los elementos de protección personal requeridos y las medidas de primeros auxilios en caso de exposición accidental.</p>
            <p>El personal que manipula estos productos de forma habitual debe usar los elementos de protección personal indicados según cada sustancia: guantes resistentes a químicos (no guantes de cocina comunes), gafas de seguridad que cubran bien el contorno de los ojos, y en productos volátiles o de olor fuerte, protección respiratoria adecuada (no basta con un tapabocas de tela).</p>
            <h4>Almacenamiento correcto</h4>
            <p>El almacenamiento correcto exige mantener cada sustancia en su envase original —nunca trasvasada a botellas de gaseosa, agua u otros envases sin etiqueta, práctica que ha causado intoxicaciones graves, especialmente en niños—, bien cerrada después de cada uso, y ubicada en un cuarto o depósito ventilado, lejos de fuentes de calor directo o luz solar prolongada.</p>
            <p>Los productos deben mantenerse separados de alimentos y bebidas, y fuera del alcance de niños y mascotas. Es igualmente importante separar físicamente, en el mismo depósito, los productos incompatibles entre sí (como cloro y ácidos), ubicándolos en estantes distintos para eliminar el riesgo de que un derrame accidental los ponga en contacto.</p>
            <h4>Qué hacer ante una exposición accidental</h4>
            <p><strong>Contacto con la piel:</strong> retirar de inmediato la ropa contaminada y lavar la zona afectada con abundante agua corriente durante varios minutos, sin aplicar cremas ni otros productos sobre la zona.</p>
            <p><strong>Contacto con los ojos:</strong> lavar con agua limpia de forma continua durante al menos quince minutos, sin frotar los ojos, manteniendo los párpados abiertos, y buscar atención médica de inmediato, incluso si el malestar parece leve al inicio.</p>
            <p><strong>Inhalación de gases o vapores:</strong> salir inmediatamente al aire libre y ventilar el área afectada, sin reingresar al espacio cerrado hasta que los vapores se hayan disipado por completo y, de ser posible, con ayuda de personal capacitado.</p>
            <p>En cualquier caso de exposición significativa a una sustancia química, se debe buscar atención médica de inmediato y reportar el incidente por escrito a la administración, indicando el producto involucrado, para que quede registro y se puedan tomar medidas preventivas adicionales.</p>
            <h4>Puntos clave</h4>
            <ul>
                <li>Lea siempre la etiqueta y ficha de seguridad antes de usar un producto químico.</li>
                <li>Nunca mezcle cloro con amoniaco u otros productos: genera gases tóxicos.</li>
                <li>Use los elementos de protección personal indicados (guantes, tapabocas, gafas).</li>
                <li>Almacene las sustancias en su envase original, bien cerrado y en un lugar ventilado.</li>
                <li>Mantenga los productos químicos fuera del alcance de niños y separados de alimentos.</li>
                <li>En caso de contacto con piel, ojos o inhalación, lave con abundante agua y busque atención médica.</li>
            </ul>`,
        preguntas: [
            { pregunta: '¿Qué peligro genera mezclar cloro con amoniaco?', opciones: ['Ninguno, se puede hacer sin problema', 'Produce gases tóxicos peligrosos', 'Mejora la limpieza sin riesgo', 'Solo cambia el color del producto'], correcta: 1 },
            { pregunta: '¿Dónde se debe consultar antes de usar un químico nuevo?', opciones: ['En redes sociales', 'En la etiqueta y ficha de seguridad del producto', 'No es necesario consultar nada', 'Preguntarle a un vecino'], correcta: 1 },
            { pregunta: '¿Cómo se deben almacenar las sustancias químicas?', opciones: ['En cualquier envase disponible', 'En su envase original, cerrado y en lugar ventilado', 'Junto a los alimentos para ahorrar espacio', 'Sin ninguna precaución especial'], correcta: 1 },
            { pregunta: '¿Qué elementos de protección se deben usar al manipular químicos?', opciones: ['Ninguno es necesario', 'Guantes, tapabocas y gafas según el producto', 'Solo gafas de sol', 'Ropa de cualquier tipo'], correcta: 1 },
            { pregunta: '¿Qué hacer si un químico entra en contacto con los ojos?', opciones: ['Frotar los ojos con las manos', 'Lavar con abundante agua y buscar atención médica', 'Esperar a que pase solo', 'Aplicar otro químico para neutralizar'], correcta: 1 }
        ]
    },
    {
        id: 'diciembre',
        mes: 'Diciembre',
        tema: 'Prevención de accidentes en fin de año',
        duracion: '1 hora',
        minAprobar: 80,
        contenido: `
            <h4>Una temporada de mayor riesgo</h4>
            <p>La temporada de fin de año concentra varios factores de riesgo que no están presentes el resto del año: decoración navideña con instalaciones eléctricas temporales, uso indebido de pólvora y fuegos artificiales, mayor afluencia de personas en zonas sociales por celebraciones y reuniones, y, en general, un ambiente de relajamiento frente a las normas de seguridad que se cumplen con más rigor en otras épocas.</p>
            <p>Estadísticamente, diciembre es uno de los meses con más incidentes por quemaduras, incendios domésticos y accidentes en zonas comunes de conjuntos residenciales en Colombia, lo que justifica una capacitación específica y un refuerzo de las medidas preventivas antes de que comience la temporada, no durante ni después de que ocurra un incidente.</p>
            <h4>Riesgo eléctrico de la decoración navideña</h4>
            <p>El riesgo eléctrico es el más frecuente en esta temporada: luces navideñas de baja calidad o sin certificación técnica, extensiones conectadas en cadena (una extensión enchufada a otra en lugar de usar tomacorrientes independientes), y circuitos sobrecargados con múltiples adornos conectados al mismo punto son la principal causa de conatos de incendio en diciembre.</p>
            <p>La recomendación es usar únicamente luces y adornos eléctricos certificados, no exceder la capacidad de carga de los tomacorrientes ni de las extensiones, apagar toda la decoración eléctrica al dormir o al salir del inmueble, y revisar periódicamente que los cables no presenten calentamiento, deterioro o empalmes improvisados.</p>
            <h4>Pólvora y fuegos artificiales: prohibición</h4>
            <p>El uso de pólvora y fuegos artificiales está prohibido dentro de la edificación, en balcones, terrazas, zonas comunes, parqueaderos y en general en todo el perímetro del conjunto residencial, tanto por el riesgo directo de quemaduras e incendio como por las normas municipales que restringen su uso exclusivamente a zonas públicas autorizadas y horarios específicos.</p>
            <p>La administración debe recordar esta prohibición de forma explícita y con suficiente anticipación a las fechas de mayor riesgo (Navidad y Año Nuevo), mediante circulares, carteleras y avisos en los accesos, y debe estar preparada para actuar frente a incumplimientos, dado que un solo incidente con pólvora puede afectar a toda la comunidad, no solo a quien la utiliza.</p>
            <h4>Decoración y aforo en zonas comunes</h4>
            <p>La decoración —árboles navideños, guirnaldas, figuras y adornos en general— no debe obstruir salidas de emergencia, extintores, gabinetes contraincendios, detectores de humo ni rutas de evacuación, y debe fijarse de forma segura para evitar caídas accidentales o riesgo de incendio por cercanía excesiva a fuentes de calor como velas, calentadores o bombillas incandescentes.</p>
            <p>En eventos y reuniones de fin de año realizados en salones sociales o zonas comunes, se debe respetar estrictamente el aforo máximo permitido para el espacio, mantener despejadas todas las salidas durante el evento, y reforzar la vigilancia, especialmente si hay consumo de alcohol, ya que este es un factor que incrementa notablemente el riesgo de accidentes, caídas y conflictos entre asistentes.</p>
            <h4>En síntesis</h4>
            <p>La prevención de accidentes en esta temporada depende de tres frentes de acción concretos: revisar y limitar las instalaciones eléctricas temporales de la decoración navideña, hacer cumplir de manera efectiva la prohibición de pólvora dentro y alrededor del edificio, y mantener un control estricto del aforo y de las rutas de salida durante los eventos sociales de fin de año. Ninguno de estos tres frentes depende de una sola persona: requiere el compromiso conjunto de la administración, el personal del edificio y cada residente.</p>
            <h4>Puntos clave</h4>
            <ul>
                <li>Use luces navideñas certificadas y evite sobrecargar los circuitos eléctricos.</li>
                <li>No conecte varias extensiones en cadena ni deje luces encendidas sin supervisión.</li>
                <li>Está prohibido el uso de pólvora y fuegos artificiales dentro del edificio y zonas comunes.</li>
                <li>Verifique que los árboles y decoraciones no obstruyan salidas de emergencia ni extintores.</li>
                <li>Mantenga vigilancia especial en fiestas y reuniones con alta afluencia de personas.</li>
                <li>Refuerce las normas de convivencia y seguridad antes de eventos masivos en zonas sociales.</li>
            </ul>`,
        preguntas: [
            { pregunta: '¿Qué riesgo aumenta con las luces navideñas mal instaladas?', opciones: ['Ninguno', 'Sobrecarga eléctrica e incendios', 'Solo el consumo de energía', 'Ruido excesivo'], correcta: 1 },
            { pregunta: '¿Está permitido el uso de pólvora en zonas comunes del edificio?', opciones: ['Sí, sin restricciones', 'No, está prohibido', 'Solo en Nochebuena', 'Solo si lo autoriza un vecino'], correcta: 1 },
            { pregunta: '¿Qué se debe verificar respecto a la decoración navideña?', opciones: ['Que no obstruya salidas de emergencia ni extintores', 'Que sea la más grande posible', 'Que tenga la mayor cantidad de luces', 'No requiere ninguna verificación'], correcta: 0 },
            { pregunta: '¿Qué se recomienda en fiestas con alta afluencia de personas?', opciones: ['No tomar ninguna precaución adicional', 'Reforzar vigilancia y normas de convivencia y seguridad', 'Cerrar todas las salidas', 'Ignorar el aforo del salón social'], correcta: 1 },
            { pregunta: '¿Qué práctica eléctrica se debe evitar en esta temporada?', opciones: ['Usar luces certificadas', 'Conectar varias extensiones en cadena', 'Apagar las luces al dormir', 'Revisar cables periódicamente'], correcta: 1 }
        ]
    }
];
