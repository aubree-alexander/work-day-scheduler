
//global variables
var currentDay = moment().format('MMMM Do, YYYY')
var currentTime = moment()
var currentHour = currentTime.format("hA");
var textarea = document.querySelector(".description")
var saveBtn = document.querySelector(".saveBtn")


//function for current date appended to top of page
function dateDisplay () {
    $('#currentDay').append(currentDay)
}
dateDisplay()




//save items to localstorage when save button is clicked
$(".saveBtn").click(function() {
    var key = textarea.value
    console.log(key)
    if (key) {
        localStorage.setItem('taskText', key)
    }
});


//retrieve items from local storage - IN PROGRESS
localStorage.getItem(key)
$(".description").innerHTML += `${key}`




//brian's code to reference
// $("#hour8 .description").val(localStorage.getItem("hour8"));
// $("#hour9 .description").val(localStorage.getItem("hour9"));
// $("#hour10 .description").val(localStorage.getItem("hour10"));
// $("#hour11 .description").val(localStorage.getItem("hour11"));
// $("#hour12 .description").val(localStorage.getItem("hour12"));



//Step 6 - Use Jquery to retrieve data from local storage and display on page when user refreshes

//Step 3 - Use dayJS to help indicate to user via timeblock color(CSS) whether time is in past, present, or future

