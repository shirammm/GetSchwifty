export function createButtonsAsTableElements(table, onClickFunction, isGameOverFunc) {
    let tableDiv = document.createElement('div');
    tableDiv.className = 'tableDiv';
    let rows = table.length;
    let columns = table[0].length;
    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            let currentButton = document.createElement('button');
            currentButton.className = 'buttonInTable';
            currentButton.id = `${i}-${j}`;
            currentButton.style.top = parseInt(+20 + i*50) + "px";
            currentButton.style.left = parseInt(+20 + j*50) + "px";
            currentButton.addEventListener("click", function() {onClickFunction(this,table); isGameOverFunc(table);} );
            tableDiv.appendChild(currentButton);
            table[i][j].element = currentButton;
        }
    }
    document.body.appendChild(tableDiv);
}