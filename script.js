const ramos = [
  { id: "COMUNICACION ORAL Y ESCRITA I", nombre: "COMUNICACION ORAL Y ESCRITA I", tipo: "FF", semestre: "1-1", prerequisitos: [] },
  { id: "APRENDIZAJE DEL INGLES A TRAVES DE CONTEXTOS CULTURALES", nombre: "APRENDIZAJE DEL INGLÉS A TRAVÉS DE CONTEXTOS CULTURALES", tipo: "FB", semestre: "1-1", prerequisitos: [] },
  { id: "PROCESOS DE APRENDIZAJE DEL ADOLESCENTE", nombre: "PROCESOS DE APRENDIZAJE DEL ADOLESCENTE", tipo: "FD", semestre: "1-1", prerequisitos: [] },
  { id: "IDENTIDAD PROFESIONAL DOCENTE", nombre: "IDENTIDAD PROFESIONAL DOCENTE", tipo: "FD", semestre: "1-1", prerequisitos: [] },
  { id: "ELEMENTOS DE MATEMATICA BASICA", nombre: "ELEMENTOS DE MATEMÁTICA BÁSICA", tipo: "FB", semestre: "1-1", prerequisitos: [] },
  { id: "ALGEBRA I", nombre: "ÁLGEBRA I", tipo: "FB", semestre: "1-1", prerequisitos: [] },
  { id: "FISICA GENERAL I", nombre: "FÍSICA GENERAL I", tipo: "FB", semestre: "1-1", prerequisitos: [] },
  
  { id: "COMUNICACION ORAL Y ESCRITA II", nombre: "COMUNICACIÓN ORAL Y ESCRITA II", tipo: "FF", semestre: "1-2", prerequisitos: ["COMUNICACION ORAL Y ESCRITA I"] },
  { id: "DEPORTES I", nombre: "DEPORTES I", tipo: "FF", semestre: "1-2", prerequisitos: [] },
  { id: "APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS I", nombre: "APRENDIZAJE DEL INGLÉS A TRAVÉS DE CIENCIAS BÁSICAS I", tipo: "FB", semestre: "1-2", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CONTEXTOS CULTURALES"] },
  { id: "APRENDIZAJE DE LAS CIENCIAS", nombre: "APRENDIZAJE DE LAS CIENCIAS", tipo: "FD", semestre: "1-2", prerequisitos: ["PROCESOS DE APRENDIZAJE DEL ADOLESCENTE"] },
  { id: "ALGEBRA II", nombre: "ÁLGEBRA II", tipo: "FB", semestre: "1-2", prerequisitos: ["ALGEBRA I", "ELEMENTOS DE MATEMATICA BASICA"] },
  { id: "CALCULO I", nombre: "CÁLCULO I", tipo: "FB", semestre: "1-2", prerequisitos: ["ELEMENTOS DE MATEMATICA BASICA"] },
  { id: "FISICA GENERAL II", nombre: "FÍSICA GENERAL II", tipo: "FB", semestre: "1-2", prerequisitos: ["FISICA GENERAL I", "ELEMENTOS DE MATEMATICA BASICA"] },
  
  { id: "AUTOGESTION DEL APRENDIZAJE", nombre: "AUTOGESTIÓN DEL APRENDIZAJE", tipo: "FF", semestre: "2-1", prerequisitos: [] },
  { id: "DEPORTES II", nombre: "DEPORTES II", tipo: "FC", semestre: "2-1", prerequisitos: ["DEPORTES I"] },
  { id: "APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS II", nombre: "APRENDIZAJE DEL INGLÉS A TRAVÉS DE CIENCIAS BÁSICAS II", tipo: "FB", semestre: "2-1", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS I"] },
  { id: "ENFOQUES DIDACTICOS APLICADOS AL AULA", nombre: "ENFOQUES DIDÁCTICOS APLICADOS AL AULA", tipo: "FD", semestre: "2-1", prerequisitos: ["APRENDIZAJE DE LAS CIENCIAS"] },
  { id: "ALGEBRA III", nombre: "ÁLGEBRA III", tipo: "FB", semestre: "2-1", prerequisitos: ["ALGEBRA II"] },
  { id: "CALCULO II", nombre: "CÁLCULO II", tipo: "FB", semestre: "2-1", prerequisitos: ["CALCULO I"] },
  { id: "MECANICA CLASICA", nombre: "MECÁNICA CLÁSICA", tipo: "FB", semestre: "2-1", prerequisitos: ["FISICA GENERAL II", "CALCULO I"] },

  { id: "TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES", nombre: "TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES", tipo: "FF", semestre: "2-2", prerequisitos: ["AUTOGESTION DEL APRENDIZAJE"] },
  { id: "APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS III", nombre: "APRENDIZAJE DEL INGLÉS A TRAVÉS DE CIENCIAS BÁSICAS III", tipo: "FB", semestre: "2-2", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS II"] },
  { id: "PRACTICA DE OBSERVACION I", nombre: "PRÁCTICA DE OBSERVACIÓN I", tipo: "DC", semestre: "2-2", prerequisitos: ["ENFOQUES DIDACTICOS APLICADOS AL AULA"] },
  { id: "DISENO DESARROLLO Y EVALUACION DEL CURRICULO", nombre: "DISEÑO, DESARROLLO Y EVALUACIÓN DEL CURRÍCULO", tipo: "FD", semestre: "2-2", prerequisitos: ["ENFOQUES DIDACTICOS APLICADOS AL AULA"] },
  { id: "CALCULO III", nombre: "CÁLCULO III", tipo: "FD", semestre: "2-2", prerequisitos: ["CALCULO II", "ALGEBRA II"] },
  { id: "PROBABILIDAD", nombre: "PROBABILIDAD", tipo: "FD", semestre: "2-2", prerequisitos: ["CALCULO II"] },
  { id: "ELECTRICIDAD Y MAGNETISMO", nombre: "ELECTRICIDAD Y MAGNETISMO", tipo: "FD", semestre: "2-2", prerequisitos: ["FISICA GENERAL II", "CALCULO II"] },

  { id: "COMPRENSION DE CONTEXTOS SOCIALES", nombre: "COMPRENSIÓN DE CONTEXTOS SOCIALES", tipo: "FF", semestre: "3-1", prerequisitos: ["COMUNICACION ORAL Y ESCRITA II"] },
  { id: "APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS IV", nombre: "APRENDIZAJE DEL INGLÉS A TRAVÉS DE CIENCIAS BÁSICAS IV", tipo: "FB", semestre: "3-1", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS III"] },
  { id: "PRACTICA DE OBSERVACION II", nombre: "PRÁCTICA DE OBSERVACIÓN II", tipo: "DC", semestre: "3-1", prerequisitos: ["PRACTICA DE OBSERVACION I"] },
  { id: "EVALUACION DE APRENDIZAJES", nombre: "EVALUACIÓN DE APRENDIZAJES", tipo: "FD", semestre: "3-1", prerequisitos: ["ENFOQUES DIDACTICOS APLICADOS AL AULA"] },
  { id: "ECUACIONES DIFERENCIALES", nombre: "ECUACIONES DIFERENCIALES", tipo: "FD", semestre: "3-1", prerequisitos: ["CALCULO III"] },
  { id: "ESTADISTICA", nombre: "ESTADÍSTICA", tipo: "FD", semestre: "3-1", prerequisitos: ["PROBABILIDAD"] },
  { id: "ONDAS Y OPTICA", nombre: "ONDAS Y ÓPTICA", tipo: "FD", semestre: "3-1", prerequisitos: ["ELECTRICIDAD Y MAGNETISMO"] },

  { id: "COMPRENSION DE CONTEXTOS CULTURALES", nombre: "COMPRENSIÓN DE CONTEXTOS CULTURALES", tipo: "FF", semestre: "3-2", prerequisitos: ["COMPRENSION DE CONTEXTOS SOCIALES"] },
  { id: "APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS V", nombre: "APRENDIZAJE DEL INGLÉS A TRAVÉS DE CIENCIAS BÁSICAS V", tipo: "FB", semestre: "3-2", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS IV"] },
  { id: "TALLER DE DESARROLLO DE COMPETENCIAS B2", nombre: "TALLER DE DESARROLLO DE COMPETENCIAS B2", tipo: "FB", semestre: "3-2", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS IV"] },
  { id: "PRACTICA INICIAL", nombre: "PRÁCTICA INICIAL", tipo: "DC", semestre: "3-2", prerequisitos: ["PRACTICA DE OBSERVACION II"] },
  { id: "LAS TICS EN LA ENSENANZA DE LAS CIENCIAS", nombre: "LAS TICS EN LA ENSEÑANZA DE LAS CIENCIAS", tipo: "FD", semestre: "3-2", prerequisitos: ["CALCULO III", "PROBABILIDAD", "ELECTRICIDAD Y MAGNETISMO", "DISENO DESARROLLO Y EVALUACION DEL CURRICULO", "PRACTICA DE OBSERVACION I", "APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS III", "TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES"] },
  { id: "GEOMETRIA I", nombre: "GEOMETRÍA I", tipo: "FD", semestre: "3-2", prerequisitos: ["ALGEBRA III"] },
  { id: "DIDACTICA DE LA MATEMATICA", nombre: "DIDÁCTICA DE LA MATEMÁTICA", tipo: "FD", semestre: "3-2", prerequisitos: ["EVALUACION DE APRENDIZAJES"] },
  { id: "TERMODINAMICA", nombre: "TERMODINÁMICA", tipo: "FD", semestre: "3-2", prerequisitos: ["ECUACIONES DIFERENCIALES"] },

  { id: "ETICA Y RESPONSABILIDAD SOCIAL", nombre: "ÉTICA Y RESPONSABILIDAD SOCIAL", tipo: "FF", semestre: "4-1", prerequisitos: ["COMPRENSION DE CONTEXTOS CULTURALES", "TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES"] },
  { id: "APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS VI", nombre: "APRENDIZAJE DEL INGLÉS A TRAVÉS DE CIENCIAS BÁSICA VI", tipo: "FB", semestre: "4-1", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS V"] },
  { id: "PRACTICA INTENSIVA I", nombre: "PRÁCTICA INTENSIVA I", tipo: "DC", semestre: "4-1", prerequisitos: ["PRACTICA INICIAL"] },
  { id: "GESTION DE AULAS HETEROGENEAS", nombre: "GESTIÓN DE AULAS HETEROGÉNEAS", tipo: "FD", semestre: "4-1", prerequisitos: ["DIDACTICA DE LA MATEMATICA"] },
  { id: "METODOLOGIA DE LA INVESTIGACION EDUCATIVA", nombre: "METODOLOGÍA DE LA INVESTIGACIÓN EDUCATIVA", tipo: "FD", semestre: "4-1", prerequisitos: ["LAS TICS EN LA ENSENANZA DE LAS CIENCIAS", "GEOMETRIA I", "DIDACTICA DE LA MATEMATICA", "TERMODINAMICA", "PRACTICA INICIAL", "TALLER DE DESARROLLO DE COMPETENCIAS B2", "APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS V"] },
  { id: "DIDACTICA DE LA FISICA", nombre: "DIDÁCTICA DE LA FÍSICA", tipo: "FD", semestre: "4-1", prerequisitos: ["DIDACTICA DE LA MATEMATICA"] },
  { id: "GEOMETRIA II", nombre: "GEOMETRÍA II", tipo: "FD", semestre: "4-1", prerequisitos: ["GEOMETRIA I"] },

  { id: "RESPONSABILIDAD SOCIAL", nombre: "RESPONSABILIDAD SOCIAL", tipo: "FF", semestre: "4-2", prerequisitos: ["ETICA Y RESPONSABILIDAD SOCIAL"] },
  { id: "APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS VII", nombre: "APRENDIZAJE DEL INGLÉS A TRAVÉS DE CIENCIAS BÁSICAS VII", tipo: "FB", semestre: "4-2", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS VI"] },
  { id: "PRACTICA DE INVESTIGACION-ACCION", nombre: "PRÁCTICA DE INVESTIGACIÓN-ACCIÓN", tipo: "DC", semestre: "4-2", prerequisitos: ["PRACTICA INTENSIVA I"] },
  { id: "ORIENTACION Y PROFESOR JEFE", nombre: "ORIENTACIÓN Y PROFESOR JEFE", tipo: "FD", semestre: "4-2", prerequisitos: ["GESTION DE AULAS HETEROGENEAS"] },
  { id: "FISICA MODERNA", nombre: "FÍSICA MODERNA", tipo: "FD", semestre: "4-2", prerequisitos: ["ONDAS Y OPTICA"] },
  { id: "TRABAJO DE GRADO", nombre: "TRABAJO DE GRADO", tipo: "FD", semestre: "4-2", prerequisitos: ["METODOLOGIA DE LA INVESTIGACION EDUCATIVA"] },

  { id: "APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS VIII", nombre: "APRENDIZAJE DEL INGLÉS A TRAVÉS DE CIENCIAS BÁSICAS VIII", tipo: "FB", semestre: "5-1", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS VII"] },
  { id: "PRACTICA INTENSIVA 2", nombre: "PRÁCTICA INTENSIVA 2", tipo: "DC", semestre: "5-1", prerequisitos: ["PRACTICA DE INVESTIGACION-ACCION"] },
  { id: "PRACTICA DE CONSEJO DE CURSO", nombre: "PRÁCTICA DE CONSEJO DE CURSO", tipo: "DC", semestre: "5-1", prerequisitos: ["PRACTICA DE INVESTIGACION-ACCION"] },
  { id: "ELEMENTOS DE GEOFISICA Y ASTRONOMIA", nombre: "ELEMENTOS DE GEOFÍSICA Y ASTRONOMÍA", tipo: "FB", semestre: "5-1", prerequisitos: ["FISICA MODERNA"] },
  { id: "TEMAS DE FISICA DE FRONTERAS", nombre: "TEMAS DE FÍSICA DE FRONTERAS", tipo: "FD", semestre: "5-1", prerequisitos: ["FISICA MODERNA"] },
  { id: "GEOMETRIA III", nombre: "GEOMETRÍA III", tipo: "FD", semestre: "5-1", prerequisitos: ["GEOMETRIA II"] },

  { id: "TALLER DE DESARROLLO DE COMPETENCIAS C1", nombre: "TALLER DE DESARROLLO DE COMPETENCIAS C1", tipo: "FB", semestre: "5-2", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS VIII"] },
  { id: "PRACTICA PROFESIONAL", nombre: "PRÁCTICA PROFESIONAL", tipo: "DC", semestre: "5-2", prerequisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE CIENCIAS BASICAS VIII", "PRACTICA INTENSIVA 2", "PRACTICA DE CONSEJO DE CURSO", "ELEMENTOS DE GEOFISICA Y ASTRONOMIA", "TEMAS DE FISICA DE FRONTERAS", "GEOMETRIA III"] }
];

const mallaDiv = document.getElementById("malla");

const ramosPorAño = {};
ramos.forEach(ramo => {
  const [año, semestre] = ramo.semestre.split("-");
  if (!ramosPorAño[año]) ramosPorAño[año] = {};
  if (!ramosPorAño[año][semestre]) ramosPorAño[año][semestre] = [];
  ramosPorAño[año][semestre].push(ramo);
});

for (let año in ramosPorAño) {
  const contenedorAño = document.createElement("div");
  contenedorAño.classList.add("año");

  for (let semestre in ramosPorAño[año]) {
    const contenedorSemestre = document.createElement("div");
    contenedorSemestre.classList.add("semestre");
    contenedorSemestre.innerHTML = `<h2>Año ${año} - Semestre ${semestre}</h2>`;

    ramosPorAño[año][semestre].forEach(ramo => {
      const div = document.createElement("div");
      div.className = `ramo ${ramo.tipo}`;
      div.textContent = ramo.nombre;
      div.dataset.id = ramo.id;
      div.dataset.prerequisitos = ramo.prerequisitos.join(",");
      div.onclick = () => {
        div.classList.toggle("aprobado");
        actualizarEstado();
      };
      contenedorSemestre.appendChild(div);
    });

    contenedorAño.appendChild(contenedorSemestre);
  }

  mallaDiv.appendChild(contenedorAño);
}

function actualizarEstado() {
  const todos = document.querySelectorAll(".ramo");
  const aprobados = new Set(
    [...todos].filter(el => el.classList.contains("aprobado")).map(el => el.dataset.id)
  );

  todos.forEach(el => {
    if (el.classList.contains("aprobado")) return;

    const prereq = el.dataset.prerequisitos.split(",").filter(p => p);
    const habilitado = prereq.every(p => aprobados.has(p));
    el.classList.toggle("habilitado", habilitado);
  });
}
