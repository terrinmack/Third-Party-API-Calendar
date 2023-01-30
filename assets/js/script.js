// variable from DOM
var timeDisplay = $('#currentDay');
var saveBtn = $('.saveBtn');

// display current time in jumbotron
function displayTime() {
    var currentDisplay = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplay.text(currentDisplay);
}

// time block color selection
function timeBlockColor() {
    $('.time-block').each(function() {
       
            
    })
};

// save description entered into localstorage and get from storage
saveBtn.click(function (event) {
    event.preventDefault();
    var time = $(this).siblings('.hour').text();
    var description = $(this).siblings('.description').val();
    localStorage.setItem(time, description);
})

// description stays in hour after page is refreshed
function printProjectData () {
    $('.hour').each(function() {
        var currentHour = $(this).text();
        var currentProject = localStorage.getItem(currentHour);
            if (currentProject !== null) {
                $(this).siblings('.description').val(currentProject);
            }
    });
}

// MAKE SURE TO CALL YOUR FUNCTIONS, TERRI :<
displayTime();
setInterval(displayTime, 1000);
timeBlockColor();
printProjectData();
