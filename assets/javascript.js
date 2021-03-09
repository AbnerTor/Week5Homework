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

        // we are checking if an hour is equal to an element
        // checkTime = 10
        // if 10 === anElement
        // if 10 === "10"
        $('.row').each(function () {
            // get the number 9 from it's id
            let num = $(this).attr('id').split('-')[1];
            console.log("this should be a numbe:", num);
            // time9 => 9
            // perform your tests 
            // let nineElement = $('#9');
            // let tenElement = $('#10');

            if (checkTime == 9) {
                console.log("It is 9 am");
                $("#9").css("background-color", "aquamarine");
            }
            else if (checkTime < 9) {
                console.log("it's not  yet 9 am");
                $("#9").css("background-color", "aliceblue");
            }
            else if (checkTime > 9) {
                console.log("It is past 9 am")
                $("#9").css("background-color", "steelblue");
            }


            if (checkTime == 10) {
                console.log("It is 10 am");
                $("#10").css("background-color", "aquamarine");
            }
            else if (checkTime < 10) {
                console.log("it's not  yet 10 am");
                $("#10").css("background-color", "aliceblue");
            }
            else if (checkTime > 10) {
                console.log("It is past 10 am")
                $("#10").css("background-color", "steelblue");
            }


            if (checkTime == 11) {
                console.log("It is 11 am");
                $("#11").css("background-color", "aquamarine");
            }
            else if (checkTime < 11) {
                console.log("it's not  yet 11 am");
                $("#11").css("background-color", "aliceblue");
            }
            else if (checkTime > 11) {
                console.log("It is past 11 am")
                $("#11").css("background-color", "steelblue");
            }


            if (checkTime == 12) {
                console.log("It is 12 pm");
                $("#12").css("background-color", "aquamarine");
            }
            else if (checkTime < 12) {
                console.log("it's not  yet 12 pm");
                $("#12").css("background-color", "aliceblue");
            }
            else if (checkTime > 12) {
                console.log("It is past 12 pm")
                $("#12").css("background-color", "steelblue");
            }


            if (checkTime == 13) {
                console.log("It is 1 pm");
                $("#13").css("background-color", "aquamarine");
            }
            else if (checkTime < 13) {
                console.log("it's not  yet 1 pm");
                $("#13").css("background-color", "aliceblue");
            }
            else if (checkTime > 13) {
                console.log("It is past 1 pm")
                $("#13").css("background-color", "steelblue");
            }


            if (checkTime == 14) {
                console.log("It is 2 pm");
                $("#14").css("background-color", "aquamarine");
            }
            else if (checkTime < 14) {
                console.log("it's not  yet 2 pm");
                $("#14").css("background-color", "aliceblue");
            }
            else if (checkTime > 14) {
                console.log("It is past 2 pm")
                $("#14").css("background-color", "steelblue");
            }


            if (checkTime == 15) {
                console.log("It is 3 pm");
                $("#15").css("background-color", "aquamarine");
            }
            else if (checkTime < 15) {
                console.log("it's not  yet 3 pm");
                $("#15").css("background-color", "aliceblue");
            }
            else if (checkTime > 15) {
                console.log("It is past 3 pm")
                $("#15").css("background-color", "steelblue");
            }


            if (checkTime == 16) {
                console.log("It is 4 pm");
                $("#16").css("background-color", "aquamarine");
            }
            else if (checkTime < 16) {
                console.log("it's not  yet 4 pm");
                $("#16").css("background-color", "aliceblue");
            }
            else if (checkTime > 16) {
                console.log("It is past 4 pm")
                $("#16").css("background-color", "steelblue");
            }


            if (checkTime == 17) {
                console.log("It is 5 pm");
                $("#17").css("background-color", "aquamarine");
            }
            else if (checkTime < 17) {
                console.log("it's not  yet 5 pm");
                $("#17").css("background-color", "aliceblue");
            }
            else if (checkTime > 17) {
                console.log("It is past 5 pm")
                $("#17").css("background-color", "steelblue");
            }

        })

    }

    setInterval(checkTimeAgain, 1000)

    var todaysDate = moment().format('dddd, MMM Do, Y');
   $('#currentDay').append(todaysDate);

})

// updating
