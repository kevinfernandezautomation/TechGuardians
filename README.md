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
