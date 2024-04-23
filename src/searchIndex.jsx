import lunr from 'lunr';
import terms from './terms';

const termData = terms["0"]["terms"];

const index = lunr(function () {
  this.ref('term');
  this.field('definition');

  Object.entries(termData).forEach(([term, data]) => {
    this.add({
      term,
      definition: data.definition,
    });
  });
});

export default index;