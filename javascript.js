$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        var userInput = $(this).siblings("textarea").val()
        console.log(userInput)
    
        var timeOfDay = $(this).siblings("textarea").attr("id")
        console.log(timeOfDay)
    
        localStorage.setItem(timeOfDay, userInput)
    
    })
    
    $("#9").val(localStorage.getItem("9"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#13").val(localStorage.getItem("13"))
    $("#14").val(localStorage.getItem("14"))
    $("#15").val(localStorage.getItem("15"))
    $("#16").val(localStorage.getItem("16"))
    $("#17").val(localStorage.getItem("17"))
    
   
    
    function checkTimeAgain() {
        var checkTime = moment().format("H");
        console.log(checkTime);

    }
    
    // document.addEventListener("load", function () {
    //     checkTime();
    //     if (
    //         checkTime () > document.getElementById("9")
    //     )
    //     console.log(false)
    // })

    setInterval(checkTimeAgain, 10000)


})

document.getElementById("currentDay").innerHTML = moment().format(MMM D)
// use moment to get the time 




// create an if statement that says if time === 10, then true