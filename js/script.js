// business logic//
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
      var diceroll2 =0;
      var score2 =0;
      var total2 =0;

        $("#person1hold").attr("disabled",true);
        $("#person1roll").attr("disabled",true);
        $("#person2roll").click(function(){
          diceroll2 = dice.roll();
          if(diceroll2===1){
            diceroll2 = 0;
            score2 = 0;
            $("#person2hold").attr("disabled",true);
            $("#person2roll").attr("disabled",true);

            $("#person1hold").attr("disabled",false);
            $("#person1roll").attr("disabled",false);
            alert("Sorry you rolled 1! your turn is over")
            }

            $("#diceroll2").text(diceroll2);

                 score2 += diceroll2;
                 $("#score2").text(score2);

           });
           $("#person2hold").click(function(){
                 total2 += score2;

                 $("#total2").text(total2);
                 if(total2>=100){
                   alert("The winner is player2")
                 }else{
                   diceroll1 = 0;
                   score2 = 0;
                   $("#diceroll2").text(diceroll2);
                   $("#score2").text(score2);

                   $("#person2roll").attr("disabled",true);
                   $("#person2hold").attr("disabled",true);

                   $("#person1roll").attr("disabled",false);
                   $("#person1hold").attr("disabled",false);

                   alert("now is player1 turn");
                 }
               });
             });

    });
