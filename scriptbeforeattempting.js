$(document).on('ready', function(){

function resetAll(){
  $("td").removeClass("makeblack");
   i=1;
}

$("button").on('click', function(){
          resetAll();
});

$("#playerastart").on("click", function(){
   $("#playerastart").addClass("makeblack");

});


$("#playerbstart").on("click", function(){
  $("#playerbstart").addClass("makeblack");

  if($("#playerastart").hasClass("makeblack")){
    // for (i=1; i<100; i++){
  $("td").on("click", function(){

        //  for(i=1;i<1000; i++){
        // do like a while statement that stops at last row or a
        // if statement that is activated when last row is classed
        // way to construct if statement is if $("#lastrowplayer a").hasClass("makeblack")

      $("td").on("click", function(){
     $('.book'+i+'').addClass("makeblack");
          // i++;
     // this i counter iterates through column to identify cells
       });

    //  }
      });
    }
    //bottom bracket is attached to for loop
  // }
}) ;



alert("what the hell");






console.log("What the crap");


}) ;
