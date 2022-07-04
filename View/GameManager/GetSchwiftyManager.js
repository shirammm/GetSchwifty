export class GetSchwiftyManager {
    constructor(initializeTableFundamentals,
                 initializeElements,
                 clickOnElementFunction,
                 initializeElementsBackground,
                 hideUnnecessaryCells,
                 gameOverChecker){
        this.initializeTableFundamentals = initializeTableFundamentals;
        this.initializeElements = initializeElements;
        this.clickOnElementFunction = clickOnElementFunction;
        this.initializeElementsBackground = initializeElementsBackground;
        this.hideUnnecessaryCells = hideUnnecessaryCells;
        this.gameOverChecker = gameOverChecker;
    }

    start(rows, columns) {
        let table = this.initializeTableFundamentals(rows, columns);
        console.log(...table);
    this.initializeElements(table, this.clickOnElementFunction, this.gameOverChecker);
    this.initializeElementsBackground(table);
    this.hideUnnecessaryCells(table);
    }
}