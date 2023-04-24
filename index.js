var firstDiceNumber = Math.ceil(Math.random() * 6);
var secondDiceNumber = Math.ceil(Math.random() * 6);

document.querySelector(".dice .img1").setAttribute("src", "images\dice" + firstDiceNumber + ".png");
document.querySelector(".dice .img1").setAttribute("value1", firstDiceNumber);
document.querySelector(".dice .img2").setAttribute("src", "images\dice" + secondDiceNumber + ".png");
document.querySelector(".dice .img2").setAttribute("value2", secondDiceNumber);

if (firstDiceNumber > secondDiceNumber) {
    document.getElementById("score").textContent = "🚩Player 1 wins!";
}
else if(secondDiceNumber>firstDiceNumber)
 {
    document.getElementById("score").textContent = "Player 2 wins!🚩";
}
else
{
    document.getElementById("score").textContent = "It's a draw!";
}



