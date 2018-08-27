// // business logic//

var player1 ="";
var player2 ="";

var dice ={
  sides : 6,
  roll:function(){
    var randomNumber = Math.floor(Math.random() * this.sides)+ 1;
    return randomNumber;

  }
}

function page(){
  location.reload()
}


$(document).ready(function(){
  var diceRoll1 = 0;
  var score1 = 0;
  var total1 = 0;

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
      diceRoll1 = dice.roll();
      if(diceRoll1===1){
        diceRoll1 = 0;
        score1 = 0;
        total1 = 0;
        $(".diceRoll1").text(diceRoll1);
        $(".score1").text(score1);
        $(".total1").text(total1);

        $("#person1hold").attr("disabled",true);
        $("#person1roll").attr("disabled",true);

        $("#person2hold").attr("disabled",false);
        $("#person2roll").attr("disabled",false);
        alert("Sorry you rolled 1! your turn is over")
        }

        $("#diceRoll1").text(diceRoll1);

             score1 += diceRoll1;
             $("#score1").text(score1);

       });

       $("#person1hold").click(function(){
             total1 += score1;

             $("#total1").text(total1);
             if(total1>=100){
               alert("The winner is player1")
             }else{
               diceRoll1 = 0;
               score1 = 0;
               $("#diceRoll1").text(diceRoll1);
               $("#score1").text(score1);

               $("#person1roll").attr("disabled",true);
               $("#person1hold").attr("disabled",true);

               $("#person2roll").attr("disabled",false);
               $("#person2hold").attr("disabled",false);

               alert("now is player2 turn");
             }


      });


      var diceRoll2 =0;
      var score2 =0;
      var total2 =0;


        $("#person2roll").click(function(){
          diceRoll2 = dice.roll();
          if(diceRoll2===1){
            diceRoll2 = 0;
            score2 = 0;
            total2 = 0;
            $(".diceRoll2").text(diceRoll2);
            $(".score2").text(score2);
            $(".total2").text(total2);

            $("#person2hold").attr("disabled",true);
            $("#person2roll").attr("disabled",true);

            $("#person1hold").attr("disabled",false);
            $("#person1roll").attr("disabled",false);
            alert("Sorry you rolled 1! your turn is over")
            }

            $("#diceRoll2").text(diceRoll2);

                 score2 += diceRoll2;
                 $("#score2").text(score2);

           });
           $("#person2hold").click(function(){
                 total2 += score2;

                 $("#total2").text(total2);
                 if(total2>=100){
                   alert("The winner is player2")
                 }else{
                   diceRoll2 = 0;
                   score2 = 0;
                   $("#diceRoll2").text(diceRoll2);
                   $("#score2").text(score2);

                   $("#person2roll").attr("disabled",true);
                   $("#person2hold").attr("disabled",true);

                   $("#person1roll").attr("disabled",false);
                   $("#person1hold").attr("disabled",false);

                   alert("now is player1 turn");
                 }
               });
             });
             $("#restart").click(function(){
               page();
             });

    });
