export function isValidMove(currentLocation, nextLocation) {
    //location definded like that - "row-column"
    let currentRow = currentLocation.split("-")[0]; 
    let currentColumn = currentLocation.split("-")[1];
    let nextRow = nextLocation.split("-")[0]; 
    let nextColumn = nextLocation.split("-")[1];
    let rowDiff = square(currentRow-nextRow);
    let columnDiff = square(currentColumn-nextColumn);
    if((rowDiff + columnDiff) < 2) {
        return true;
    }
    return false;
}

function square(num){
    return num * num;
}