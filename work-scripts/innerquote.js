const fs = require('fs');

// Read the export-definitions.js file
fs.readFile('export-definitions.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading export-definitions.js file:', err);
    return;
  }

  // Replace inner double quotes with single quotes
  const modifiedContent = data.replace(/"([^"]*)"/g, (match, p1) => {
    // Replace only if the match contains a double quote inside and it's not a JSX syntax
    if (p1.includes('"') && !p1.startsWith('<>')) {
      return `"${p1.replace(/"/g, "'")}"`;
    }
    return match;
  });

  // Write the modified content back to the file
  fs.writeFile('export-definitions-modified.js', modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing export-definitions-modified.js file:', err);
      return;
    }
    console.log('export-definitions-modified.js file has been successfully created.');
  });
});
