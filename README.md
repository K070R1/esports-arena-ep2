# 🎮 eSports Arena Manager — EP2

Aplicación web para consultar torneos de eSports, equipos participantes, partidas y clasificaciones, con formularios de registro e inscripción. Este repositorio corresponde a la **Evaluación Parcial 2 (EP2)**, en la que se migró el frontend original a **React**.

## 🚀 Tecnologías

- **React** y **Vite** para la interfaz y la compilación.
- **React Router** para la navegación entre páginas.
- **Bootstrap** y CSS para el diseño adaptable.
- **JavaScript (JSX)**, componentes reutilizables, `props`, `useState` y `useEffect`.
- **Jasmine + Karma** para pruebas automatizadas.
- **React Testing Library** para probar componentes e interacciones.
- **Istanbul / karma-coverage** para reportes de cobertura.

## ✨ Funcionalidades

- **Inicio:** presentación de la plataforma.
- **Registro:** formulario con validación de campos, correo y contraseñas.
- **Torneos:** consulta de torneos y acciones según su estado y el perfil del usuario.
- **Inscripción:** formulario para inscribir equipos en torneos abiertos, con validaciones.
- **Equipos:** consulta de equipos, capitanes y estados.
- **Partidas:** visualización de enfrentamientos, fechas y estados.
- **Ranking:** clasificación de equipos con puntos, victorias y derrotas.

> **Alcance de EP2:** el proyecto es un **frontend demostrativo**. Los datos se cargan desde arreglos locales; el registro y la inscripción muestran confirmaciones, pero **no guardan información en una base de datos**. La selección de perfil en el navegador no reemplaza una autenticación real.

## 📋 Requisitos previos

- Node.js y npm instalados.
- Un navegador moderno (por ejemplo, Google Chrome).

## ⚙️ Instalación y ejecución

Clona el repositorio:

```bash
git clone https://github.com/K070R1/esports-arena-ep2.git
cd esports-arena-ep2
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre la dirección local que muestre Vite en la terminal (habitualmente `http://localhost:5173/`).

### Compilación de producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist/`.

## 🧪 Pruebas automatizadas

Ejecuta las pruebas con:

```bash
npm test
```

**Última ejecución verificada:** **44 de 44 pruebas exitosas**, usando Jasmine, Karma y ChromeHeadless.

Las pruebas cubren validaciones de registro e inscripción, reglas de torneos, navegación y renderizado de componentes de torneos, equipos, partidas y ranking.

### 📊 Cobertura reportada

| Métrica | Cobertura |
|---|---:|
| Sentencias | **99,05 %** (105/106) |
| Ramas | **92,95 %** (66/71) |
| Funciones | **96,96 %** (32/33) |
| Líneas | **99,02 %** (102/103) |

> Los porcentajes corresponden a los archivos **instrumentados y ejecutados** durante las pruebas; no deben interpretarse como cobertura global de todos los archivos del repositorio.

El reporte HTML se genera al ejecutar las pruebas, dentro de `coverage/`. Para abrirlo en Windows, después de `npm test`:

```powershell
explorer ".\coverage\Chrome Headless 155.0.0.0 (Windows 10)\index.html"
```

La carpeta exacta puede variar según la versión del navegador.

## 📁 Organización del proyecto

```text
esports-arena-ep2/
├── public/                 # Recursos públicos
├── src/
│   ├── data/
│   │   └── datos.js        # Datos locales de demostración
│   ├── pages/              # Vistas principales de la aplicación
│   │   ├── Home.jsx
│   │   ├── Registro.jsx
│   │   ├── Torneos.jsx
│   │   ├── Inscripcion.jsx
│   │   ├── Equipos.jsx
│   │   ├── Partidas.jsx
│   │   └── Ranking.jsx
│   ├── tests/              # Pruebas Jasmine y componentes React
│   ├── App.jsx             # Rutas y estructura principal
│   └── main.jsx            # Punto de entrada
├── karma.conf.cjs          # Configuración de pruebas y cobertura
├── package.json
└── README.md
```

## 📱 Diseño adaptable

La interfaz utiliza Bootstrap y CSS. Como parte de la EP2, se consideran las resoluciones **360 px, 768 px y 1280 px** para la revisión visual responsive.

## 👥 Equipo de trabajo

- Alexis
- Daniel
- Luciano

## 🔗 Repositorio

[GitHub — eSports Arena EP2](https://github.com/K070R1/esports-arena-ep2)

## 📝 Estado del proyecto

- [x] Migración del frontend a React.
- [x] Navegación entre páginas.
- [x] Formularios con validaciones.
- [x] Pruebas automatizadas: 44/44 exitosas.
- [x] Compilación de producción con Vite.
- [ ] Integración con backend y base de datos (fuera del alcance implementado en EP2).
- [ ] Vista de resultados de torneos finalizados.

---

**Proyecto académico — Evaluación Parcial 2 · Octubre de 2026.**
