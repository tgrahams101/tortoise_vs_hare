

$(document).on('ready', function(){
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

$("button").on('click', function(){
          resetAll();
});

$('body').on("keyup", function(event){
   var key = event.which;
    // $("#playerastart").addClass("makeblack");
   if (event.which==87){

   $("#playerastart").addClass("hare");
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
  $("#playerbstart").addClass("turtle");
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

        if ($('#playerastart').hasClass("hare")){
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

        if ($('#playerbstart').hasClass("turtle")){
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



alert("what the hell");






console.log("What the crap");

//
// }) ;
