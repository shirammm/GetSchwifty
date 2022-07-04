export class GameManagerDTO {
    constructor(initializeTableFundamentals,
                initializeElements,
                clickOnElement,
                initializeElementsBackground,
                hideUnnecessaryCells,
                gameOverChecker,
                shuffler,
                checkTableValidity,
                boardSizeFromUser){
        this.initializeTableFundamentals = initializeTableFundamentals;
        this.initializeElements = initializeElements;
        this.clickOnElement = clickOnElement;
        this.initializeElementsBackground = initializeElementsBackground;
        this.hideUnnecessaryCells = hideUnnecessaryCells;
        this.gameOverChecker = gameOverChecker;
        this.shuffler = shuffler;
        this.checkTableValidity = checkTableValidity;
        this.boardSizeFromUser = boardSizeFromUser;
    }
}