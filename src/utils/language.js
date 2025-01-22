// Traducciones
const translations = {
  en: {
    /*----Header---- */
    aboutMe: "About Me",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Let's Chat",
    /*----Welcome---- */
    welcomeData: "Hi, I'm",
    /*----About Me---- */
    textAboutMe:
      "I am a software developer focused on data analysis, data science, machine learning, frontend and backend development. With the skills I have learned, my job is to help companies to improve ther data analysis and visualization in web enviroments. ",
    /*----Projects----*/
    projectOneInfo: "An e-commerce clone inspired by Mercado Libre.",
    projectTwoInfo: "An web application to keep track of ToDo's",
    codeButton: "Code",
    moreProjects: "More Projects",
    moreProjectsInfo: "Check out my other projects on:",
    /*----Skills----*/
    skillsIKnow: "I know:",
    skillsLearning: "I'm learning:",
    everydayLearning: "¡Every day I try to learn something new!",
    /*----Education----*/
    professional: "Professional",
    certificatedCourses: "Certificated Courses",
    universityTitle: "Electronic Engineer",
    university: "Universidad Sergio Arboleda",
    april2024: "April 2024",
    reactViteTailwindCourse: "React.js course with Vite.js and TailwindCSS",
    january2025: "January 2025",
    reactBasicCourse: "React.js course",
    npmCourse: "NPM Course: Package and Dependency Management in JavaScript",
    domCourse: "JavaScript Course: DOM Manipulation",
    jsFundamentalsCourse: "JavaScript Fundamentals Course",
    frontendCourse: "Frontend Developer Course",
    jsExpert: "JavaScript University - From Zero to JavaScript Expert!",
    sapCourse: "SAP ERP System",
    gitCourse: "Git and GitHub from Zero to Expert",
    pythonData: "Python for Data Science & Machine Learning",
    pythonAdvanced: "Python advanced programmer",
    cProgramming: "C programming",
    excelAdvanced: "Advanced Excel",
    november2024: "November 2024",
    december2024: "December 2024",
    september2024: "September 2024",
    august2024: "August 2024",
    october2020: "October 2020",
    /*----Contact----*/
    contactInfo: "If you want to work with me, reach me at:",
    contactMail: "Or mail me:"
  },
  es: {
    /*----Header---- */
    aboutMe: "Sobre Mi",
    projects: "Proyectos",
    skills: "Habilidades",
    education: "Educación",
    contact: "Contacto",
    /*----Welcome---- */
    welcomeData: "Hola, soy",
    /*----About Me---- */
    textAboutMe:
      "Soy un desarrolador de software enfocado en el analisis de datos, machine learning, desarrollo frontend y backend. Con las habilidades que he aprendido, mi trabajo consiste  en ayudar a las compañias en mejorar su analisis de datos y su visualización en los enternos web.",
    /*----Projects----*/
    projectOneInfo: "Un e-commerce clon, inspirado en Mercado Libre.",
    projectTwoInfo: "Una aplicación web para listar tus ToDo's",
    codeButton: "Código",
    moreProjects: "Otros Proyectos",
    moreProjectsInfo: "Mira mis otros proyectos en:",
    /*----Skills----*/
    skillsIKnow: "Aprendidas:",
    skillsLearning: "Aprendiendo:",
    everydayLearning: "¡Todos los días trato de aprender algo nuevo!",
    /*----Education----*/
    professional: "Profesional",
    certificatedCourses: "Cursos Certificados",
    universityTitle: "Ingeniero Electrónico",
    university: "Universidad Sergio Arboleda",
    april2024: "Abril 2024",
    reactViteTailwindCourse: "Curso de React.js con Vite.js y TailwindCSS",
    january2025: "Enero 2025",
    reactBasicCourse: "Curso básico de React.js",
    npmCourse: "Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript",
    domCourse: "Curso de JavaScript: Manipulación del DOM",
    jsFundamentalsCourse: "Curso de Fundamentos de JavaScript",
    frontendCourse: "Curso de Desarrollo Frontend",
    jsExpert: "Universidad de JavaScript: ¡De Cero a Experto en JavaScript!",
    sapCourse: "Sistema SAP ERP",
    gitCourse: "Git y GitHub: De Cero a Experto",
    pythonData: "Python para Ciencia de Datos y Machine Learning",
    pythonAdvanced: "Programador avanzado de Python",
    cProgramming: "Programación en C",
    excelAdvanced: "Excel Avanzado",
    november2024: "Noviembre 2024",
    december2024: "Diciembre 2024",
    september2024: "Septiembre 2024",
    august2024: "Agosto 2024",
    october2020: "Octubre 2020",
    /*----Contact----*/
    contactInfo: "Si quieres trabajar conmigo, hablame en:",
    contactMail: "O envíame un correo:"
  },
};

// Idioma inicial
let currentLang = "en";

// Cambiar el idioma y el contenido
function toggleLanguage() {
  // Alternar idioma
  currentLang = currentLang === "en" ? "es" : "en";

  // Actualizar el botón visualmente
  const languageButton = document.getElementById("language-switcher");
  languageButton.setAttribute("data-lang", currentLang);

  // Actualizar los textos de la página
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[currentLang][key]) {
      element.textContent = translations[currentLang][key];
    }
  });
}

// Inicializar el idioma en el botón
document
  .getElementById("language-switcher")
  .setAttribute("data-lang", currentLang);

// Escuchar clics en el botón
document
  .getElementById("language-switcher")
  .addEventListener("click", toggleLanguage);
