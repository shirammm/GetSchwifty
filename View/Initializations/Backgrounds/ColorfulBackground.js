export function generateColorfulBackground(table) {
    let rows = table.length;
    let columns = table[0].length;
    for(let i=0; i<rows; i++) {
        for(let j=0; j<columns; j++) {
            let currentElement = table[i][j].element;
            var r = 150+Math.floor(Math.random() * 106);
            var g = 150+Math.floor(Math.random() * 106);
            var b = 150+Math.floor(Math.random() * 106);
            var backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
            currentElement.style.background = backgroundColor;
        }
    }
}