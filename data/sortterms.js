// This script is used to sort terms.json in alphabetical order. 

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'terms.json');

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
    console.error('Error reading the file:', err);
    return;
    }
    
    // Parse the JSON data
    let termsData = JSON.parse(data);
    
    // Extract terms object
    let terms = termsData[0].terms;
    
    // Sort the terms alphabetically by the term key
    let sortedTerms = Object.keys(terms).sort().reduce((acc, key) => {
    acc[key] = terms[key];
    return acc;
    }, {});
    
    // Update the terms data with the sorted terms
    termsData[0].terms = sortedTerms;
    
    // Write the sorted JSON back to the file
    fs.writeFile(filePath, JSON.stringify(termsData, null, 2), 'utf8', (err) => {
    if (err) {
    console.error('Error writing the file:', err);
    return;
    }
    console.log('Terms sorted and saved successfully.');
    });
    });