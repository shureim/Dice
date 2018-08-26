business logic//
var player1 ="";
var player2 ="";

var dice ={
  side : 6,
  roll:function(){
    var throwDice = Math.floor(Math.random() * this.side)+ 1;
  }
}
$(document).ready(function(){
  var diceroll1 =0;
  var score1 =0;
  var total1 =0;

  $("button#btn").click(function(){
    $(".container-1").hide();
    $(".container-2").show();

  var person1Name = $("#person1").val();
    $("#person1Name").text(person1Name);

    var person2Name = $("#person2").val();
    $("#person2Name").text(person2Name);

    player1.personName=person1Name;
    player2.personName=person2Name;

    $("#person2hold").attr("disabled",true);
    $("#person2roll").attr("disabled",true);
    $("#person1roll").click(function(){
      diceroll1 = dice.roll();
      if(diceroll1===1){
        diceroll1 = 0;
        score1 = 0;
        $("#person1hold").attr("disabled",true);
        $("#person1roll").attr("disabled",true);

        $("#person2hold").attr("disabled",false);
        $("#person2roll").attr("disabled",false);
        alert("Sorry you rolled 1! your turn is over")
        }

        $("#diceroll1").text(diceroll1);

             score1 += diceroll1;
             $("#score1").text(score1);

       });
       $("#person1hold").click(function(){
             total1 += score1;

             $("#total1").text(total1);
             if(total1>=100){
               alert("The winner is player1")
             }else{
               diceroll1 = 0;
               score1 = 0;
               $("#diceroll1").text(diceroll1);
               $("#score1").text(score1);

               $("#person1roll").attr("disabled",true);
               $("#person1hold").attr("disabled",true);

               $("#person2roll").attr("disabled",false);
               $("#person2hold").attr("disabled",false);

               alert("now is player2 turn");
             }


      });
//       var diceroll2 =0;
//       var score2 =0;
//       var total2 =0;
//
//         $("#person1hold").attr("disabled",true);
//         $("#person1roll").attr("disabled",true);
//         $("#person2roll").click(function(){
//           diceroll2 = dice.roll();
//           if(diceroll2===1){
//             diceroll2 = 0;
//             score2 = 0;
//             $("#person2hold").attr("disabled",true);
//             $("#person2roll").attr("disabled",true);
//
//             $("#person1hold").attr("disabled",false);
//             $("#person1roll").attr("disabled",false);
//             alert("Sorry you rolled 1! your turn is over")
//             }
//
//             $("#diceroll2").text(diceroll2);
//
//                  score2 += diceroll2;
//                  $("#score2").text(score2);
//
//            });
//            $("#person2hold").click(function(){
//                  total2 += score2;
//
//                  $("#total2").text(total2);
//                  if(total2>=100){
//                    alert("The winner is player2")
//                  }else{
//                    diceroll1 = 0;
//                    score2 = 0;
//                    $("#diceroll2").text(diceroll2);
//                    $("#score2").text(score2);
//
//                    $("#person2roll").attr("disabled",true);
//                    $("#person2hold").attr("disabled",true);
//
//                    $("#person1roll").attr("disabled",false);
//                    $("#person1hold").attr("disabled",false);
//
//                    alert("now is player1 turn");
//                  }
//                });
//              });
//
//     });

//
// var dice-1 =0;
// var score-1 =0;
// var total-1 =0;
//
// var rollDice = function () {
//   return Math.floor(6*Math.random())+1;
//
// }
//  function Player(turn) {
//   this.roll = 0;
//   this.rounds= 0;
//   this.score = 0;
//   this.turn = turn;
//   this.personName;
// }
// Player.prototype.firstTrial = function() {
//   if (this.roll === 1) {
//   this.rounds = 0;
//   return this.personName("Sorry you rolled 1! Your turn is over!")
//
//   } else {
//   this.rounds += this.roll;
//   }
// }

// var dice ={
//   side : 6,
//   roll:function(){
//     var throwDice = Math.floor(Math.random() * this.side)+ 1;
//   }
// }

// var dice-1 = 0;
// var score-1 = 0;
// var total-1 = 0;




//
//
//
//
//
//
// // user interface logic
//
//
//     // var dice-1 = 0;
//     // var score-1 = 0;
//     // var total-1 = 0;
//
//
//
//
//
//
//
//       $("#roll-1").text(roll-1);
//
//       score-1 += roll-1;
//       $("#score-1").text(score-1);
//     });
//
//     $("#person-hold-1").click(function(){
//       total-1 += score-1;
//
//       $("#total-1").text(total-1);
//       if(total-1>=100){
//         alert("The winner is player1")
//       }else{
//         roll-1 = 0;
//         score-1 = 0;
//         $("#person-roll-1").text(person-roll-1);
//         $("#person-score-1").text(person-score-1);
//
//         $("#person-roll-1").attr("disabled",true);
//         $("#person-hold-1").attr("disabled",true);
//
//         $("#person-roll-2").attr("disabled",false);
//         $("#person-hold-2").attr("disabled",false);
//
//         alert("now is player2 turn");
//       }
//
//     });
//
//     var roll-2 = 0;
//     var score-2 = 0;
//     var total-2 = 0;
//     $("#person-roll-2").click(function(){
//       roll-2 = dice.roll();
//       if(roll-2===1){
//         roll-2 = 0;
//         score-2 = 0;
//         $("#person-roll-2").attr("disabled",true);
//         $("#person-hold-2").attr("disabled",true);
//
//         $("#person-hold-1").attr("disabled",false);
//         $("#person-roll-1").attr("disabled",false);
//         alert("Sorry you rolled 1! your turn is over")
//
//       }
//       $("#person-roll-2").text(roll-2);
//       score-2 +=roll-2;
//       $("#person-score-2").text(score-2);
//     });
//     $("#person-hold-2").click(function(){
//       total-2 += score-2;
//
//       $("#total-2").text(total-2);
//       if(total-2>=100){
//         alert("The winner is player2")
//       }else{
//         roll-2 = 0;
//         score-2 = 0;
//         $("#roll-2").text(roll-2);
//         $("#score-2").text(score-2);
//
//         $("#roll-2").attr("disabled",true);
//         $("#hold-2").attr("disabled",true);
//
//         $("#roll-1").attr("disabled",false);
//         $("#hold-1").attr("disabled",false);
//
//         alert("now is player1 turn");
//       }
//
//
//
//   });
// //
// //   $("button#person-roll-1").click(function(event){
// //   player1.roll = rollDice();
// //   $("#roll-1").text(player1.roll);
// //   player1.firstTrial();
// //   $("#round-1").text(player1.rounds);
// // });
// // $("button#person-roll-2").click(function(event){
// // player2.roll = rollDice();
// // $("#roll-2").text(player2.roll);
// // player2.firstTrial();
// // $("#round-2").text(player2.rounds);
// });
