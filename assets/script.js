//global variables
//date for top of page
var currentDay = moment().format('MMMM Do, YYYY')
//current time to assess current hour for for loop below
var currentTime = moment().hour()


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



    // $(".time-block").each(function() {
    
    //     var hourParse = parseInt($(".hour").innerText)
    //     console.log(hourParse)
      
    // })
  

var timeBlock = $('.time-block');
var counter = 9;

// display different color in description box depending on time
for (var i = 0; i < timeBlock.length; i++) {
    //select the current timeBlock based on hour, starting at 9
    var currentBlock = $('#' + counter);
    //get id and turn it into an integer
    var idHour = $('.time-block')[i].id;
    parseInt(idHour);
    // check each id to see if it is past present or future
    if (idHour < currentTime) {
        currentBlock.addClass("past");
    } else if (idHour == currentTime) {
        currentBlock.addClass("present");
    } else if (idHour > currentTime) {
        currentBlock.addClass("future");
    }
    //increase counter to select next time block
    counter ++;
}

