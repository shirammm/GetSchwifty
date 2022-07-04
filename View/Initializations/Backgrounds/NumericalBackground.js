export function generateNumericalBackground(table) {
    let rows = table.length;
    let columns = table[0].length;
    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            let currentCell = table[i][j];
            currentCell.element.innerText = currentCell.elementDesignatedLocation+1;
        }
    }
}