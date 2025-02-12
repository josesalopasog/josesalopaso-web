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
      "I am an electronic engineer and software developer, passionate about the world of programming. Currently, I am enhancing my skills in fullstack web development and seeking for opportunities to advance my professional career in this area. I have over 3 years of work experience in electronic security and data analysis.",
    readyToWork: "Ready to work",
    fromColombia: "From Colombia",
    willingToMove: "Willing to move",
      /*----Projects----*/
    projectOneInfo: "This project is primarily focused on animations and UI/UX enhancements.",
    projectTwoInfo: "An e-commerce clone inspired by Mercado Libre.",
    projectThreeInfo: "An web application to keep track of ToDo's",
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
    contactMail: "Or mail me:",
    /*----Footer----*/
    madeWith: "Made with",
    by: "by Jose Salopaso",
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
      "Soy ingeniero electrónico y desarrollador de software, apasionado por el mundo de la programación. Actualmente, estoy mejorando mis habilidades en el desarrollo web fullstack y busco oportunidades para avanzar en mi carrera profesional en esta área. Tengo más de 3 años de experiencia laboral en seguridad electrónica y análisis de datos.",
      readyToWork: "Listo para trabajar",
      fromColombia: "De Colombia",
      willingToMove: "Dispuesto a viajar",
      /*----Projects----*/
    projectOneInfo: "Este proyecto se centra principalmente en animaciones y mejoras de UI/UX.",
    projectTwoInfo: "Un e-commerce clon, inspirado en Mercado Libre.",
    projectThreeInfo: "Una aplicación web para listar tus ToDo's",
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
    contactMail: "O envíame un correo:",
    /*----Footer----*/
    madeWith: "Hecho con el",
    by: "por Jose Salopaso",
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
