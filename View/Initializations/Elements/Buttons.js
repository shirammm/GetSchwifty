import { createButton } from "../../Elements/Buttons/CreateButton.js";

export function createButtonsAsTableElements(table, onClickFunc, isGameOverFunc) {
    let tableDiv = document.createElement('div');
    tableDiv.className = 'tableDiv';
    let rows = table.length;
    let columns = table[0].length;
    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            let currentButton = createButton(i, j, table, onClickFunc, isGameOverFunc);
            tableDiv.appendChild(currentButton);
            table[i][j].element = currentButton;
        }
    }
    document.body.appendChild(tableDiv);
}