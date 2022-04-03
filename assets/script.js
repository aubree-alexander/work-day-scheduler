//global variables
//date for top of page
var currentDay = moment().format('MMMM Do, YYYY')
//current time to assess current hour for for loop below
var currentTime = moment().hour()
//starting div for for loop
var rowNumberStart = 9;


//current date displayed at top of page
function dateDisplay () {
    $('#currentDay').append(currentDay)
}
dateDisplay()

//save tasks to localstorage
$(".saveBtn").on("click", function () {
    var description = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, description);
})

//display each task in appropriate time slot
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));



// display different color in description boxes depending on time
for (var i = 0; i < 9; i++) {
    //select the current timeBlock based on hour, starting at 9
    var currentBlock = $('#' + rowNumberStart);
    //get id
    var idHour = $('.time-block')[i].id;
    // check each id to see if it is past present or future
    if (idHour < currentTime) {
        currentBlock.addClass("past");
    } else if (idHour == currentTime) {
        currentBlock.addClass("present");
    } else if (idHour > currentTime) {
        currentBlock.addClass("future");
    }
    //increase counter to select next time block
    rowNumberStart ++;
}

