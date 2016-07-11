

$(document).on('ready', function(){
 var i=0;
 var b=0;
function resetAll(){
  $("td").removeClass("makeblack");

   b=0;
   i=0;
   d=1;
}

$("button").on('click', function(){
          resetAll();
});

$('body').on("keyup", function(event){
   var key = event.which;
    // $("#playerastart").addClass("makeblack");
   if (event.which==87){

   $("#playerastart").addClass("makeblack");
  i=1;
   doIStartGame();
}
});
//manipulate DOM elements using jquery, checking what you have/changed...need any help..youll do well

$('body').on("keyup", function(){
  var key=event.which;
//what about putting a variable that toggles between 0 and 1?
  if (event.which==38){
  $("#playerbstart").addClass("makeblack");
  b=1;
  doIStartGame();
}
});

 function doIStartGame(){
    if($("#playerastart").hasClass("makeblack") && $("#playerbstart").hasClass("makeblack")){
    startGame();
  }
}

 function startGame(){
    if (b==1 && i==1){
    // for (i=1; i<100; i++){
    var c=1;
    $("body").on("keyup", function(){

        if ($('$book4').hasClass("makeblack")){
          i=0; b=0; c=0;
        }
        else{
        //  for(i=1;i<1000; i++){
        // do like a while statement that stops at last row or a
        // if statement that is activated when last row is classed
        // way to construct if statement is if $("#lastrowplayer a").hasClass("makeblack")

        var key=event.which;
        if (event.which==38){

        $('.book'+c+'').addClass("makeblack");
        c++;
      }

     // this i counter iterates through column to identify cells
      }
      });
    }
    //  }

  }

$('button').on("click",function(){
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
