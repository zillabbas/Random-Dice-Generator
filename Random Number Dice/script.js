var RandomNumber1 = Math.floor(Math.random() * 6) + 1;

var RandomDiceImage = "dice" + RandomNumber1 + ".png";

var RandomImageSource = "images/" + RandomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , RandomImageSource);

var RandomNumber2 = Math.floor(Math.random() * 6) + 1;

var RandomImageSource2 = "images/dice" + RandomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , RandomImageSource2);

// if player 1 wins
if(RandomNumber1 > RandomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}

else if (RandomNumber2 > RandomNumber1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}

else {
    document.querySelector("h1").innerHTML = "Draw";
}