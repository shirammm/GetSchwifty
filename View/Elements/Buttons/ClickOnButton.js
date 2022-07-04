import { isValidMove } from "../../../Controller/Valids/ValidMove.js";

export function clickOnButton(button, table) {
    let currentLocation = button.id;
    let emptyCellLocation = findEmptyCellLocation();
    if(isValidMove(currentLocation, emptyCellLocation)) {
        let currentRow = currentLocation.split("-")[0]; 
        let currentColumn = currentLocation.split("-")[1];
        let nextRow = emptyCellLocation.split("-")[0]; 
        let nextColumn = emptyCellLocation.split("-")[1];
        let currentElement = table[currentRow][currentColumn];
        let emptyElement = table[nextRow][nextColumn];
        swapNumericalButtons(currentElement, emptyElement);
    }
}

function swapNumericalButtons(visibleElement, hiddenElement) {
    let hiddenElementDesignatedLocation = hiddenElement.elementDesignatedLocation;

    hiddenElement.elementDesignatedLocation = visibleElement.elementDesignatedLocation;
    hiddenElement.element.className = 'buttonInTable';
    hiddenElement.element.innerText = visibleElement.element.innerText;
    hiddenElement.element.style.background  = visibleElement.element.style.background;

    visibleElement.elementDesignatedLocation = hiddenElementDesignatedLocation;
    visibleElement.element.className = 'emptyCell';
}

function findEmptyCellLocation(){
    let emptyCell = document.getElementsByClassName("emptyCell");
    let location = emptyCell[0].id;
    return location;
}