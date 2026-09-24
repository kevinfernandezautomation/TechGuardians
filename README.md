# TECH GUARDIANS — Manga Online

Lector web estático del capítulo 1.

## Funciones
- 12 páginas ilustradas incluidas.
- Zoom de 50% a 300%, clic sobre imagen para alternar 100%/200%.
- Navegación por botones, teclado, miniaturas y gesto táctil.
- Guion interno por página.
- Botón **Escuchar página** con Web Speech API y perfiles de voz/tono por personaje.
- Narración en español sin archivos MP3 externos.
- Pantalla completa y diseño responsive.

## Audio
El navegador usa las voces españolas instaladas en el sistema. Por eso la voz exacta puede variar entre Windows, Android, macOS, iOS y navegadores. El texto narrado está dentro de `app.js`, en el arreglo `scripts`.

Para voces profesionales fijas, sustituya Web Speech API por archivos MP3/OGG generados/licenciados y mantenga el mismo arreglo de guion como subtítulos/transcripción.

## Publicación
Puede publicarse como sitio estático en GitHub Pages. Abra `index.html` para probarlo localmente.


## Versión 3
- Corrige el recorte superior: cada página abre desde su borde superior y el contenedor hace scroll.
- Diseño móvil revisado.
- Guion accesible completo para las páginas ilustradas 1–12.
- Audio lee acciones, rótulos, narración y diálogos.
- Casting automático de voces españolas por personaje.
- Consulte `AUDIO_VOCES.md` para producción premium con MP3/OGG.


## Versión 4
- Eliminada la antigua página 2 de imagen, miniaturas, guion y audio.
- 11 páginas publicadas.
- Audio MP3 integrado por cada bloque de texto.
- Voces diferenciadas según personaje/sección.

## Versión 5
- Se reincorporó la página 2 a partir de la imagen suministrada.
- El capítulo vuelve a tener 12 páginas.
- Se eliminaron todos los MP3 y toda la funcionalidad de reproducción de audio.
- El texto visible de la nueva página 2 se transcribió e integró en `app.js` como parte del guion accesible.
- El botón Guion permite consultar narración, rótulos, pantallas y diálogos de cada página.


## Versión 6
- Se integró el MP4 suministrado para la página 1.
- Al iniciar la lectura desde la página 1 aparece: “¿Desea ver esta página en video?”.
- “Ver video” abre un reproductor responsive; “Continuar leyendo” mantiene el manga.
- El video no se reproduce automáticamente sin elección del lector.
- Compatible con escritorio, tablet y móvil mediante `playsinline` y controles nativos.


## Versión 7
- Botón `▶ Video` visible junto a `Guion` dentro del lector.
- El botón funciona en escritorio, tablet y móvil.
- En página 1 reproduce el MP4 integrado; en páginas sin video aparece `Sin video` deshabilitado.
- Botón `⌂ Inicio` visible dentro del lector para cerrar el capítulo y volver a la página principal.


## Versión 8 — corrección funcional
- Corregido un error de orden de inicialización JavaScript que podía detener el script antes de activar los botones.
- `⌂ Inicio` ahora realiza navegación real a `./index.html`.
- `▶ Video` carga explícitamente el MP4 de la página 1 y abre el modal.
- El botón de video se actualiza al cambiar de página.


## Versión 9
- El botón `▶ Video` de la página 1 abre el video publicado en YouTube.
- URL configurada: https://youtu.be/b6xK96FcaoI
- El enlace se abre en una pestaña nueva para no perder la posición de lectura del manga.
- Las demás páginas continúan mostrando `Sin video` hasta que se les asigne un enlace.


## Versión 10
- Páginas 1–5 reemplazadas con las imágenes suministradas.
- Guiones de páginas 1–5 transcritos y sincronizados con cada imagen.
- Se conservan páginas y guiones 6–12.


## Versión 11
- Páginas 6–10 sustituidas por las imágenes suministradas.
- Guiones de páginas 6–10 transcritos e integrados en `app.js`.
- El botón Guion queda sincronizado con la página visible.
- Se conservan páginas y guiones 1–5 y 11–12.
- Se mantiene el enlace de YouTube configurado para la página 1.


## Versión 12
- Página 11 sustituida por la nueva imagen PNG suministrada.
- Página 12 sustituida por la nueva imagen WebP suministrada.
- `app.js` actualizado para cargar `page-12.webp`.
- Guiones completos de las páginas 11 y 12 transcritos e integrados.
- El botón Guion queda sincronizado con las 12 páginas del capítulo.


## Versión 13
- Sustituidas las imágenes de las páginas 1, 2, 3, 4 y 5 del capítulo 1 por las nuevas imágenes WebP suministradas.
- Eliminadas las versiones PNG anteriores de esas cinco páginas.
- `app.js` actualizado para cargar `page-01.webp` a `page-05.webp`.
- Se mantienen sin cambios los guiones asociados y las páginas 6–12.


## Versión 14
- Sustituidas las páginas 6, 7, 8, 9, 10 y 11 del capítulo 1 por las nuevas imágenes WebP suministradas.
- Eliminadas las versiones PNG anteriores de las páginas 6–11.
- `app.js` actualizado para cargar `page-06.webp` a `page-11.webp`.
- Las páginas 1–5 de la versión 13 y la página 12 se mantienen.


## Actualización v15
- Capítulo 1 ampliado a 17 páginas WEBP.
- Páginas 13–17 incorporadas con guion accesible.
- Portada/inicio corregida para usar page-01.webp.
- Página 2 enlazada al video https://youtu.be/lPzLLjLngvQ.
