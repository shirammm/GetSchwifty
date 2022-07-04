export class GetSchwiftyManager {
    constructor(initializeTableFundamentals,
                 initializeElements,
                 clickOnElementFunction,
                 initializeElementsBackground,
                 hideUnnecessaryCells,
                 gameOverChecker,
                 shuffler,
                 checkTableValidity){
        this.initializeTableFundamentals = initializeTableFundamentals;
        this.initializeElements = initializeElements;
        this.clickOnElementFunction = clickOnElementFunction;
        this.initializeElementsBackground = initializeElementsBackground;
        this.hideUnnecessaryCells = hideUnnecessaryCells;
        this.gameOverChecker = gameOverChecker;
        this.shuffler = shuffler;
        this.checkTableValidity = checkTableValidity;
    }

    start(rows, columns) {
        let table = this.initializeTableFundamentals(rows, columns);
        // while(this.checkTableValidity(table) == false){
        //     this.shuffler(table);
        // }
        do {
            this.shuffler(table);
            console.log("again")
        } while(!this.checkTableValidity(table));
        this.initializeElements(table, this.clickOnElementFunction, this.gameOverChecker);
        this.initializeElementsBackground(table);
        this.hideUnnecessaryCells(table);
    }
}