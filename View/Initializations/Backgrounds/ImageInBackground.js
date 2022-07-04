export function generateImageBackground(imageSource, table) {
    let imageParts = splitImage(imageSource);
    for (let i=0; i<table.length; i++) {
        for (let j=0; j<table[i].length; j++){
            let cell = table[i][j]
            let index = cell.elementDesignatedLocation;
            let element = cell.element;
            element.style.backgroundImage = imageParts[index];
        }
    }
}

function splitImage(imageSource, numberOfRowsToCut, numberOfColumnsToCut, widthOfOnePiece, heightOfOnePiece) {
    let imageParts = [];
    for(let x=0; x<numberOfColumnsToCut; ++x) {
        for(let y; y<numberOfRowsToCut; ++y) {
            let canvas = document.createElement('canvas');
            canvas.width = widthOfOnePiece;
            canvas.height = heightOfOnePiece;
            let context = canvas.getContext('2d');
            context.drawImage(imageSource,
                            x*widthOfOnePiece,
                            y*heightOfOnePiece, 
                            widthOfOnePiece, 
                            heightOfOnePiece, 
                            0, 
                            0, 
                            canvas.width, 
                            canvas.height);
            imageParts.push(canvas.toDataURL);                 
        }
    }
}