
let player1 = prompt("name of player 1", "");
let player2 = prompt("name of player 2", "");

var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage = "dice" + randomnumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomdiceimage);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage = "dice" + randomnumber2 + ".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomdiceimage);

document.getElementById("p1").innerHTML = player1;
document.getElementById("p2").innerHTML = player2;

if (randomnumber1 === randomnumber2) {
  document.querySelector("h1").innerHTML = "Draw🤣🤣"
}
else if (randomnumber1 > randomnumber2) {

  document.querySelector("h1").innerHTML = player1 + "  WINS!✌️"
  document.querySelector("h2").innerHTML = "OOPS! "+player2+" Better Luck NE"

}
else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = player2 + "  WINS!✌️"
}