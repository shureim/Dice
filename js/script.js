// // business logic//
// var player1 ="";
// var player2 ="";

var  play = [];
var total1Score = function(numbers){
   if (numbers === 1){
     totalScore  = play.length = 0;
     return "Sorry you rolled 1! your turn is over"
   }
   else {
     play.push(numbers);
     totalScore = play.reduce((a,b)=>a+b);
     if (totalScore>= 100){
       return "You are the winner!"
     }
     return totalScore;
   }
}
var randomize = function(){
  var randomNumber = Math.floor(Math.random() * 6)+ 1;
      return randomNumber;
}
function page(){
  location.reload()
}

// user interface logic
$(document).ready(function(){


    $("button#btn").click(function(){
      $(".container-1").hide();
      $(".container-2").show();

    var person1Name = $("#person1").val();
      $("#person1Name").text(person1Name);

      var person2Name = $("#person2").val();
      $("#person2Name").text(person2Name);
});

  $("#person1roll").click(function(){
    var player1 = randomize();
    $(".diceRoll1").text(player1);
    var score1 = total1Score(player1);
    $(".score1").text(score1);
  })
  $("#person2roll").click(function(){
    var player2 = randomize();
    $(".diceRoll2").text(player2);
    var score2 = total1Score(player2);
    $(".score2").text(score2);
  })

  $("#restart").click(function(){
   page();
   });




})
