
document.addEventListener('DOMContentLoaded', () => {
  // Set the default language to 'de' (German)
  let language = localStorage.getItem('lang') || 'fa'; // If no lang param is found, default to German

  // Function to set language-specific content
  const setLanguageContent = (language) => {
    // Select all elements with data-lang-[language] attributes
    const elements = document.querySelectorAll('[data-lang-' + language + ']');

    elements.forEach((element) => {
      const langText = element.getAttribute('data-lang-' + language);
      element.textContent = langText || element.textContent
    });
  };

  // Set language-specific content based on the selected language
  setLanguageContent(language);
  setTextDirection(localStorage.getItem('lang') || 'de')

  // Language switcher functionality
  document.querySelectorAll('.header__language-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      const newLang = link.getAttribute('data-lang'); // Get the language from the clicked link
      // session storage for saving the language. 
      localStorage.setItem("lang", newLang); // Update URL with the new language parameter
      setLanguageContent(newLang);
      setTextDirection(newLang)
    });
  });

  function setTextDirection(lang) {
    document.querySelectorAll('section').forEach(section => {
      section.classList.toggle('fa', lang === 'fa');
      section.classList.toggle('de', lang === 'de');
    });
  }
})