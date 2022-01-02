// JavaScript Document


// Hamburgermenu werkend maken. Uitschuiven bij de klik op de button
var hamMenu = document.querySelector ("header nav:first-of-type ul li:nth-of-type(1)");

hamMenu.addEventListener("click", uitschuivenMenu);

function uitschuivenMenu (){
    var Menu = document.querySelector ("header nav:nth-of-type(2)");

    console.log("klik");
    Menu.classList.toggle ("uitschuiven");

};




/////////////////////////////////////////////////////////////////
/////  Code van Sanne  //////  Graag niet veel over vragen  /////
/////////////////////////////////////////////////////////////////

function createCaroCarrousel(carrouselID) {
    let carrousel = document.querySelector("main section");
    let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
    let linkButtons = carrousel.querySelectorAll(":scope > a");
  
  
    /*****************************/
	/* LINKS/RECHTS LINK-BUTTONS */
	/*****************************/  

	// de links/rechts link-buttons initialiseren en activeren
  function iniLinkButtons() {    
    for(linkButton of linkButtons) {
			// beide link-buttins naar kliks laten luisteren
      linkButton.addEventListener("click", function(e){
        // als er geklikt wordt
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

				// bepalen of er op 'previous' of 'next' geklikt is
				let direction = this.getAttribute("href");
				// naar het element gaan
				goToElement(direction);
      });
      
    }
	}
  
  
    /*****************/
	/* START POSITIE */
	/*****************/
  
	// het eerste element en bolletje actief maaken
  function iniStartPosition() {
    // eerste element current maken
    carrouselElements[0].classList.add("current");
		// aan het begin van de container starten
    carrouselElementsContainer.scrollLeft = 0;
  }
  
  
    /*********************/
	/* ALGEMENE FUNCTIES */
	/*********************/
  
  //////////////////////////////////
  // naar volgende/vorige element //
  function goToElement(direction) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope ul > .current");

		let newElement = currentElement.nextElementSibling;
		if (direction == "previous") {
			// het nieuwe element is het vorige broertje/zusje
			newElement = currentElement.previousElementSibling;
		}

		// naar het nieuwe element scrollen
		scrollToElement(newElement.id);
  }
  
  
    ///////////////////////////
    // scroll to new element //
  function scrollToElement(elementID) {
    // nieuwe element current element maken
    updateCurrentElement(elementID);

    // scrollLeft van de container aanpassen
    let theElement = carrousel.querySelector("#"+elementID);
    let elementOffset = theElement.offsetLeft;
    carrouselElementsContainer.scrollLeft = elementOffset;

  }
  
  
    ////////////////////////////
	// update current element //
    function updateCurrentElement(elementID) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// het nieuwe element opzoeken
		let newElement = carrousel.querySelector("#"+elementID);
		// de class current toevoegen
		newElement.classList.add("current");

        
	}
  
  
  // de linkbuttons activeren
  iniLinkButtons();	
  // de carrousel bij het begin starten
  iniStartPosition();
}


/************************/
/* DE CARROUSEL CREËREN */
/************************/

// nadat de pagina geladen is, de carrousels activeren
(function() {
  // hier de id gebruiken van de section in de html
  createCaroCarrousel("justButtons");
  //je kunt hier ook meerdere carrousellen activeren
})();




