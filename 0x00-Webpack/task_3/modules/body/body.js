import $ from 'jquery';
import _ from 'lodash';

// Body code (button, counter)
const updateCounter = _.debounce(() => {
  const countElement = $('#count');
  const currentCount = parseInt(countElement.text()) || 0;
  const newCount = currentCount + 1;
  countElement.text(`${newCount} clicks on the button`);
}, 1000);

$(document).ready(() => {
  // Adding click event listener to the button
  $('#startBtn').on('click', updateCounter);
});
:
