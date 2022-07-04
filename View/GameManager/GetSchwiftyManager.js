export class GetSchwiftyManager {
    constructor(initializeTableFundamentals,
                 initializeElements,
                 clickOnElementFunction,
                 initializeElementsBackground,
                 hideUnnecessaryCells,
                 gameOverChecker,
                 shuffler,
                 checkTableValidity,
                 boardSizeFromUser){
        this.initializeTableFundamentals = initializeTableFundamentals;
        this.initializeElements = initializeElements;
        this.clickOnElementFunction = clickOnElementFunction;
        this.initializeElementsBackground = initializeElementsBackground;
        this.hideUnnecessaryCells = hideUnnecessaryCells;
        this.gameOverChecker = gameOverChecker;
        this.shuffler = shuffler;
        this.checkTableValidity = checkTableValidity;
        this.boardSizeFromUser = boardSizeFromUser;
    }

    start() {
        let size = this.boardSizeFromUser();
        let table = this.initializeTableFundamentals(size, size);
        do {
            this.shuffler(table);
        } while(!this.checkTableValidity(table));
        this.initializeElements(table, this.clickOnElementFunction, this.gameOverChecker);
        this.initializeElementsBackground(table);
        this.hideUnnecessaryCells(table);
    }
}