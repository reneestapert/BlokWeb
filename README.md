# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij (Renee Stapert)

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Renee Stapert

#### Je startniveau:
Blauw, ik kan het opzich wel maar doe het niet genoeg

#### Je focus:
Ik wil me graag focussen op de surface plane. Ik wil graag een professioneel uitziende website kunnen bouwen.
 
</details>





## Je website

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://marshall.com/

#### Screenshot(s) van de eerste pagina (small screen): 
Homepagina  
 ![image](https://user-images.githubusercontent.com/94540366/142641727-a90a4680-22ec-4bb4-94cf-430d4ea07af7.png)


#### Screenshot(s) van de tweede pagina (small screen):
Vind een winkel in de buurt (Recommended Retailers)
 ![image](https://user-images.githubusercontent.com/94540366/142642011-dacdc9a3-ce8c-4915-b84a-a1433f2cab97.png)

 
</details>



## Breakdownschets (week 1)

<details>
<summary>Een screenshot van de volledige pagina van de website van Marshall. Hier ga je alle elementen labelen als HTML elementen. Je zet een label bij iedere 'img', bij iedere 'p', etc. Zo de hele pagina af gaan waardoor je een veel beter beeld krijgt van wat je in je eigen HTML document moet gaan zetten.</summary>

### de hele pagina: 
[Breakdownschets FED Marshall.pdf](https://github.com/reneestapert/BlokWeb/files/7698680/Breakdownschets.FED.Marshall.pdf)


### dynamisch deel 1:
 De carrousel met linkjes naar verschillende pagina's op de site.
![dynamisch element Marshall](https://user-images.githubusercontent.com/94540366/147881187-cfbfa8dc-d5a1-4a13-a691-1e0a7f2f3c0d.jpg)


### wellicht nog een dynamisch deel 2: 
 Het inschrijfformulier om jezelf in te schrijven voor allerlei soorten nieuwsberichten.
![dynamisch element Marshall2](https://user-images.githubusercontent.com/94540366/147881197-49ae08c1-8a7b-43a8-adf6-4611382b0661.jpg)


</details>





## Voortgang 1 (week 2)

<details open>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
 De oefeningen doen gingen goed, het was een soort opfriscursus van een jaar geleden. Ik had de opdrachten wel al snel door, maar kon de moeilijkere oefeningen moeizaam maken. Het beginnen aan de site vond ik wat lastig, ik wist niet goed waar en hoe ik het best kon beginnen.


### Agenda voor meeting
samen met je groepje opstellen

| Christiaan Dirven      | Jack van Vlerken          | Renee Stapert    |         |
| ---            | ---                | ---          | ---              |
| Hoe je de CSS gestructureerd kan vormgeven, hoe begin je?  | Hoe maak ik van een button een foto?             | Wat is de beste manier om te beginnen? Stap voor stap of eerst de HTML, dan CSS, dan Java?     |     |
|  | Hoe maak ik een goed werkend hamburgermenu? |  |  |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Vooral alle HTML erin zetten en dan langzaam van boven naar beneden gaan stylen
- De breakdownschets goed analyseren en daaruit je elementen halen

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
 Eindelijk begonnen aan de site. Ik merk dat ik het redelijk goed oppak, vooral met behulp van de oefeningen. Ik kan makkelijk terug kijken wat ik heb gedaan en dat vergelijken met mijn huidige code.


### Agenda voor meeting
samen met je groepje opstellen

| Christiaan Dirven     | Jack van Vlerken          | Renee Stapert    |         |
| ---            | ---                | ---          | ---              |
| Hamburger menu  | Animatie          | Hamburger menu    |     |
| en dat ook nog | dit als er tijd is | Article tekst minder breed dan plaatje |  |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
Problemen meteen op kunnen lossen met behulp van Sanne. 

- Bij de href van de aatjes een '#' zetten. Dit zorgt ervoor dat de pagina niet meteen gerefresht wordt.
- 
- nog een punt
- ...

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>Tijdens de toegankelijkheidstest ben ik aan de slag gegaan met, grappig genoeg, het testen van de teogankelijkheid van mijn site. De site die ik na heb gemaakt van Marshall ging ik op verschillende manieren benaderen. Met specifiek de tab toets, het gehele toestenbord en met verschillende brillen naar de website kijken. Deze testjes hebben mij een ander inzicht gegeven wat er nog meer verbeterd kan worden aan mijn replica van Marshall zodat iedereen de site makkelijk kan gebruiken. </summary>

### Bevindingen
 - Linkjes niet goed zichtbaar. 
 - Tab toets gaat door het hele hamburger menu.
 - Duidelijkere feedback op interactieve elementen.

#### Linkjes niet goed zichtbaar. 
De linkjes naar andere delen van de site zijn niet volledig zichtbaar voor mensen met slecht zicht. Het contrast is niet groot genoeg om te kunnen zien wat er staat.
 ![image](https://user-images.githubusercontent.com/94540366/147888056-da9f6aa8-4996-4549-a684-a1f6f528113f.png)

Als oplossing kan ik de kleur van de linkjes een donkerdere kleur geven waardoor ze meer opvallen. Ook is het een optie om de hover state extra contrasterend te maken. In plaats van alleen een dikkere border in te stellen, ook een andere achtergrond waardoor de tekst leesbaarder zal worden.


#### Tab toets gaat door het hele hamburger menu. 
Als je met de TAB toets door de pagina heen gaat wordt je automatisch door het hele hamburgermenu geleid. Dit is natuurlijk heel erg vervelend als je eigenlijk alleen wil weten wat er op de pagina zelf staat.
 ![image](https://user-images.githubusercontent.com/94540366/147888856-63b96191-5475-49b0-b2bf-fae69cf34853.png)

Een oplossing is bijvoorbeeld een verstopte link die alleen tevoorschijn komt als je met je toetsenbord gebruikt om te navigeren. Aan de hand van een linkje helemaal aan het begin van het HTML document zal dit het eerste element dat focust wanneer je gaat navigeren. Met behulp van 'transform: translateY(-200%);' wordt de link buiten de pagina geplaatst en zodra erop gefocust wordt het percentage 0, waardoor de link op zijn plek komt te staan en dus zichtbaar is.


#### Duidelijkere feedback op interactieve elementen. 
Eigenlijk weer terug vallend op de eerste bevinding. De linkjes en interactieve elementen moeten duidelijker vormgegeven worden voor de juiste feedback. 

Een goede oplossing kan zijn, de achtergrond en de border een duidelijk andere kleur te geven dan het origineel. Zo is er een duidelijk verschil tussen de verschillende states en ook tijdens het navigeren van verschillende manieren.


</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


### Agenda voor meeting
samen met je groepje opstellen

| Christiaan Dirven      | Jack van Vlerken          | Renee Stapert    |         |
| ---            | ---                | ---          | ---              |
| Kruisje bij hamburgermenu  | Winkelmandje probleem             | De carrousel werkt niet, hoe krijg ik m werkbaar?    |     |
|  |  | Hoe kan ik de checkboxes stylen? |  |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
Er werd veel tijd genomen om onze problemen op te proberen te lossen. Mijn problemen werden niet perse meteen opgelost, ik kreeg vooral linkjes/bronnen van oplossingen naar mij toegeschoven. 

- Oplossing voor carrousel; https://codepen.io/shooft/pen/mdBOZLz?editors=0110
- Oplossing voor checkbox styling; https://dev.to/proticm/styling-html-checkboxes-is-super-easy-302o


</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken

Over het algemeen ging het namaken van de Marshall wel goed. In het begin liep ik wat achter, maar heb alsnog goed meekunnen doen met alle lessen. Ik begreep dingen erg snel en kon ze op de juiste manier verwerken in mijn replica. Wat ik wat lastiger vond was het researchen van oplossingen. Als ik ergens tegenaan liep ging ik het opzoeken op internet en vond ik steeds maar niet de juiste informatie om mijn probleem op te lossen.
 Ik heb niet alles afkunnen krijgen om de eerste kans te halen, maar wel ruim optijd voor de herkansing. Mede kwam dit door dingen opzoeken waar ik niet uit kwam en ook zelfdiscipline. 

### Screenshot(s)

 Homepagina
![image](https://user-images.githubusercontent.com/94540366/147889354-b8e46f19-bc35-45ac-b93d-ac2e7ad23f6b.png)
![image](https://user-images.githubusercontent.com/94540366/147889361-6f2ce29a-6f45-40fa-a4ee-f41c72ddcd21.png)

 Recommended Retailers
 ![image](https://user-images.githubusercontent.com/94540366/147889367-081e43ff-8c5f-435a-9e3f-e048aa8576a4.png)
![image](https://user-images.githubusercontent.com/94540366/147889371-3555b1c6-4467-4e00-a84d-f7fe97e72cf3.png)


</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Alle gebruikte bronnen staan in mijn code verwerkt!

</details>
