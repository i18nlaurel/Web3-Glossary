import lunr from 'lunr';
import 'lunr-languages/lunr.stemmer.support'; // Import stemmer support for languages
import 'lunr-languages/lunr.multi'; // Import multi-language support
import terms from './terms'; // Import the terms data

lunr.multiLanguage('en', 'fr'); // Add support for English and French

const index = lunr(function () {
  this.use(lunr.multiLanguage); // Use multi-language plugin
  this.ref('id');
  this.field('term.en'); // English field
  this.field('term.fr'); // French field

  terms.forEach((term) => {
    this.add({
      id: term.id,
      term: {
        en: term.term, // English term
        fr: term.translation.fr, // French translation
      },
    });
  });
});

export default index;
