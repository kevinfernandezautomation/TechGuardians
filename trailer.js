// v28: Reproductor oficial YouTube; se descarga al cerrar para detener audio y video.
(()=>{
 const btn=document.getElementById('openMovieTrailer');
 const modal=document.getElementById('movieTrailerModal');
 const close=document.getElementById('closeMovieTrailer');
 const frame=document.getElementById('movieTrailerFrame');
 if(!btn||!modal||!close||!frame)return;
 let previous=null;
 const embed='https://www.youtube-nocookie.com/embed/asQC8_5kcZE?autoplay=1&rel=0';
 function open(){previous=document.activeElement;modal.hidden=false;modal.setAttribute('aria-hidden','false');document.body.classList.add('trailer-open');frame.src=embed;close.focus();}
 function hide(){frame.removeAttribute('src');modal.hidden=true;modal.setAttribute('aria-hidden','true');document.body.classList.remove('trailer-open');previous?.focus();}
 btn.addEventListener('click',open);close.addEventListener('click',hide);
 modal.addEventListener('click',e=>{if(e.target===modal)hide()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)hide()});
})();
