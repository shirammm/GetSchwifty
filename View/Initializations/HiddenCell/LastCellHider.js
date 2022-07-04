export function hideTheLastCell(table){
    let rows = table.length;
    let columns = table[0].length;
    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            let maybeLastCell = table[i][j];
            if(maybeLastCell.elementDesignatedLocation == rows*columns-1){
                maybeLastCell.element.className = 'emptyCell';
            }
        }
    }
}