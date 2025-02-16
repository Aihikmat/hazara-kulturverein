// document.addEventListener('DOMContentLoaded', () => {
//   // Get current language from URL parameter or default to German
//   const params = new URLSearchParams(window.location.search);
//   const currentLang = params.get('lang') || 'de';

//   // Set the initial language
//   setLanguage(currentLang);

//   // Add click handlers only to language switcher links
//   document.querySelectorAll('.header__language-link').forEach(link => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();
//       const newLang = link.getAttribute('data-lang');

//       // Avoid resetting the same language
//       if (document.documentElement.getAttribute('lang') === newLang) {
//         return;
//       }

//       setLanguage(newLang);

//       // Update URL without refreshing the page
//       const newUrl = new URL(window.location.href);
//       newUrl.searchParams.set('lang', newLang);
//       window.history.pushState({}, '', newUrl);
//     });
//   });
// });

// function setLanguage(lang) {
//   // Update HTML `lang` attribute
//   document.documentElement.setAttribute('lang', lang);

//   // Add RTL support for Persian
//   if (lang === 'fa') {
//     document.body.classList.add('rtl');
//   } else {
//     document.body.classList.remove('rtl');
//   }

//   // Update all text content with the correct language
//   document.querySelectorAll(`[data-lang-de], [data-lang-fa]`).forEach(element => {
//     const newContent = element.getAttribute(`data-lang-${lang}`);
//     if (newContent) {
//       element.textContent = newContent;
//     }
//   });

//   // Highlight the active language link
//   document.querySelectorAll('.header__language-link').forEach(link => {
//     link.classList.toggle('active', link.getAttribute('data-lang') === lang);
//   });
// }





document.addEventListener('DOMContentLoaded', () => {
  // Function to get URL query parameter
  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  // Set the default language to 'de' (German)
  let language = localStorage.getItem('lang') || 'fa'; // If no lang param is found, default to German

  // Function to set language-specific content
  const setLanguageContent = (language) => {
    // Select all elements with data-lang-[language] attributes
    const elements = document.querySelectorAll('[data-lang-' + language + ']');
    
    elements.forEach((element) => {
      const langText = element.getAttribute('data-lang-' + language);
      if (langText) {
        element.textContent = langText; // Update the text content
      }
    });
  };

  // Set language-specific content based on the selected language
  setLanguageContent(language);

  // Update the language links with the selected language
  //const languageLinks = document.querySelectorAll('.header__language-link');
  //languageLinks.forEach(link => {
    //const currentLang = getQueryParam('lang') || 'de';
    //link.href = `?lang=${currentLang === 'de' ? 'fa' : 'de'}`; // Toggle between 'de' and 'fa'
    //localStorage.setItem("lang", currentLang)
  //});

  // Language switcher functionality
  document.querySelectorAll('.header__language-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      const newLang = link.getAttribute('data-lang'); // Get the language from the clicked link
      // session storage for saving the language. 
      localStorage.setItem("lang", newLang); // Update URL with the new language parameter
      setLanguageContent(newLang);
    });
  });
});












// document.addEventListener('DOMContentLoaded', () => {
//   // Get current language from URL parameter or default to German
//   const params = new URLSearchParams(window.location.search);
//   const currentLang = params.get('lang') || 'de';
  
//   // Set the initial language
//   setLanguage(currentLang);

//   // Add click handlers only to language switcher links
//   document.querySelectorAll('.header__language-link').forEach(link => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();
//       const newLang = link.getAttribute('data-lang');
      
//       // Avoid resetting the same language
//       if (document.documentElement.getAttribute('lang') === newLang) {
//         return;
//       }
      
//       setLanguage(newLang);
      
//       // Update URL without refreshing the page
//       const newUrl = new URL(window.location.href);
//       newUrl.searchParams.set('lang', newLang);
//       window.history.pushState({}, '', newUrl);
//     });
//   });

//   // Handle smooth scroll navigation for header links
//   document.querySelectorAll('.header__link').forEach(link => {
//     link.addEventListener('click', (e) => {
//       // Make sure the click is not on a language switcher link
//       if (link.classList.contains('header__language-link')) {
//         return;
//       }

//       // Get the target section ID from the href attribute
//       const targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href
//       const targetElement = document.getElementById(targetId);
      
//       // If the section exists, scroll to it
//       if (targetElement) {
//         e.preventDefault(); // Prevent the default anchor behavior
//         targetElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     });
//   });

//   // Prevent default behavior for Persian content clicks
//   document.querySelectorAll('[data-lang-fa]').forEach(element => {
//     // Skip language switcher links as they're handled separately
//     if (!element.classList.contains('header__language-link')) {
//       element.addEventListener('click', (e) => {
//         // Only prevent default if it's a clickable element
//         if (element.tagName === 'A' || element.tagName === 'BUTTON') {
//           e.preventDefault();
//         }
//       });
//     }
//   });
// });

// function setLanguage(lang) {
//   // Update HTML lang attribute
//   document.documentElement.setAttribute('lang', lang);

//   // Add RTL support for Persian
//   if (lang === 'fa') {
//     document.body.classList.add('rtl');
//   } else {
//     document.body.classList.remove('rtl');
//   }

//   // Update all text content with the correct language
//   document.querySelectorAll('[data-lang-de], [data-lang-fa]').forEach(element => {
//     const newContent = element.getAttribute(`data-lang-${lang}`);
//     if (newContent) {
//       // If element has innerHTML with HTML tags, use innerHTML instead of textContent
//       if (newContent.includes('<') && newContent.includes('>')) {
//         element.innerHTML = newContent;
//       } else {
//         element.textContent = newContent;
//       }
//     }
//   });

//   // Highlight the active language link
//   document.querySelectorAll('.header__language-link').forEach(link => {
//     link.classList.toggle('active', link.getAttribute('data-lang') === lang);
//   });
// }

