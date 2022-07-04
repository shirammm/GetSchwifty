export function isSolveable(table) {
    let rows = table.length;
    let isBoardEven = (rows%2 == 0) ? true : false;
    let reversals = getTableReversals(table, isBoardEven);
    let isReversalsEven = (reversals%2 == 0) ? true : false;
    if(isBoardEven && isReversalsEven) return true;
    if(!isBoardEven && isReversalsEven) return true;
    return false;
}

function getTableReversals(table, isEven) {
    let reversals = 0;
    for(let i=0; i<table.length; i++) {
        for(let j=0; j<table[i].length; j++) {
            reversals += getCellReversals(table, i, j, isEven);
        }
    }
    return reversals;
}

function getCellReversals(table, row, column, isEven) {
    let cell = table[row][column];
    let emptyCellValue = table.length * table[0].length - 1;
    if(cell.elementDesignatedLocation == emptyCellValue) {
        if (isEven) {
            return row + 1;
        }
        else {
        return 0;
        }
    }
    let reversals = 0;
    for(let i=row; i<table.length; i++) {
        for(let j=0; j<table[i].length; j++) {
            if(i==row && j<=column) continue;
            if(table[i][j].elementDesignatedLocation == emptyCellValue) continue;
            if(table[i][j].elementDesignatedLocation < cell.elementDesignatedLocation) reversals++;
        }
    }
    return reversals;
}