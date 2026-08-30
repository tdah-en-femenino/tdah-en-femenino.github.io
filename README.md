# TDAH en Femenino

Landing page del proyecto **TDAH en Femenino**: recursos y guías (PDFs) para
entender y acompañar el TDAH en mujeres. Página estática en español (neutro),
alojada en GitHub Pages.

- **Web:** https://tdah-en-femenino.github.io
- **Stack:** HTML + CSS + JavaScript (sin dependencias ni build).

## Estructura

```
.
├── index.html            # Contenido de la página
├── assets/
│   ├── css/styles.css    # Estilos y paleta de colores
│   └── js/main.js        # Menú móvil y año del footer
├── .nojekyll             # Evita el procesado de Jekyll
└── README.md
```

## Cómo editar el contenido

Todo el texto está en `index.html`. Los textos de ejemplo están marcados entre
corchetes, por ejemplo `[Tu nombre]` o `[Precio]`. Busca los corchetes `[...]`
y sustitúyelos por tu información real.

Puntos principales a personalizar:

1. **Sobre mí** — sección `id="sobre-mi"`: tu nombre, profesión y biografía.
2. **Productos** — sección `id="productos"`: duplica una `article.product-card`
   por cada PDF y cambia el título, la descripción, el precio y el enlace de
   Hotmart (`href="https://hotmart.com/..."`).
3. **Redes / contacto** — sección `id="contacto"`: reemplaza los `href="#"` por
   tus perfiles y el `mailto:` por tu correo real.
4. **Foto** — reemplaza el bloque `.photo-placeholder` por una `<img>` cuando
   tengas la imagen (guárdala en `assets/img/`).

## Paleta de colores

Definida en `assets/css/styles.css` (bloque `:root`):

| Uso                 | Color     |
| ------------------- | --------- |
| Fondo claro         | `#e8e2d6` |
| Fondo/acento morado | `#9c82c7` |
| Títulos y texto     | `#4f3b5c` |
| Destacado (terra)   | `#b85c38` |
| Destacado (oro)     | `#c79a2b` |

## Ver en local

Abre `index.html` directamente en el navegador, o levanta un servidor simple:

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## Despliegue en GitHub Pages

Al ser un repositorio de tipo *user/organization site*
(`tdah-en-femenino.github.io`), GitHub Pages publica automáticamente el
contenido de la rama `main`.

1. Haz commit y push de los cambios a `main`.
2. En GitHub: **Settings → Pages** → *Source*: `Deploy from a branch`,
   rama `main` y carpeta `/ (root)`.
3. En unos minutos estará disponible en https://tdah-en-femenino.github.io