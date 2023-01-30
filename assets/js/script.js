// variable from DOM
var timeDisplay = $('#currentDay');
var descriptionDisplay = $('.description');

function displayTime() {
    var currentDisplay = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplay.text(currentDisplay);
}


// time block color selection

// function timeBlockColor() {
//     $('.time-block').each(function() {

//     })
// }
