import { createTableFundamentals } from "../Initializations/Table/BoardGenerator.js";
import { createButtonsAsTableElements } from "../Initializations/Elements/Buttons.js";
import { clickOnButton } from "../Elements/Buttons/ClickOnButton.js";
import { isGameOver } from "../GameOver/GameOverChecker.js";
import { hideTheLastCell } from "../Initializations/HiddenCell/LastCellHider.js";
import { generateNumericalColorfulBackground } from "../Initializations/Backgrounds/NumericalNumericalBackground.js";
import { GetSchwiftyManager } from "../GameManager/GetSchwiftyManager.js";

var rows = 3;
var columns = 3;

let initializeTableFundamentals = createTableFundamentals;
let initializeElements = createButtonsAsTableElements;
let clickOnElementFunction = clickOnButton;
let initializeElementsBackground = generateNumericalColorfulBackground;
let hideUnnecessaryCells = hideTheLastCell;
let gameOverChecker = isGameOver;

let gameManager = new GetSchwiftyManager(initializeTableFundamentals,
                                        initializeElements,
                                        clickOnElementFunction,
                                        initializeElementsBackground,
                                        hideUnnecessaryCells,
                                        gameOverChecker);

gameManager.start(rows, columns);