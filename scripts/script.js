// JavaScript Document



var hamMenu = document.querySelector ("header nav:first-of-type ul li:nth-of-type(1)");

hamMenu.addEventListener("click", uitschuivenMenu);

function uitschuivenMenu (){
    var Menu = document.querySelector ("header nav:nth-of-type(2)");

    console.log("klik");
    Menu.classList.toggle ("uitschuiven");

};





