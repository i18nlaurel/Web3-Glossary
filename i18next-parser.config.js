module.exports = {
    locales: ['en', 'es'], // Add your locales here
    output: 'locales/$LOCALE/$NAMESPACE.json',
    defaultNamespace: 'translation',
    createOldCatalogs: false,
    lexers: {
      js: ['JavascriptLexer'],
      jsx: ['JavascriptLexer'],
    },
  };
  