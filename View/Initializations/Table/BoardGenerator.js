import { TableCell } from "../../../Model/Assets/TableCell.js";

function generateRandomInt(maxLimit) {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
}

export function createTableFundamentals(rows, columns) {
    let optionalNumbers = [...Array(rows*columns).keys()];
    let table = [];
    for(let i=0; i<rows; i++) {
        let row = [];
        for(let j=0; j<columns; j++) {
            let randomIndex = generateRandomInt(optionalNumbers.length);
            let elementDesignatedLocation = optionalNumbers[randomIndex];
            let cell = new TableCell(i*rows+j, {}, elementDesignatedLocation);
            row.push(cell);
            optionalNumbers.splice(randomIndex, 1);
        }
        table.push(row);
    }
    return table;
}