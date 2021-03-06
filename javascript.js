$(document).ready(function () {
    $(".saveBtn").on('click', function () {
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
        console.log(checkTime); //this is logging the current time

        if (checkTime == document.getElementById('9')) {
            console.log("It is 9 am");
            document.getElementById('time9').style.backgroundColor = "aquamarine"
        }
        else if (checkTime < document.getElementById('9')) {
            console.log("it's not  yet 9 am");
            document.getElementById('time9').style.backgroundColor = "aliceblue";
        }
        else if (checkTime > document.getElementById('9')) {
            console.log("It is past 9 am")
            document.getElementById('time9').style.backgroundColor = "steelblue";
        }   

        
        
        if (checkTime == document.getElementById('10')) {
            console.log("It is 10 am");
            document.getElementById('time10').style.backgroundColor = "aquamarine"
        }
        else if (checkTime < document.getElementById('10')) {
            console.log("it's not  yet 10 am");
            document.getElementById('time10').style.backgroundColor = "aliceblue";
        }
        else if (checkTime > document.getElementById('10')) {
            console.log("It is past 10 am")
            document.getElementById('time10').style.backgroundColor = "steelblue";
        }   


        
        if (checkTime == document.getElementById('11')) {
            console.log("It is 11 am");
            document.getElementById('time11').style.backgroundColor = "aquamarine"
        }
        else if (checkTime < document.getElementById('11')) {
            console.log("it's not  yet 11 am");
            document.getElementById('time11').style.backgroundColor = "aliceblue";
        }
        else if (checkTime > document.getElementById('11')) {
            console.log("It is past 11 am")
            document.getElementById('time11').style.backgroundColor = "steelblue";
        }   



        if (checkTime == document.getElementById('12')) {
            console.log("It is 12 pm");
            document.getElementById('time12').style.backgroundColor = "aquamarine"
        }
        else if (checkTime < document.getElementById('12')) {
            console.log("it's not  yet 12 pm");
            document.getElementById('time12').style.backgroundColor = "aliceblue";
        }
        else if (checkTime > document.getElementById('12')) {
            console.log("It is past 12 pm")
            document.getElementById('time12').style.backgroundColor = "steelblue";
        }  



        if (checkTime == document.getElementById('13')) {
            console.log("It is 1 pm");
            document.getElementById('time13').style.backgroundColor = "aquamarine"
        }
        else if (checkTime < document.getElementById('13')) {
            console.log("it's not  yet 1 pm");
            document.getElementById('time13').style.backgroundColor = "aliceblue";
        }
        else if (checkTime > document.getElementById('13')) {
            console.log("It is past 1 pm")
            document.getElementById('time13').style.backgroundColor = "steelblue";
        } 



        if (checkTime == document.getElementById('14')) {
            console.log("It is 2 pm");
            document.getElementById('time14').style.backgroundColor = "aquamarine"
        }
        else if (checkTime < document.getElementById('14')) {
            console.log("it's not  yet 2 pm");
            document.getElementById('time14').style.backgroundColor = "aliceblue";
        }
        else if (checkTime > document.getElementById('14')) {
            console.log("It is past 2 pm")
            document.getElementById('time14').style.backgroundColor = "steelblue";
        } 



        if (checkTime == document.getElementById('15')) {
            console.log("It is 3 pm");
            document.getElementById('time15').style.backgroundColor = "aquamarine"
        }
        else if (checkTime < document.getElementById('15')) {
            console.log("it's not  yet 3 pm");
            document.getElementById('time15').style.backgroundColor = "aliceblue";
        }
        else if (checkTime > document.getElementById('15')) {
            console.log("It is past 3 pm")
            document.getElementById('time15').style.backgroundColor = "steelblue";
        }
        
        

        if (checkTime == document.getElementById('16')) {
            console.log("It is 4 pm");
            document.getElementById('time16').style.backgroundColor = "aquamarine"
        }
        else if (checkTime < document.getElementById('16')) {
            console.log("it's not  yet 4 pm");
            document.getElementById('time16').style.backgroundColor = "aliceblue";
        }
        else if (checkTime > document.getElementById('16')) {
            console.log("It is past 4 pm")
            document.getElementById('time16').style.backgroundColor = "steelblue";
        } 



        if (checkTime == document.getElementById('17')) {
            console.log("It is 5 pm");
            document.getElementById('time17').style.backgroundColor = "aquamarine"
        }
        else if (checkTime < document.getElementById('17')) {
            console.log("it's not  yet 5 pm");
            document.getElementById('time17').style.backgroundColor = "aliceblue";
        }
        else if (checkTime > document.getElementById('17')) {
            console.log("It is past 5 pm")
            document.getElementById('time17').style.backgroundColor = "steelblue";
        } 

        
        
    }

    setInterval(checkTimeAgain, 10000)

    

})


// use moment to get the time




// create an if statement that says if time === 10, then true