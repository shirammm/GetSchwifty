export function createButton(row, column, table, onClickFunc, isGameOverFunc) {
    let button = document.createElement('button');
    button.className = 'buttonInTable';
    button.id = `${row}-${column}`;
    button.style.top = parseInt(+20 + row*50) + "px";
    button.style.left = parseInt(+20 + column*50) + "px";
    button.addEventListener("click", function() {onClickFunc(this,table); isGameOverFunc(table);} );
    return button;
}