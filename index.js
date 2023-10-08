var arr = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]

var random_number1 = Math.floor(Math.random()*6);
var image1 = arr[random_number1]

document.querySelector(".player1 img").setAttribute("src" , image1);

var random_number2= Math.floor(Math.random()*6);
var image2 = arr[random_number2]

document.querySelector(".player2 img").setAttribute("src" , image2);

if(random_number1 == random_number2){
    document.querySelector("h1").innerText = "Draw!!";
}
else if(random_number1 > random_number2){
    document.querySelector("h1").innerText = "Player 1 wins!!";
}
else{
    document.querySelector("h1").innerText = "Player 2 wins!!"; 
}