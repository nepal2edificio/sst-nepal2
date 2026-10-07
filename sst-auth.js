/* ── INICIO DE SESIÓN REAL · Apps SST de Compliance Pro ──
   Usa Firebase Auth (la misma cuenta del dashboard de Compliance Pro).
   Va en el <head>, después de firebase-app-compat y firebase-auth-compat:
     <script src="sst-auth.js" data-modo="admin"></script>  → herramientas y ejecución: piden iniciar sesión para abrirse
     <script src="sst-auth.js"></script>                    → página pública: solo ofrece window.sstAuth para el botón de administrador
   Espera a DOMContentLoaded para no chocar con el firebase.initializeApp() de cada página.
   Avisa el estado con el evento de documento 'sst-auth' (detail = usuario o null). */
(function () {
    'use strict';
    const CONFIG = {
        apiKey: "AIzaSyCb2pko11_UOP6V5VPQV_xARWrC5wybQ6w",
        authDomain: "compliancepro--o--sistemass.firebaseapp.com",
        databaseURL: "https://compliancepro--o--sistemass-default-rtdb.firebaseio.com",
        projectId: "compliancepro--o--sistemass",
        storageBucket: "compliancepro--o--sistemass.firebasestorage.app",
        messagingSenderId: "188559834704",
        appId: "1:188559834704:web:73f1b088e9dcda16ab9b55"
    };
    const script = document.currentScript;
    const modo = (script && script.dataset.modo) || 'publico';
    let auth = null;
    let resolverListo;

    function mensajeError(ex) {
        const c = (ex && ex.code) || '';
        if (/wrong-password|user-not-found|invalid-credential|invalid-login|invalid-email/.test(c)) return 'Correo o contraseña incorrectos.';
        if (/too-many-requests/.test(c)) return 'Demasiados intentos. Espera unos minutos e intenta de nuevo.';
        if (/network/.test(c)) return 'Sin conexión a internet. Revisa la red e intenta de nuevo.';
        return 'No se pudo iniciar sesión. Intenta de nuevo.';
    }

    window.sstAuth = {
        listo: new Promise(r => { resolverListo = r; }),
        usuario: null,
        mensajeError,
        ultimoError: '',
        /* Devuelve true si entró; si no, deja el motivo en sstAuth.ultimoError y devuelve false */
        async entrar(correo, clave) {
            await window.sstAuth.listo;
            try {
                await auth.signInWithEmailAndPassword(String(correo || '').trim(), clave || '');
                window.sstAuth.ultimoError = '';
                return true;
            } catch (ex) {
                window.sstAuth.ultimoError = mensajeError(ex);
                return false;
            }
        },
        salir() { return auth ? auth.signOut() : Promise.resolve(); }
    };

    /* ── Pantalla de login para páginas administrativas ── */
    if (modo === 'admin') {
        document.documentElement.classList.add('sst-bloqueado');
        const css = document.createElement('style');
        css.textContent = `
            html.sst-bloqueado body > *:not(#sstLogin) { display: none !important; }
            #sstLogin { position: fixed; inset: 0; z-index: 99999; display: flex; align-items: center; justify-content: center; padding: 16px;
                font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; background: radial-gradient(ellipse at top, #24364a 0%, #131c27 60%, #0b1118 100%); }
            #sstLogin form { background: #1b2735; color: #fff; border-radius: 20px; width: 100%; max-width: 360px; padding: 26px;
                border: 1px solid rgba(93,204,193,.2); box-shadow: 0 20px 50px rgba(0,0,0,.45); }
            #sstLogin h1 { font-size: 18px; margin: 0 0 4px; text-align: center; }
            #sstLogin p { font-size: 13px; color: #94a3b8; margin: 0 0 16px; text-align: center; line-height: 1.45; }
            #sstLogin label { display: block; font-size: 12px; font-weight: 600; color: #cbd5e1; margin: 12px 0 6px; }
            #sstLogin input { width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid #334155;
                background: #0f172a; color: #fff; font-size: 15px; outline: none; }
            #sstLogin input:focus { border-color: #5DCCC1; box-shadow: 0 0 0 3px rgba(93,204,193,.2); }
            #sstLogin button { width: 100%; margin-top: 20px; padding: 13px; border: 0; border-radius: 12px; cursor: pointer;
                background: linear-gradient(135deg, #5DCCC1, #3fb3a8); color: #0f172a; font-weight: 700; font-size: 15px; }
            #sstLogin button:disabled { opacity: .6; cursor: default; }
            #sstLogin .sst-err { color: #fca5a5; font-size: 13px; text-align: center; min-height: 18px; margin-top: 10px; }
            #sstLogin .sst-pie { margin-top: 12px; text-align: center; font-size: 11px; color: #64748b; }
            #sstLogin a { color: #5DCCC1; }
        `;
        document.head.appendChild(css);
    }

    function mostrarLogin() {
        if (document.getElementById('sstLogin')) return;
        const div = document.createElement('div');
        div.id = 'sstLogin';
        div.innerHTML = `
            <form>
                <h1>🔒 Acceso administrativo</h1>
                <p>Esta herramienta es solo para la responsable del SG-SST. Entra con tu cuenta de Compliance Pro.</p>
                <label for="sstCorreo">Correo electrónico</label>
                <input id="sstCorreo" type="email" autocomplete="username" required>
                <label for="sstClave">Contraseña</label>
                <input id="sstClave" type="password" autocomplete="current-password" required>
                <button type="submit" id="sstBtn">Entrar</button>
                <div class="sst-err" id="sstErr" aria-live="polite"></div>
                <div class="sst-pie"><a href="./">← Volver a la página del edificio</a></div>
            </form>`;
        document.body.appendChild(div);
        div.querySelector('form').addEventListener('submit', async e => {
            e.preventDefault();
            const btn = document.getElementById('sstBtn');
            const err = document.getElementById('sstErr');
            btn.disabled = true; btn.textContent = 'Entrando...'; err.textContent = '';
            try {
                await auth.signInWithEmailAndPassword(document.getElementById('sstCorreo').value.trim(), document.getElementById('sstClave').value);
            } catch (ex) {
                err.textContent = mensajeError(ex);
                btn.disabled = false; btn.textContent = 'Entrar';
            }
        });
        document.getElementById('sstCorreo').focus();
    }

    function iniciar() {
        try {
            if (!firebase.apps.length) firebase.initializeApp(CONFIG);
            auth = firebase.auth();
        } catch (ex) {
            console.error('sst-auth: no se pudo iniciar Firebase Auth', ex);
            return;
        }
        let primera = true;
        auth.onAuthStateChanged(u => {
            window.sstAuth.usuario = u;
            if (primera) { primera = false; resolverListo(u); }
            if (modo === 'admin') {
                if (u) {
                    document.documentElement.classList.remove('sst-bloqueado');
                    const l = document.getElementById('sstLogin');
                    if (l) l.remove();
                } else {
                    document.documentElement.classList.add('sst-bloqueado');
                    mostrarLogin();
                }
            }
            document.dispatchEvent(new CustomEvent('sst-auth', { detail: u }));
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
    else iniciar();
})();
