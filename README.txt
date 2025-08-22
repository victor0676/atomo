ÁTOMO DE OXÍGENO 3D + CÓDIGO QR
================================

Qué incluye
-----------
- index.html  → Visor 3D del átomo de oxígeno (modelo de Bohr simplificado) con:
  * Rotación por tacto/ratón (OrbitControls).
  * Modo giroscopio para móviles (DeviceOrientation).
  * Auto-rotación opcional y reinicio de cámara.
- qr.html     → Generador de código QR para apuntar a la URL pública donde alojes el visor.
- (Esta carpeta) lista para subir a un hosting estático (GitHub Pages, Netlify, Vercel, servidor escolar, etc.).

Cómo probar en tu computador
----------------------------
1) Abre el archivo index.html en un navegador moderno (Chrome, Edge, Safari, Firefox).
2) En móvil, verás el botón “Activar modo giroscopio”. En iOS, el sistema te pedirá permiso para usar el sensor.

Publicar en internet (GitHub Pages en 2-3 minutos)
--------------------------------------------------
1) Crea un repositorio público en GitHub llamado, por ejemplo, "atomo-oxigeno".
2) Sube el contenido de esta carpeta (index.html, qr.html).
3) En el repo, ve a Settings → Pages → Source: "Deploy from a branch". Selecciona "main" y carpeta "/" (root).
4) GitHub te dará una URL del estilo:
   https://TU_USUARIO.github.io/atomo-oxigeno/
   Asegúrate de que index.html se cargue correctamente en el navegador.

Generar un QR listo para imprimir
---------------------------------
1) Abre "qr.html".
2) Pega la URL pública (por ejemplo, https://TU_USUARIO.github.io/atomo-oxigeno/index.html).
3) Pulsa “Generar” y luego “Descargar PNG”. ¡Listo! Imprime ese QR y pégalo donde quieras.

Sugerencias
-----------
- Si compartirás el QR en aulas con poca conectividad, usa un acortador (bit.ly) para reducir el tamaño del QR.
- Puedes cambiar colores y velocidades editando "index.html". Busca las líneas con materiales y animaciones.

Notas técnicas
--------------
- Se usa Three.js (CDN) y DeviceOrientationControls (CDN). Requiere conexión a internet para cargar estas librerías.
- El modelo representa 2 electrones en la capa K y 6 en la capa L. La nube electrónica real es distinta; este es un modelo didáctico.
- Tested en Chrome/Android y Safari/iOS recientes.

Actualización v2:
- Paleta de colores renovada (núcleo ámbar, electrones esmeralda, capas violeta).
- Etiquetas 3D ancladas (núcleo, capas K/L, electrones) con botón para mostrar/ocultar.


Solución de problemas (v3 Compatibilidad)
- Si ves la página pero no el átomo: al abrir con file:/// algunos navegadores bloquean módulos ES. Esta versión usa scripts clásicos.
- Requiere conexión para cargar las librerías desde cdn.jsdelivr.net.
- Si WebGL está desactivado, el banner rojo lo indicará. Activa la aceleración por hardware.
- En iOS, el giroscopio sólo funciona en https o localhost y con permiso del usuario.


v4 (Sprites de texto)
- Reemplaza CSS2DRenderer por etiquetas con Sprites (canvas->textura), evitando el error 'CSS2DRenderer is not a constructor'.
- Compatible al abrir con file:// (scripts clásicos) y sin dependencias extra.


v5 (MathUtils fix)
- Reemplaza THREE.Math.degToRad por fallback seguro a THREE.MathUtils.degToRad (o cálculo manual), corrigiendo 'THREE.Math is undefined'.


v6 (Controles integrados)
- Elimina dependencias de OrbitControls/DeviceOrientationControls.
- Incluye controles propios: arrastrar para rotar, rueda/pellizco para zoom, auto-rotación y giroscopio básico.
- Mayor compatibilidad al abrir con file:// y redes restringidas.
