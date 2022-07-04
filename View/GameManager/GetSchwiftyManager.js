export class GetSchwiftyManager {
    constructor(dto){
        this.dto = dto;
    }

    start() {
        let size = this.dto.boardSizeFromUser();
        let table = this.dto.initializeTableFundamentals(size, size);
        do {
            this.dto.shuffler(table);
        } while(!this.dto.checkTableValidity(table));
        this.dto.initializeElements(table, this.dto.clickOnElement, this.dto.gameOverChecker);
        this.dto.initializeElementsBackground(table);
        this.dto.hideUnnecessaryCells(table);
    }
}