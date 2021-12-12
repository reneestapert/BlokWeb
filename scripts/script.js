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
var ulLinkje = document.querySelector ('section ul li');
var ulLinkjes = document.querySelectorAll ('section ul li');

var huidigeLink = 0;
var currentLink = document.querySelector ('section ul li:nth-of-type(' + [ huidigeLink] + ')');

volgendeButton.addEventListener("click", volgendeLink);
vorigeButton.addEventListener("click", vorigeLink);

function volgendeLink () {

    currentLink.classList.add("focus");
    
    huidigeLink = huidigeLink + 1;
    
    

    // Als de linkjes op zijn, ga dan weer naar de eerste
    if (huidigeLink > 7 ) {
        huidigeLink = 0 ;      
        ulLinkje.src =  'section ul li:nth-of-type(' + [ huidigeLink] + ')';
    }


    console.log("Check");
    console.log(huidigeLink);
}

function vorigeLink () {
    currentLink.classList.remove ("focus");

    huidigeLink = huidigeLink - 1;

    

    // Als de linkjes op zijn, ga dan naar de laatste link
    if (huidigeLink < 0 ) {
        huidigeLink = 7 ;      
        ulLinkje.src =  'section ul li:nth-of-type(' + [ huidigeLink] + ')';
    }

    console.log("Dubbel check");
    console.log(huidigeLink);
}

