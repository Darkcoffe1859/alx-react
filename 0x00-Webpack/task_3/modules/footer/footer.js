import $ from 'jquery';

// Footer code
const footerText = 'Copyright - Holberton School';
const footer = $('<footer></footer>');
footer.append(`<p>${footerText}</p>`);

// Append footer to the body
$('body').append(footer);

