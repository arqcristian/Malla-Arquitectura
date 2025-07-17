// script.js

const semestres = [
  {
    titulo: "Primer Año - I Semestre",
    materias: [
      { nombre: "Diseño Basico", requisitos: [] },
      { nombre: "Elemens. Y procs. Cons. Basicos", requisitos: [] },
      { nombre: "Estatica", requisitos: [] },
      { nombre: "Expresion Grafica", requisitos: [] },
      { nombre: "Dibujo del natural I", requisitos: [] },
      { nombre: "Teoria de conocimientos e investigación", requisitos: [] },
      { nombre: "Critica y análisis historia arquitectura", requisitos: [] },
    ],
  },
  {
    titulo: "Primer Año - II Semestre",
    materias: [
      { nombre: "Teoria del diseño y procesos de investigación", requisitos: ["Teoria de conocimientos e investigación"] },
      { nombre: "Principios y fundamentos de la arquitectura I", requisitos: [] },
      { nombre: "Metodos y procesos del diseño", requisitos: [] },
      { nombre: "Expresion digital I", requisitos: ["Expresion Grafica"] },
      { nombre: "Dibujo del natural II", requisitos: ["Dibujo del natural I"] },
      { nombre: "Resistencias de materiales I", requisitos: ["Estatica"] },
      { nombre: "Construccion con sistemas de muros estructurales", requisitos: ["Elemens. Y procs. Cons. Basicos"] },
    ],
  },
  {
    titulo: "Segundo Año - III Semestre",
    materias: [
      { nombre: "Critica y análisis histórico de la arquitectura (Edad media)", requisitos: ["Critica y análisis historia arquitectura"] },
      { nombre: "Proyectos I. Conceptualización", requisitos: [] },
      { nombre: "Expresion digital II", requisitos: ["Expresion digital I"] },
      { nombre: "Dibujo del Natural III", requisitos: ["Dibujo del natural II"] },
      { nombre: "Resistencia de materiales III", requisitos: ["Resistencias de materiales I"] },
      { nombre: "Construccion con sistemas mixtos prefabricados", requisitos: ["Construccion con sistemas de muros estructurales"] },
      { nombre: "Principios de edificación sustentable", requisitos: [] },
    ],
  },
  {
    titulo: "Segundo Año - IV Semestre",
    materias: [
      { nombre: "Critica y análisis histórico de la arquitectura (Edad moderna)", requisitos: ["Critica y análisis histórico de la arquitectura (Edad media)"] },
      { nombre: "Principios y fundamentos de la arquitectura II", requisitos: ["Principios y fundamentos de la arquitectura I"] },
      { nombre: "Proyectos II. Diagramatización", requisitos: ["Proyectos I. Conceptualización"] },
      { nombre: "Expresion Digital Visualización", requisitos: ["Expresion digital II", "Dibujo del Natural III"] },
      { nombre: "Analisis de sistemas de estructuras I", requisitos: ["Resistencia de materiales III"] },
      { nombre: "Construccion con sistemas lineales", requisitos: ["Construccion con sistemas mixtos prefabricados"] },
      { nombre: "Instalaciones y sistemas MEP en edificios residenciales", requisitos: [] },
    ],
  },
  {
    titulo: "Tercer Año - V Semestre",
    materias: [
      { nombre: "Critica y análisis histórico de la arquitectura (Edad contemporanea)", requisitos: ["Critica y análisis histórico de la arquitectura (Edad moderna)"] },
      { nombre: "Proyectos III. Morfogenesis", requisitos: ["Proyectos II. Diagramatización"] },
      { nombre: "Expresion arquitectónica visual y grafica", requisitos: ["Expresion Digital Visualización"] },
      { nombre: "Analisis de sistemas de estructuras II", requisitos: ["Analisis de sistemas de estructuras I"] },
      { nombre: "Construccion con sistemas especiales", requisitos: ["Construccion con sistemas lineales"] },
      { nombre: "Instalaciones y sist.MEP en edif. Públicos y privados", requisitos: ["Instalaciones y sistemas MEP en edificios residenciales"] },
    ],
  },
  {
    titulo: "Tercer Año - VI Semestre",
    materias: [
      { nombre: "Proyectos IV. Contextualización", requisitos: ["Proyectos III. Morfogenesis"] },
      { nombre: "sistemas constructivos alternativos", requisitos: ["Construccion con sistemas especiales"] },
      { nombre: "Instalaciones y Sist. HVAC en edif. Públicos y privados", requisitos: ["Instalaciones y sist.MEP en edif. Públicos y privados"] },
      { nombre: "Ecologia Urbana Arquitectonica", requisitos: ["Principios de edificación sustentable"] },
      { nombre: "Conceptos básicos de la ciudad", requisitos: [] },
      { nombre: "Optativa I", requisitos: [] },
      { nombre: "Optativa II", requisitos: [] },
    ],
  },
  {
    titulo: "Cuarto Año - VII Semestre",
    materias: [
      { nombre: "Proyectos V. sistematización", requisitos: ["Proyectos IV. Contextualización"] },
      { nombre: "Prácticas profesionales I: Diseño y proyectos", requisitos: ["Expresion arquitectónica visual y grafica", "Analisis de sistemas de estructuras II", "sistemas constructivos alternativos", "Instalaciones y Sist. HVAC en edif. Públicos y privados"] },
      { nombre: "Física de edificios", requisitos: ["Ecologia Urbana Arquitectonica"] },
      { nombre: "Precios unitarios y cuantitativos de obras", requisitos: [] },
      { nombre: "Aspectos básicos y normativos de las cd contemporáneas", requisitos: ["Conceptos básicos de la ciudad"] },
      { nombre: "Optativa III", requisitos: [] },
      { nombre: "Optativa IV", requisitos: [] },
    ],
  },
  {
    titulo: "Cuarto Año - VIII Semestre",
    materias: [
      { nombre: "Principios y fundamentos de la arquitectura III", requisitos: ["Principios y fundamentos de la arquitectura II"] },
      { nombre: "Proyectos VI. Especificación", requisitos: ["Proyectos V. sistematización"] },
      { nombre: "Prácticas profesionales II: administración y control de obra", requisitos: ["Prácticas profesionales I: Diseño y proyectos"] },
      { nombre: "Gerencia de proyectos", requisitos: [] },
      { nombre: "Presupuestación", requisitos: [] },
      { nombre: "Asentamientos humanos y equipamiento", requisitos: ["Ecologia Urbana Arquitectonica"] },
      { nombre: "Optativa V", requisitos: [] },
    ],
  },
  {
    titulo: "Quinto Año - IX Semestre",
    materias: [
      { nombre: "Taller integral", requisitos: ["Proyectos VI. Especificación"] },
      { nombre: "Prácticas profesionales III consultoría, gestión y gerencia de proyectos", requisitos: ["Prácticas profesionales II: administración y control de obra"] },
      { nombre: "Gestión de proyectos", requisitos: ["Gerencia de proyectos"] },
      { nombre: "Programación de obra", requisitos: ["Presupuestación"] },
      { nombre: "Métodos de intervención de mejoramiento H", requisitos: ["Asentamientos humanos y equipamiento"] },
      { nombre: "Optativa VI", requisitos: [] },
      { nombre: "Optativa VII", requisitos: [] },
    ],
  },
  {
    titulo: "Quinto Año - X Semestre",
    materias: [
      { nombre: "Taller terminal II", requisitos: ["Taller integral"] },
      { nombre: "Optativa VIII", requisitos: [] },
    ],
  },
];

// Crear y renderizar la malla
function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  semestres.forEach(bloque => {
    const grupo = document.createElement("div");
    grupo.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = bloque.titulo;
    grupo.appendChild(titulo);

    bloque.materias.forEach(materia => {
      const div = document.createElement("div");
      div.className = "materia bloqueada";
      div.innerHTML = `<h3>${materia.nombre}</h3><p>Requisitos: ${materia.requisitos.join(", ") || "Ninguno"}</p>`;
      div.onclick = () => aprobarMateria(materia.nombre);
      div.dataset.nombre = materia.nombre;
      grupo.appendChild(div);
    });

    contenedor.appendChild(grupo);
  });

  actualizarMalla();
}

function aprobarMateria(nombre) {
  const div = document.querySelector(`.materia[data-nombre='${nombre}']`);
  if (div.classList.contains("bloqueada")) return;
  div.classList.add("aprobada");
  actualizarMalla();
}

function actualizarMalla() {
  const aprobadas = new Set(
    Array.from(document.querySelectorAll(".materia.aprobada"))
      .map(div => div.dataset.nombre)
  );

  document.querySelectorAll(".materia").forEach(div => {
    const nombre = div.dataset.nombre;
    let materia;
    for (let s of semestres) {
      materia = s.materias.find(m => m.nombre === nombre);
      if (materia) break;
    }

    const requisitosCumplidos = materia.requisitos.every(req => aprobadas.has(req));

    if (aprobadas.has(nombre)) {
      div.classList.remove("bloqueada");
      div.classList.add("aprobada");
    } else if (requisitosCumplidos) {
      div.classList.remove("bloqueada");
    } else {
      div.classList.add("bloqueada");
      div.classList.remove("aprobada");
    }
  });
}

crearMalla();
