import lunr from 'lunr';
import lunrMulti from 'lunr-languages/lunr.multi';
import termsObject from './terms';

lunr.multiLanguage = lunrMulti;

const terms = Object.values(termsObject);

console.log('Building search index...');

const index = lunr(function () {
  this.use(lunr.multiLanguage);
  this.ref('id');
  this.field('term.en');

  terms.forEach((term, index) => {
    const termKey = Object.keys(termsObject)[index];
    console.log(`Adding term: ${termKey}`);
    this.add({
      id: termKey,
      term: {
        en: termKey,
      },
    });
  });
});

console.log('Search index built successfully!');

export default index;