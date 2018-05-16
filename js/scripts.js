function RollDice(){
  var dice1=document.getElementById("scores");
  var diceroll=Math.floor(Math.random()*6)+1;
   dice1.innerHTML=diceroll;

}
function RollDice1(){
   var dice2=document.getElementById("scores1");
   var dicerolled=Math.floor(Math.random()*6)+1;
   dice2.innerHTML=dicerolled;
}
