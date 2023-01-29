// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

// current date in jumbotron

var current = moment().format('dddd, MMMM Do YYYY');
var displayDate = document.querySelector('#currentDay');
displayDate.innerHTML = current;

// past, present, future color blocking

var currentHour = moment().format(HH);

$('.time-block').each(function() {
    var timeBlock = parseInt($(this).attr('id'));
        if (currentHour === timeBlock) {
            $(this).addClass('present');
        } else if (currentHour > timeBlock) {
            $(this).addClass('past');
        } else if (currentHour < timeBlock) {
            $(this).addClass('future');
        }
});

// local storage retrieving
// is there a better way of simplifying this?
$('#9 .time-block').val(localStorage.getItem('9'));
$('#10 .time-block').val(localStorage.getItem('10'));
$('#11 .time-block').val(localStorage.getItem('11'));
$('#12 .time-block').val(localStorage.getItem('12'));
$('#1 .time-block').val(localStorage.getItem('1'));
$('#2 .time-block').val(localStorage.getItem('2'));
$('#3 .time-block').val(localStorage.getItem('3'));
$('#4 .time-block').val(localStorage.getItem('4'));
$('#5 .time-block').val(localStorage.getItem('5'));

// save button
$('.saveBtn').click(function(event) {
    event.preventDefaul();
    var time = $(this).parent().attr('id').split('-'[1]);
    var plan = $(this).siblings('.time-block').val();
    localStorage.setItem(time, plan);
    console.log(time)
});
