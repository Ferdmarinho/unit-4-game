//This will wrap all to make it work once the page is loaded
$(document).ready(function() {

//Generated Number
  var generatedNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));

//Crystals Numbers 
    var crystalRed = 12;
    var crystalGreen = 8;
    var crystalPurple = 6;
    var crystalBlue = 1;
    
    var yourScore = 0;

    //WORKS Spits the number chosen by the computer 
$("#generatedNumber").html("The Master Crystal's number is " + generatedNumber );

  $("#ruby").click(function () {
    document.getElementById("yourTotal").innerHTML = 
    yourScore += crystalRed;
    console.log(yourScore);
    //isWinner();
});

$("#emerald").click(function () {
  document.getElementById("yourTotal").innerHTML = 
  yourScore += crystalGreen;
  console.log(yourScore);
  //isWinner();
});

$("#sapphire").click(function () {
  document.getElementById("yourTotal").innerHTML = 
  yourScore += crystalPurple;
  console.log(yourScore);
  //isWinner();
});

$("#quartz").click(function () {
  document.getElementById("yourTotal").innerHTML = 
  yourScore += crystalBlue;
  console.log(yourScore);
  //isWinner();
});


    //$("#rainbow").click(function () {
    //    document.getElementById("result").innerHTML = 
    //    sum += rainbowNumber;
    //    console.log(sum)
    //    isWinner();

$("#crystalsYouHave").html("The number of crystals you have so far is:" );


});

  //PSEUDOCODE
  //Page generates a ramdom number
  //User clicks on different crystals. Each one has one different value.
  //User wins if the sum of the values is equal ramdom number. 
