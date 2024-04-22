import lunr from 'lunr';
import lunrMulti from 'lunr-languages/lunr.multi'; // Import multi-language support
import termsObject from './terms'; // Import the terms data

lunr.multiLanguage = lunrMulti; // Add support for multiple languages

// Convert the terms object to an array
const terms = Object.values(termsObject);

const index = lunr(function () {
  this.use(lunr.multiLanguage); // Use multi-language plugin
  this.ref('id');
  this.field('term.en'); // English field
  this.field('term.fr'); // French field

  terms.forEach((term, index) => {
    const termKey = Object.keys(termsObject)[index];
    this.add({
      id: termKey,
      term: {
        en: termKey, // Use the object key as the English term
        fr: term.translation?.fr || '', // French translation (if available)
      },
    });
  });
});

export default index;