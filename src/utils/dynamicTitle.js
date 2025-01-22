// Selecciona todos los elementos con la clase 'dynamic-title'
const titles = document.querySelectorAll('.dynamic-title');

// Configura el Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const title = entry.target; // Obtiene el elemento actual observado
      if (entry.isIntersecting) {
        title.classList.add('visible'); // Agrega la clase cuando el título es visible
      } else {
        title.classList.remove('visible'); // Elimina la clase cuando el título ya no está visible
      }
    });
  },
  { threshold: 0.8 } // Se activa cuando al menos el 80% del título es visible
);

// Observa cada título
titles.forEach((title) => {
  observer.observe(title);
});