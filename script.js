

$(document).on('ready', function(){
  setTimeout(function()
     {
         alert("Welcome to the Tortoise vs. Hare Racing Game. Player 1 controls the hare while Player 2 controls the Tortoise. When you both are ready to race, Player 1 presses the Letter 'W' to move. Player 2, you must press the UP arrow key to move. REMEMBER TO START PRESSING YOUR RESPECTIVE KEYS AT THE SAME TIME. NO CHEATING OR FALSE STARTS!! If there's a false start, click 'reset' at the bottom.");
     },
     3000);

 var x=0;
 var y=0;
function resetAll(){
  location.reload();
  // $("td").removeClass("makeblack");
  //
  //  b=0;
  //  i=0;
  //  d=1;
}

$("#reset").on('click', function(){
          resetAll();
});

$('body').on("keyup", function(event){
   var key = event.which;
    // $("#playerastart").addClass("makeblack");
   if (event.which==87){

  //  $("#playerastart").addClass("hare");
  a=1;
  startPlayerA();
  //  doIStartGame();
}
});
//manipulate DOM elements using jquery, checking what you have/changed...need any help..youll do well

$('body').on("keyup", function(){
  var key=event.which;
//what about putting a variable that toggles between 0 and 1?
  if (event.which==38){
  // $("#playerbstart").addClass("turtle");
  b=81;
  // doIStartGame();
  startPlayerB();
}
});

//  function doIStartGame(){
//     if($("#playerastart").hasClass("hare") && $("#playerbstart").hasClass("turtle")){
//     startPlayerA();
//     startPlayerB();
//   }
// }

 function startPlayerA(){

    $("body").on("keyup", function(){
      if ($('.book20').hasClass("hare") && $('.book100').hasClass("turtle")){
        alert ("IT'S A DRAW!! YOU TWO ARE EQUALLY FAST!");
        $('.book20').removeClass("hare");
        $('.book100').removeClass("turtle");
      }

      else if ($('.book20').hasClass("hare")){
          alert("Player 1 has won. Hares are damn'd fast aren't they? SO SO QUICK!");
          $('.book20').removeClass("hare");
      }
      else if ($('#playerastart').hasClass("hare")){
          if (event.which==87){

        //  for(i=1;i<1000; i++){
        // do like a while statement that stops at last row or a
        // if statement that is activated when last row is classed
        // way to construct if statement is if $("#lastrowplayer a").hasClass("makeblack")
              $('#playerastart').removeClass("hare");
                $('.book'+a+'').addClass("hare");
                $('.book'+a-1 +'').removeClass("hare");
                x=1;
                a++;
          }
        }
        else if (x==1){
              if (event.which==87){
                  var num= a-1;
                  $('.book'+a+'').addClass("hare");
                  $('.book'+num +'').removeClass("hare");
                  a++;
                }

        }
      });
    }

  function startPlayerB(){
   $("body").on("keyup", function(){

    if ($('.book100').hasClass("turtle")){
        alert("Player 2 has won. As a wise woman once said, 'Slow and steady wins the race.' She was right for sure! The tortoise is victorious!");
         $('.book100').removeClass("turtle");
    }

      else if ($('#playerbstart').hasClass("turtle")){
          if (event.which==38){

        //  for(i=1;i<1000; i++){
        // do like a while statement that stops at last row or a
        // if statement that is activated when last row is classed
        // way to construct if statement is if $("#lastrowplayer a").hasClass("makeblack")
              $('#playerbstart').removeClass("turtle");
                $('.book'+b+'').addClass("turtle");
                $('.book'+b-1 +'').removeClass("turtle");
                y=1;
                b++;
          }
        }
        else if (y==1){
              if (event.which==38){
                  var ber= b-1;
                  $('.book'+b+'').addClass("turtle");
                  $('.book'+ber +'').removeClass("turtle");
                  b++;
                }

        }

      });
    }

    //  }
$('#playmusic').on("click", function(event){
  event.preventDefault();
});


$('#changecourse').on("click",function(){
$('.container').toggleClass("forest");
});
//   $('button').click(function(){
//
//     $('container').removeClass("grassy");
//   });
//     //bottom bracket is attached to for loop
//   // }
});










console.log("What the crap");

//
// }) ;
