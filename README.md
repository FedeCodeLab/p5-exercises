# 🎨 p5.js Playground

Este repositorio es un espacio personal para experimentar con **p5.js**, una biblioteca de JavaScript orientada al arte generativo, la animación y la visualización creativa.

Cada carpeta (como `test/`) contiene un pequeño ejercicio o sketch desarrollado con p5.js.  
La idea es mantener un entorno modular y organizado para probar distintos conceptos.

---

## 🚀 Estructura

- **p5.d.ts** → Archivo de tipado para contar con autocompletado y soporte de TypeScript en Visual Studio Code.  
- **/test** → Primer sketch de prueba, con un `index.html` que importa p5.js y un `sketch.js` con el código base.

```
test/
├── index.html     # HTML que carga p5.js
└── sketch.js      # Script principal del sketch
```

---

## 🧠 Cómo ejecutar

Podés correr los sketches en local con **Live Server** o **Vite**.

### 👉 Opción 1: con Live Server
1. Abrí Visual Studio Code.
2. Instalá la extensión “Live Server” (si no la tenés).
3. Clic derecho en `index.html` → **Open with Live Server**.

El navegador se abrirá automáticamente y recargará cada vez que guardes.

### 👉 Opción 2: con el comando (sin extensión)
```bash
npx live-server
```

---

## 🧰 Requisitos

- [Node.js](https://nodejs.org/)
- Navegador moderno (Chrome, Firefox, Edge, etc.)
- Visual Studio Code con soporte para JavaScript o TypeScript.

---

## ✨ Créditos

Proyecto creado por **Federico Guzmán** como entorno de práctica personal con **p5.js**.
