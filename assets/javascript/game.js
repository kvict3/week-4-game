
$(document).ready(function(){

    var minNumber = 19;
    var maxNumber = 120

    randomNumberFromRange(minNumber, maxNumber);

    function randomNumberFromRange(min,max)
    {
    alert(Math.floor(Math.random()*(max-min+1)+min));
    }

//     var calculationDiv = $('#calculation');

//     var firstNumber = "";
//     var secondNumber = "";
//     var operator = "";
//     var result = 0;
//     var hasNumber = false;
//     var firstNumberComplete = false;
//     var lockButtons = false;

//     // Check if any button is clicked...
//     $('button').on("click", function() {

//         // Checks if it's a number
//         if ($(this).hasClass("number") && !lockButtons){

//             hasNumber = true;

//             // If we haven't received an operator yet
//             if (firstNumberComplete == false){

//                 // Grab the number of the value clicked then builds a string with it
//                 firstNumber = firstNumber + $(this).attr("value") ;

//                 // Print the number to the firstPage
//                 console.log(firstNumber); 

//                 // Print it to the div
//                 $("#firstNumber").html(firstNumber);
//             }

//             // If we have received an operator
//             if (firstNumberComplete == true){

//                 // Grab the number of the value clicked then builds a string with it
//                 secondNumber = secondNumber + $(this).attr("value") ;

//                 // Print the number to the firstPage
//                 console.log(secondNumber); 

//                 // Print it to the div
//                 $("#secondNumber").html(secondNumber);
//             }

//         }

//         // Checks if its an operator (but not =)
//         if ($(this).hasClass("operator") && hasNumber && !lockButtons){
//             firstNumberComplete = true;

//             // Converts words into symbols
//             if($(this).attr("value") == "plus"){
//                 $("#operator").html("<button>+</button>");
//                 operator = "plus";
//             }

//             // Converts words into symbols
//             if($(this).attr("value") == "minus"){
//                 $("#operator").html("<button>-</button>");
//                 operator = "minus";
//             }

//             // Converts words into symbols
//             if($(this).attr("value") == "times"){
//                 $("#operator").html("<button>*</button>");
//                 operator = "times";
//             }

//             // Converts words into symbols
//             if($(this).attr("value") == "divide"){
//                 $("#operator").html("<button>/</button>");
//                 operator = "divide";
//             }

//             // Converts words into symbols
//             if($(this).attr("value") == "power"){
//                 $("#operator").html("<button>^</button>");
//                 operator = "power";
//             }
//         }

//         // Checks if the equal button has been pressed. If so...
//         if($(this).hasClass("equal")){

//             // Lock the keyboard from being clicked
//             lockButtons = true;


//             // Then figure out which operator was clicked and perform the necessary functions. 
//             // Then show the result in the html
//             if (operator == "plus"){
//                 result = parseInt(firstNumber) + parseInt(secondNumber);
//                 $("#result").html(result);
//             }

//             if (operator == "minus"){
//                 result = parseInt(firstNumber) - parseInt(secondNumber);
//                 $("#result").html(result);
//             }

//             if (operator == "times"){
//                 result = parseInt(firstNumber) * parseInt(secondNumber);
//                 $("#result").html(result);
//             }

//             if (operator == "divide"){
//                 result = parseInt(firstNumber) / parseInt(secondNumber);
//                 $("#result").html(result);
//             }

//             if (operator == "power"){
//                 result = Math.pow(parseInt(firstNumber), parseInt(secondNumber));
//                 $("#result").html(result);
//             }
//         }

//         // If clear is selected then wipe away all of the content from the screen and unlock the buttons.
//         if($(this).hasClass('clear')){

//             firstNumber = "";
//             secondNumber = "";
//             operator = "";
//             result = 0;
//             firstNumberComplete = false;
//             lockButtons = false;

//             $("#firstNumber").empty();
//             $("#secondNumber").empty();
//             $("#operator").empty();
//             $("#result").empty();

//         }
//     })

// })