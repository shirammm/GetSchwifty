export function askForPositiveInteger(){
    do {
        var maybePositiveInteger = prompt("Enter the size of the board that you want", "positive integer please :)");
    } while(!isPositiveInteger(maybePositiveInteger));
    return maybePositiveInteger;
}

function isPositiveInteger(input) {
    let number = Number(input);
    if(!Number.isInteger(number)) return false;
    if(number < 1) return false;
    return true;
}