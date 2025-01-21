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
        textAboutMe: "I am a software developer focused on data analysis, data science, machine learning, frontend and backend development. With the skills I have learned, my job is to help companies to improve ther data analysis and visualization in web enviroments. ",
        /*----Projects----*/
        projectOneInfo: "An e-commerce clone inspired by Mercado Libre.",
        projectTwoInfo: "An web application to keep track of ToDo's",
        codeButton: "Code",
        moreProjects: "More Projects", 
        moreProjectsInfo: "Check out my other projects on:",
        /*----Skills----*/
        skillsIKnow: "I know:",
        skillsLearning: "I'm learning:",
        everydayLearning: "¡Every day I try to learn something new!"
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
        textAboutMe: "Soy un desarrolador de software enfocado en el analisis de datos, machine learning, desarrollo frontend y backend. Con las habilidades que he aprendido, mi trabajo consiste  en ayudar a las compañias en mejorar su analisis de datos y su visualización en los enternos web.",
        /*----Projects----*/
        projectOneInfo: "Un e-commerce clon, inspirado en Mercado Libre.",
        projectTwoInfo: "Una aplicación web para listar tus ToDo's",
        codeButton: "Código",
        moreProjects: "Otros Proyectos", 
        moreProjectsInfo: "Mira mis otros proyectos en:",
        /*----Skills----*/
        skillsIKnow: "Aprendidas:",
        skillsLearning: "Aprendiendo:",
        everydayLearning: "¡Todos los días trato de aprender algo nuevo!"
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
document.getElementById("language-switcher").setAttribute("data-lang", currentLang);

// Escuchar clics en el botón
document.getElementById("language-switcher").addEventListener("click", toggleLanguage);