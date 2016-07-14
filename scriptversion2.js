//  Jquery variables for Jquery selectors of the Character divs
//  Document Event for if right button is pressed..have two separate event listeners
//  Checking to see if a player has crossed the finish line
//
//Remember to assign jquery elements at beginning
//need to do change course option
//Need to add Half-way point and Finish Line to file


$(document).on('ready', function(){

var $player1 = $('.player1');
var $player2 = $('.player2');
var $startline1 = $('#startline1');
var $startline2 = $('#startline2');
var $startgraphic = $('.startgraphic');
var $gobutton = $('#gobutton');
var $player2instructions = $('#player2instructions');
var $player1instructions = $('#player1instructions');
var $startbutton = $('#startbutton');
var $toppanel = $('.toppanel');
var $signature = $('#signature');
var $reset = $('#reset');
var $changecourse = $('#changecourse');

var base= 20;
var increment1 =20;
var increment2 =20;
var moveTotal1=base + increment1;
var moveTotal2=base+ increment2;

 $reset.click(function (){
   location.reload();
 });

 $changecourse.click(function (){
   $('.container').toggleClass('forest');
 });

$startbutton.click(function (){
      $startgraphic.show("slow");
      $player2instructions.hide();
      $player1instructions.hide();
      $toppanel.hide();
      $startbutton.hide();
      $gobutton.click(function(){
        $startgraphic.hide();
        $player1.css("bottom", "20px");
        $player2.css("bottom", "20px");
        $startline1.css("bottom", "10px");
        $startline2.css("bottom", "10px");
        $signature.css("bottom", "-80px");
         startGame();
       });
});

function startGame(){


  $(document).on("keyup", function (event){

      if(event.which==87){
        $player1.animate({"bottom" : "+=20px"});
      }

        // $(document).on("keyup", function (event){
        //       if(event.which==87){
        //      $player1.animate({"right" : "+=4px"});
        //       }
        // });
        // $(document).on("keyup", function (event){
        //       if(event.which==87){
        //         $player1.animate({"left" : "+=4px"});
        //         }
        //
        //  });

        // increment1=increment1+20;
        // startGame();
        // moveTotal1=moveTotal1+20;

  });

  $(document).on("keyup", function (event){

      if(event.which==38){
          if($player2.css("bottom") >="1300px"){
            alert("Player 2 wins!");
          }
      {$player2.animate({"bottom" : "+=20px"});
        // increment1=increment2+20;
        // startGame();
        // moveTotal1=moveTotal1+20;
      }
      }
  });

}


});
