
//$(document).ready(function() {
  var computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
  var yourScore = 0;
  var crystalRed = 12;
  var crystalGreen = 8;
  var crystalPurple = 6;
  var crystalBlue = 1;
  var yourSum = 0;
  var finalSum = yourSum;

//WORKS Spits the number chosen by the computer 
$("#generatedNumber").html("The wizard's number is " + computerNumber );

//What happens when you click on the crystals
//Example of on click - $( "p" ).click(function() { $( this ).slideUp();});

  $("#ruby").click(function addingRuby() {
    (yourSum+=crystalRed);
  });

  $("#emerald").click(function addingEmerald() {
    (yourSum+=crystalGreen);
  });

  $("#sapphire").click(function addingSapphire() {
    (yourSum+=crystalPurple);
  });

  $("#quartz").click(function addingQuartz(){
    (yourSum+=crystalBlue);
  });

//This Variable is the sum of all crystals
var finalSum = (addingRuby());

console.log(finalSum);

  $("#scoreNumber").html("The number of crystals you have so far is  " + yourSum );
  
  if (computerNumber = finalSum) {
    $("#winnerMessage").html("You won one!");
  }
  
 
  //}




  //PSEUDOCODE
  //Page generates a ramdom number
  //User clicks on different crystals. Each one has one different value.
  //User wins if the sum of the values is equal ramdom number. 
