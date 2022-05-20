var randomnumber = Math.floor(Math.random()*6+1);
var imagesource = "images/"+"dice"+randomnumber+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource);

var randomnuber2 = Math.floor(Math.random()*6+1);
var imagesource2 ="images/dice"+randomnuber2+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesource2);

if(randomnumber>randomnuber2){
    document.querySelector("h2").innerHTML="Player1 won";
}

else if (randomnuber2>randomnumber){
    document.querySelector("h2").innerHTML="Player2 won"
}
else{
    document.querySelector("h2").innerHTML="Match tied.."
}