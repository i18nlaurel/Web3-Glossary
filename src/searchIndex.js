import lunr from 'lunr';
import lunrMulti from 'lunr-languages/lunr.multi';
import termsObject from './terms';

lunr.multiLanguage = lunrMulti;

const terms = Object.entries(termsObject);

const index = lunr(function () {
  this.use(lunr.multiLanguage);
  this.ref('id');
  this.field('term');
  this.field('definition');

  terms.forEach(([termKey, termData]) => {
    this.add({
      id: termKey,
      term: termKey,
      definition: termData.definition.toString(),
    });
  });
});

export default index;