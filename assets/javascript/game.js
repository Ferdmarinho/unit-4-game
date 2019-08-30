



//$(document).ready(function() {

    var computerNumber = randomNumber;
    var yourScore = "";
    var crystalRed = "";
    var crystalBlue = "";
    var crystalPurple = "";
    var crystalGreen = "";


function randomNumber() {
   19 < (Math.random()) < 120;
}

randomNumber();
console.log(randomNumber);

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
