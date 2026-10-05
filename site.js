(()=>{
const D=document, root=D.documentElement;
const dict={
 es:{story:'Historia',chapters:'Capítulos',movie:'Película',game:'Videojuego',read:'Leer ahora',pricing:'Precios',access:'Accesibilidad',theme:'Modo claro/oscuro',pay:'Pagar',monthly:'Mensual',annual:'Anual',perMonth:'por mes',perYear:'por año',plans:'Elija su acceso',planLead:'Acceso digital a TECH GUARDIANS y sus contenidos publicados.',checkout:'El pago estará disponible cuando se conecte una pasarela de pago.'},
 en:{story:'Story',chapters:'Chapters',movie:'Movie',game:'Video game',read:'Read now',pricing:'Pricing',access:'Accessibility',theme:'Light/dark mode',pay:'Pay',monthly:'Monthly',annual:'Annual',perMonth:'per month',perYear:'per year',plans:'Choose your access',planLead:'Digital access to TECH GUARDIANS and its published content.',checkout:'Payment will be available when a payment gateway is connected.'},
 pt:{story:'História',chapters:'Capítulos',movie:'Filme',game:'Videogame',read:'Ler agora',pricing:'Preços',access:'Acessibilidade',theme:'Modo claro/escuro',pay:'Pagar',monthly:'Mensal',annual:'Anual',perMonth:'por mês',perYear:'por ano',plans:'Escolha seu acesso',planLead:'Acesso digital ao TECH GUARDIANS e ao conteúdo publicado.',checkout:'O pagamento estará disponível quando uma plataforma de pagamento for conectada.'},
 ja:{story:'ストーリー',chapters:'チャプター',movie:'映画',game:'ゲーム',read:'今すぐ読む',pricing:'料金',access:'アクセシビリティ',theme:'ライト/ダーク',pay:'支払う',monthly:'月額',annual:'年額',perMonth:'月',perYear:'年',plans:'アクセスプラン',planLead:'TECH GUARDIANS と公開コンテンツへのデジタルアクセス。',checkout:'決済サービス接続後に支払いを利用できます。'}
};
let lang=localStorage.getItem('tg-lang')||'es';
function t(k){return (dict[lang]||dict.es)[k]||k}
function applyLang(){root.lang=lang; D.querySelectorAll('[data-i18n]').forEach(x=>x.textContent=t(x.dataset.i18n)); const sel=D.querySelector('#langSelect');if(sel)sel.value=lang;localStorage.setItem('tg-lang',lang)}
function setTheme(v){root.dataset.theme=v;localStorage.setItem('tg-theme',v)}
setTheme(localStorage.getItem('tg-theme')||'dark');
const tools=D.createElement('div');tools.className='site-tools';tools.innerHTML=`<button id="themeToggle" aria-label="${t('theme')}" title="${t('theme')}">◐</button><button id="a11yToggle" aria-expanded="false" aria-controls="a11yPanel">♿ <span data-i18n="access">${t('access')}</span></button><select id="langSelect" aria-label="Idioma"><option value="es">ES</option><option value="en">EN</option><option value="pt">PT</option><option value="ja">日本語</option></select>`;D.body.append(tools);
const panel=D.createElement('div');panel.id='a11yPanel';panel.className='a11y-panel';panel.hidden=true;panel.innerHTML=`<strong data-i18n="access">${t('access')}</strong><button data-a11y="font">A+ Texto</button><button data-a11y="contrast">◩ Contraste</button><button data-a11y="links">🔗 Enlaces</button><button data-a11y="motion">⏸ Movimiento</button><button data-a11y="reset">↺ Restablecer</button>`;D.body.append(panel);
D.querySelector('#themeToggle').onclick=()=>setTheme(root.dataset.theme==='dark'?'light':'dark');
D.querySelector('#a11yToggle').onclick=e=>{panel.hidden=!panel.hidden;e.currentTarget.setAttribute('aria-expanded',String(!panel.hidden))};
D.querySelector('#langSelect').onchange=e=>{lang=e.target.value;applyLang()};
panel.addEventListener('click',e=>{let k=e.target.dataset.a11y;if(!k)return;if(k==='reset'){root.classList.remove('a11y-font','a11y-contrast','a11y-links','a11y-motion');return}root.classList.toggle('a11y-'+k)});
applyLang();
D.querySelectorAll('.pay-btn').forEach(b=>b.addEventListener('click',()=>alert(t('checkout'))));
})();