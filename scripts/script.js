// JavaScript Document



var hamMenu = document.querySelector ("header nav:first-of-type ul li:nth-of-type(1)");

hamMenu.addEventListener("click", uitschuivenMenu);

function uitschuivenMenu (){
    var Menu = document.querySelector ("header nav:nth-of-type(2)");

    console.log("klik");
    Menu.classList.toggle ("uitschuiven");

};



var vorigeButton = document.querySelector ('section button:first-of-type');
var volgendeButton = document.querySelector ('section button:nth-of-type(2)');
var ulLinkjes = document.querySelector ('section ul li');

var huidigeLink = 0;

volgendeButton.addEventListener("click", volgendeLink);
vorigeButton.addEventListener("click", vorigeLink);

function volgendeLink () {
    ulLinkjes.classList.toggle ("Rood");

    huidigeLink = huidigeLink + 1;

    console.log("Check");
    console.log(huidigeLink);
}

function vorigeLink () {
    ulLinkjes.classList.add ("Yellow");

    huidigeLink = huidigeLink - 1;

    console.log("Dubbel check");
    console.log(huidigeLink);
}
