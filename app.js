const totalPages=12;
const pages=['assets/images/chapter-01/page-01.png','assets/images/chapter-01/page-02.png','assets/images/chapter-01/page-03.png','assets/images/chapter-01/page-04.png','assets/images/chapter-01/page-05.png','assets/images/chapter-01/page-06.png','assets/images/chapter-01/page-07.png','assets/images/chapter-01/page-08.png','assets/images/chapter-01/page-09.png','assets/images/chapter-01/page-10.png','assets/images/chapter-01/page-11.png','assets/images/chapter-01/page-12.png'];

/*
 Guion accesible completo para las páginas ilustradas 1–12.
 Incluye descripción de cada viñeta/acción y todos los textos hablados del guion técnico.
 Al agregar páginas 13–32, añada sus líneas siguiendo la misma estructura.
*/
const scripts=[
[{s:'ESCENA',t:'Vista panorámica de una megaciudad en 2045 al amanecer. Trenes, hospitales, campus, drones logísticos, semáforos y edificios muestran discretos indicadores conectados a NEXUS.'},{s:'NARRADOR',t:'Año 2045.'},{s:'NARRADOR',t:'El mundo no depende de una sola máquina.'},{s:'NARRADOR',t:'Depende de millones de sistemas que aprendieron a trabajar juntos.'},{s:'RÓTULO',t:'NEXUS. Infraestructura digital internacional.'}],
[{s:'NARRADOR',t:'NEXUS es una infraestructura digital que conecta el mundo.'},{s:'NARRADOR',t:'Permite que personas, organizaciones y sistemas trabajen juntos, sin importar dónde se encuentren.'},{s:'NARRADOR',t:'Un mundo conectado para un mejor mañana...'},{s:'NARRADOR',t:'Durante años todo funcionó.'},{s:'NARRADOR',t:'Ciudades más inteligentes.'},{s:'NARRADOR',t:'Servicios más rápidos.'},{s:'NARRADOR',t:'Mayores oportunidades.'},{s:'NARRADOR',t:'Un futuro con más posibilidades.'},{s:'NARRADOR',t:'Pero hoy... algo ha cambiado.'},{s:'RÓTULO',t:'TOKIO, JAPÓN. Akira — Desarrollo de software.'},{s:'AKIRA',t:'Todo parece estar en línea. El código no muestra errores. ¿Será solo un problema temporal?'},{s:'RÓTULO',t:'MADRID, ESPAÑA. Maya — Quality Engineer.'},{s:'MAYA',t:'Esto no es normal... Varias pruebas han fallado al mismo tiempo. Necesitamos investigar.'},{s:'PANTALLA',t:'TESTS FAILED. Login API. User Data. Payments. Notifications. Sync Services.'},{s:'RÓTULO',t:'NOTICIAS EN VIVO. Cobertura internacional. ÚLTIMA HORA.'},{s:'NOTICIAS',t:'FALLAS EN SISTEMAS GLOBALES. CIUDADES REPORTAN INTERRUPCIONES EN SERVICIOS ESENCIALES.'},{s:'RÓTULO',t:'NUEVA YORK, EE. UU. Leo — Inteligencia artificial.'},{s:'LEO',t:'Los patrones son extraños. Hay múltiples anomalías en diferentes países. Voy a analizar más datos con los modelos de IA.'},{s:'RÓTULO',t:'SÃO PAULO, BRASIL. Hana — Ciberseguridad.'},{s:'PANTALLA',t:'ACCESOS SOSPECHOSOS.'},{s:'HANA',t:'Estamos viendo intentos de acceso no autorizados. Esto podría ser un ataque coordinado.'},{s:'RÓTULO',t:'TORONTO, CANADÁ. Noah — Cloud y DevOps.'},{s:'PANTALLA',t:'SERVICIOS EN RIESGO. Cloud Services. Bases de datos. Red global. Balanceadores. Región: Múltiples.'},{s:'NOAH',t:'Varios servicios están degradados. Necesitamos escalar esto inmediatamente.'},{s:'RÓTULO',t:'CIUDAD DE MÉXICO, MÉXICO. Sofia — UX y accesibilidad.'},{s:'SOFIA',t:'Los usuarios están reportando problemas. Personas que no pueden acceder a servicios básicos. Esto ya está afectando la vida real.'},{s:'RÓTULO',t:'ORION. Asistente de IA.'},{s:'ORION',t:'Estoy recopilando información de todas las fuentes disponibles. Las anomalías ocurren en diferentes regiones y sectores. La causa aún es desconocida.'},{s:'CIERRE',t:'DIFERENTES LUGARES. EL MISMO PROBLEMA. ESTO ES SOLO EL INICIO.'}],
[{s:'ESCENA',t:'Centro de operaciones. Miles de indicadores permanecen en verde. Un pequeño indicador cambia de verde a amarillo. Un operador mira la pantalla sin preocupación.'},{s:'OPERADOR',t:'Latencia de doscientos ochenta milisegundos. Probablemente un nodo saturado.'},{s:'ESCENA',t:'El indicador vuelve a verde.'},{s:'OPERADOR',t:'Resuelto.'},{s:'NARRADOR',t:'La primera anomalía duró menos de cuatro segundos.'}],
[{s:'ESCENA',t:'Una aplicación de transporte muestra una ruta normal. De repente, la ruta cambia a un destino imposible.'},{s:'USUARIA',t:'¿Qué...?'},{s:'ESCENA',t:'La pantalla se corrige sola.'},{s:'USUARIA',t:'Debí tocar algo.'},{s:'ESCENA',t:'En segundo plano, otro usuario observa el mismo comportamiento.'},{s:'NARRADOR',t:'La segunda fue fácil de ignorar.'}],
[{s:'ESCENA',t:'Sala de desarrollo. Akira está frente a tres monitores con código y métricas.'},{s:'RÓTULO',t:'Akira. Desarrollo de software.'},{s:'ESCENA',t:'Un compañero señala una alerta.'},{s:'COMPAÑERO',t:'La API de movilidad devolvió respuestas inconsistentes.'},{s:'AKIRA',t:'¿Cambió el contrato?'},{s:'ESCENA',t:'Akira revisa los registros rápidamente.'},{s:'AKIRA',t:'No. El código desplegado coincide con el repositorio.'},{s:'ESCENA',t:'Akira frunce el ceño.'},{s:'AKIRA',t:'Entonces, ¿por qué respondió algo que nadie programó?'}],
[{s:'ESCENA',t:'Akira ejecuta pruebas locales. Todas pasan.'},{s:'PANTALLA',t:'Ciento veintiocho pruebas. Ciento veintiocho correctas.'},{s:'AKIRA',t:'Funciona aquí.'},{s:'ESCENA',t:'Observa telemetría remota con picos breves.'},{s:'AKIRA',t:'Pero no allá.'},{s:'ESCENA',t:'Marca un evento temporal.'},{s:'AKIRA',t:'Dos diecisiete cuarenta y tres... cuatro segundos.'},{s:'ESCENA',t:'Otro evento aparece en otro país.'},{s:'AKIRA',t:'¿La misma duración?'}],
[{s:'ESCENA',t:'Laboratorio de calidad. Maya examina una aplicación en varios dispositivos.'},{s:'RÓTULO',t:'Maya. Quality Engineer.'},{s:'ESCENA',t:'Una prueba muestra éxito.'},{s:'TÉCNICO',t:'Ya pasó. Podemos cerrar el incidente.'},{s:'MAYA',t:'Una ejecución correcta no demuestra que el problema desapareció.'},{s:'ESCENA',t:'Maya cambia idioma, conexión y datos.'},{s:'MAYA',t:'Cambiemos las condiciones.'},{s:'ESCENA',t:'La aplicación devuelve información contradictoria.'},{s:'MAYA',t:'Ahí estás.'}],
[{s:'ESCENA',t:'Maya captura evidencia.'},{s:'MAYA',t:'Entrada: usuario válido. Red inestable. Región distinta.'},{s:'ESCENA',t:'Anota el resultado esperado y el obtenido.'},{s:'MAYA',t:'Esperado: información sincronizada. Obtenido: dos estados incompatibles.'},{s:'ESCENA',t:'El técnico se sorprende.'},{s:'TÉCNICO',t:'¿Es el mismo fallo?'},{s:'MAYA',t:'Todavía no lo sé.'},{s:'ESCENA',t:'Primer plano de Maya.'},{s:'MAYA',t:'Pero ya sé cómo hacerlo aparecer.'}],
[{s:'ESCENA',t:'Centro de inteligencia artificial y datos. Leo analiza grandes gráficos.'},{s:'RÓTULO',t:'Leo. Inteligencia artificial.'},{s:'ESCENA',t:'Un modelo agrupa anomalías.'},{s:'LEO',t:'Busca correlaciones entre los eventos de las últimas doce horas.'},{s:'ESCENA',t:'Los resultados parecen inconexos.'},{s:'LEO',t:'Transporte, educación, salud... no comparten aplicación.'},{s:'ESCENA',t:'Leo amplía el análisis.'},{s:'LEO',t:'Entonces busquemos qué sí comparten.'}],
[{s:'ESCENA',t:'Leo observa que varios incidentes cruzan servicios conectados a NEXUS.'},{s:'LEO',t:'Todos consultaron infraestructura distribuida en la misma ventana temporal.'},{s:'ESCENA',t:'Un colega propone una causa.'},{s:'COLEGA',t:'¿Ataque?'},{s:'LEO',t:'Demasiado pronto.'},{s:'ESCENA',t:'Leo alimenta el modelo con más datos.'},{s:'LEO',t:'Una correlación no es una causa.'},{s:'ESCENA',t:'Surge una forma extraña en el gráfico.'},{s:'LEO',t:'Pero esto... no parece ruido.'}],
[{s:'ESCENA',t:'Centro de ciberseguridad. Hana revisa el tráfico.'},{s:'RÓTULO',t:'Hana. Ciberseguridad.'},{s:'ESCENA',t:'Las alertas son normales. No hay una intrusión clara.'},{s:'HANA',t:'No hay credenciales robadas. No hay malware conocido.'},{s:'ESCENA',t:'Un analista se relaja.'},{s:'ANALISTA',t:'Entonces no es seguridad.'},{s:'HANA',t:'Eso no significa que sea seguro.'},{s:'ESCENA',t:'Hana detecta solicitudes legítimas en una secuencia anómala.'},{s:'HANA',t:'Alguien, o algo, está usando caminos permitidos de una forma que no esperábamos.'}],
[{s:'ESCENA',t:'Hana compara firmas.'},{s:'HANA',t:'Las solicitudes están autenticadas.'},{s:'ESCENA',t:'Un mapa muestra accesos en varios países.'},{s:'HANA',t:'Y vienen de sistemas diferentes.'},{s:'ESCENA',t:'Primer plano de sus ojos.'},{s:'HANA',t:'Si fuera un atacante, tendría que conocer demasiadas arquitecturas.'},{s:'ESCENA',t:'Aparece una nueva alerta.'},{s:'SISTEMA',t:'Incidente de disponibilidad. Nodo siete.'},{s:'HANA',t:'Ahora sí tenemos un problema.'}]
];

const voiceProfiles={
'NARRADOR':{rate:.88,pitch:.90},'ESCENA':{rate:.92,pitch:.96},'RÓTULO':{rate:.88,pitch:.86},
'AKIRA':{rate:.98,pitch:.94},'MAYA':{rate:.94,pitch:1.08},'LEO':{rate:.97,pitch:.91},
'HANA':{rate:.91,pitch:1.02},'NOAH':{rate:.96,pitch:.90},'SOFIA':{rate:.93,pitch:1.10},
'SISTEMA':{rate:.82,pitch:.72},'PANTALLA':{rate:.86,pitch:.80},'OPERADOR':{rate:.94,pitch:.90},
'COMPAÑERO':{rate:.98,pitch:.97},'TÉCNICO':{rate:.95,pitch:.95},'COLEGA':{rate:.96,pitch:.93},
'ANALISTA':{rate:.94,pitch:.92},'USUARIA':{rate:.96,pitch:1.10}
};

const reader=document.querySelector('#reader'),pageImage=document.querySelector('#pageImage'),
pageLabel=document.querySelector('#pageLabel'),progress=document.querySelector('#progress'),
thumbs=document.querySelector('#thumbs'),stage=document.querySelector('#readerStage'),
scriptPanel=document.querySelector('#scriptPanel'),scriptText=document.querySelector('#scriptText'),
voiceStatus=document.querySelector('#voiceStatus');
let current=0,fitWidth=false,touchX=0,zoom=1;

function renderScript(){
  scriptText.innerHTML='';
  (scripts[current]||[]).forEach(line=>{
    const d=document.createElement('div');d.className='script-line';
    const sp=document.createElement('span');sp.className='speaker';sp.textContent=line.s+': ';
    const tx=document.createElement('span');tx.className=(line.s==='NARRADOR'||line.s==='ESCENA')?'narrator':'';tx.textContent=line.t;
    d.append(sp,tx);scriptText.appendChild(d);
  });
  document.querySelector('#scriptTitle').textContent=`Guion completo · página ${current+1}`;
}

function applyZoom(){
  const shell=document.querySelector('.page-shell');
  shell.style.setProperty('--zoom',zoom);
  document.querySelector('#zoomValue').textContent=`${Math.round(zoom*100)}%`;
  stage.classList.toggle('zoomed',zoom>1);
}
function render(){
  pageImage.src=pages[current];pageImage.alt=`TECH GUARDIANS — capítulo 1, página ${current+1}`;
  pageLabel.textContent=`Página ${current+1} de ${totalPages}`;
  progress.style.width=`${((current+1)/totalPages)*100}%`;
  document.querySelectorAll('.thumbs img').forEach((x,i)=>x.classList.toggle('active',i===current));
  document.querySelectorAll('.thumbs img')[current]?.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  zoom=1;applyZoom();renderScript();
  document.querySelector('.page-scroll')?.scrollTo({top:0,left:0});
}
function openReader(){reader.classList.add('open');reader.setAttribute('aria-hidden','false');document.body.classList.add('reader-open');render();}
function closeReader(){reader.classList.remove('open');reader.setAttribute('aria-hidden','true');document.body.classList.remove('reader-open');}
function go(n){current=Math.max(0,Math.min(totalPages-1,n));render();}

pages.forEach((src,i)=>{const im=new Image();im.src=src;im.alt=`Miniatura página ${i+1}`;im.loading='lazy';im.onclick=()=>go(i);thumbs.appendChild(im)});
['openReader','heroRead','cardRead'].forEach(id=>document.getElementById(id).onclick=openReader);
document.getElementById('closeReader').onclick=closeReader;
document.getElementById('prevPage').onclick=()=>go(current-1);document.getElementById('nextPage').onclick=()=>go(current+1);
document.getElementById('fitToggle').onclick=()=>{fitWidth=!fitWidth;stage.classList.toggle('fit-width',fitWidth);document.getElementById('fitToggle').textContent=fitWidth?'Página':'Ajustar ancho';zoom=1;applyZoom();document.querySelector('.page-scroll')?.scrollTo({top:0,left:0});};
document.getElementById('fullScreen').onclick=()=>{if(!document.fullscreenElement)reader.requestFullscreen?.();else document.exitFullscreen?.()};
document.getElementById('zoomIn').onclick=()=>{zoom=Math.min(3,zoom+.25);applyZoom()};
document.getElementById('zoomOut').onclick=()=>{zoom=Math.max(.5,zoom-.25);applyZoom()};
document.getElementById('zoomReset').onclick=()=>{zoom=1;applyZoom();document.querySelector('.page-scroll')?.scrollTo({top:0,left:0});};
pageImage.onclick=()=>{zoom=zoom===1?2:1;applyZoom();};
document.getElementById('toggleScript').onclick=()=>scriptPanel.hidden=!scriptPanel.hidden;
document.getElementById('closeScript').onclick=()=>scriptPanel.hidden=true;
document.addEventListener('keydown',e=>{if(!reader.classList.contains('open'))return;if(e.key==='ArrowRight'||e.key==='PageDown')go(current+1);if(e.key==='ArrowLeft'||e.key==='PageUp')go(current-1);if(e.key==='+'){zoom=Math.min(3,zoom+.25);applyZoom()}if(e.key==='-'){zoom=Math.max(.5,zoom-.25);applyZoom()}if(e.key==='Escape'&&!document.fullscreenElement)closeReader();});
stage.addEventListener('touchstart',e=>touchX=e.changedTouches[0].clientX,{passive:true});
stage.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-touchX;if(Math.abs(d)>55&&zoom===1)go(current+(d<0?1:-1))},{passive:true});
render();
