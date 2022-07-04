function generateRandomInt(maxLimit) {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
}

export function shuffle(table) {
    let rows = table.length;
    let columns = table[0].length;
    let optionalNumbers = [...Array(rows*columns).keys()];
    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            let randomIndex = generateRandomInt(optionalNumbers.length);
            let elementDesignatedLocation = optionalNumbers[randomIndex];
            table[i][j].elementDesignatedLocation = elementDesignatedLocation;
            optionalNumbers.splice(randomIndex, 1);
        }
    }
}