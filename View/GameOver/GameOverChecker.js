export async function isGameOver(table) {
    let rows = table.length;
    let columns = table[0].length;
    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            let cell = table[i][j]; 
            let cellLocation = cell.cellLocation;
            let elementDesignatedLocation = cell.elementDesignatedLocation;
            if(cellLocation != elementDesignatedLocation) {
                return false;
            }
        }   
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
    window.alert("game over!");
    return true;    
}