import $ from 'jquery';

console.log('Init header');

// Add logo and H1 title to the header
const header = $('<header></header>');
header.append('<img src="path/to/logo.png" alt="Holberton Logo" width="100">');
header.append('<h1>Holberton Dashboard</h1>');

// Append header to the body
$('body').prepend(header);

