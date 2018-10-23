# les-01
## Voorbereiding:
Clone de git-repository uit github en maak je eigen branch.
1. Kopieer de url via github naar je klembord:  
   ![Copy url](https://raw.githubusercontent.com/SyntraFSD-JS/les-01/korneel/images/copy_github.png "Copy url to clipboard")

Gebruik de terminal uit VSCode om de volgende commands uit te voeren.
(vervang `[naam]` door je eigen naam)

1. `git clone https://github.com/SyntraFSD-JS/les-01.git les-01`
2. `cd les-01`
3. `git checkout -b [naam]`
4. `git push origin [naam]`

Push regelmatig de changes die je maakt naar github

1. Commit je changes:
   1. Druk `Ctrl-Shift-G` om de Dource Control tab te openen
   2. Geef een beschrijving van de changes die je deed en duw `Ctrl-Enter`
2. Push je changes:
   1. Druk `Ctrl-Shift-P` om het Command Palette te openen
   2. Zoek naar `Git: Push` en druk op `Enter` om uit te voeren 
   
Pull regelmatig om opmerkingen of aanpassingen van mij binnen te halen
1. Druk `Ctrl-Shift-P` om het Command Palette te openen
2. Zoek naar `Git: Pull` en druk op `Enter` om uit te voeren 
     
     
## Structuur
De oefeningen bevinden zich in een aparte map met de naam `ex[oef. nummer]_[oef. naam]`
Daarin zitten alle bestanden die je nodig hebt om de oefening te maken, meestal is dit een `index.html` en een `script.js` bestand.
Het script bestand zal al gelinkt zijn aan het html bestand. Zie:
```html
<script src="script.js"></script>
```
Normaal moet je niet in het html bestand meer werken maar enkel in `script.js`.
Ook daar zal meestal al een basisstructuur aanwezig zijn waarbij in comments staat waar je zelf dingen moet aanvullen.

Om het resultaat van je oefening te bekijken open je het `index.html` bestand in chrome.
In deze module gebruiken we allemaal chrome zodat we allemaal hetzelfde resultaat hebben.

## Debuggen
Debuggen gebeurt in de browser zelf door middel van de console of met break points.

1. Om te debuggen met de console gebruik je volgende function `console.log([wat je wil loggen])`  
   In de tab console van de developer tools (`Ctrl-Shift-J`) zie wordt geprint wat je logt.
2. Om efficiënter te debuggen gebruiken we break points:  
   [![Debugging in chrome](https://img.youtube.com/vi/H0XScE08hy8/0.jpg)](https://developers.google.com/web/tools/chrome-devtools/javascript/)

## Oefeningen:
### Oefening 01: Word Scrambler
#### Doel:

De html pagina bevat een textvak `<textarea class="textarea" rows="10">`, 
daarin kan onze gebruiker eender welke tekst achterlaten.
Maar onze klant is ongerust over zijn privacy daarom moeten wij zijn text encoden. 
We doen dit door de volgorde van zijn woorden door elkaar te halen.
Er is een knop `<button id="submit" class="button is-info">Scramble</button>` voorzien,
als de gebruiker daarop een `click event triggered` verschijnt de door elkaar gehaalde tekst onder de knop
(`<div class="card-content">`). 

Voor verdere instructies kijk je in het script.js bestand.

#### Wat zal ik leren:
(Als ik `[test]` vierkante haakjes gebruik is wat er tussen de haakjes staat een beschrijving van het soort waarde er verwacht is. Neem dit nooit letterlijk over.)

- DOM Methods:
   - Wat is het Document Object Model:
   [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#What_is_the_DOM)
   - Enkele methods en properties:
      - `document.querySelector()` en `document.querySelectorAll()`: [kirupa.com](https://www.kirupa.com/html5/finding_elements_dom_using_querySelector.htm)  
      Deze methodes gebruik je om `DOM nodes` te selecteren.
      - `[element].addEventListener()`: [mozilla.org](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)  
      Gebruik deze methode om te luisteren naar bepaalde events gerelateerd aan een `element` (zoals hierboven geselecteerd).
      [Hier](https://developer.mozilla.org/en-US/docs/Web/Events) is een lijst met beschikbare events.
      - `[inputElement].value`:   
      Geeft de waarde terug die in een `input` of `textarea` ingevuld zijn. 
      Je kan de waarde wijzigen door `[inputElement].value = "Tekst die ik liever zie"`
      