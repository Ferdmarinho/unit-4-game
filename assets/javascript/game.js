



//$(document).ready(function() {
    var computerNumber = (Math.floor(Math.random() * (120 - 19 + 1) + 19));
    var yourScore = "9";
    var crystalRed = "";
    var crystalBlue = "";
    var crystalPurple = "";
    var crystalGreen = "";


//WORKS Spits the number chosen by the computer 
$("#generatedNumber").html(computerNumber);

//What happens when you click on the crystals

    $("#ruby").on("click", function() {
      headsCount++;
      $("#heads-chosen").text(headsCount);
      $("#guess").html("<b>Heads</b>");
      flipThatCoin(0);
    });

    $("#emerald").on("click", function() {
      headsCount++;
      $("#heads-chosen").text(headsCount);
      $("#guess").html("<b>Heads</b>");
      flipThatCoin(0);
    });

    $("#sapphire").on("click", function() {
      headsCount++;
      $("#heads-chosen").text(headsCount);
      $("#guess").html("<b>Heads</b>");
      flipThatCoin(0);
    });

    $("#quartz").on("click", function() {
      headsCount++;
      $("#heads-chosen").text(headsCount);
      $("#guess").html("<b>Heads</b>");
      flipThatCoin(0);
    });



    //PSEUDOCODE
    //Page generates a ramdom number
    //User clicks on different crystals. Each one has one different value.
    //User wins if the sum of the values is equal ramdom number. 
