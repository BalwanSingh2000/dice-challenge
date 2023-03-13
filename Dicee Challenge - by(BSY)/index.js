//alert("hiiiiiiiii")
var randomno1=Math.floor(Math.random() * 6) + 1;
// as from Math.floor(Math.random()*6) we will get no. from 0 to 5 only so wwe do plus 1
var randomimage1 = "dice" + randomno1 + ".png";
// dice.pnb from 1 to 6 
var randomimagesource1="images/" + randomimage1 ;
//images/dice.pnb from 1 to 6
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource1);

var randomno2=Math.floor(Math.random() * 6) +1;
var randomimage2 = "dice" + randomno2 + ".png";
var randomimagesource2 = "images/" + randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if(randomno1 > randomno2){
    document.querySelector("h1").innerHTML="Player 1 Won &#128526; &#128681;"
}
else if(randomno1 < randomno2){
    document.querySelector("h1").innerHTML="Player 2 Won &#128526; &#128681;"
}
else
{
    
        document.querySelector("h1").innerHTML="Draw!!;"
    
}

var footer=document.querySelector(a)
footer.style.color="red";

