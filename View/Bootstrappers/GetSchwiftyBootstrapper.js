import { createTableFundamentals } from "../Initializations/Table/BoardGenerator.js";
import { createButtonsAsTableElements } from "../Initializations/Elements/Buttons.js";
import { clickOnButton } from "../Elements/Buttons/ClickOnButton.js";
import { isGameOver } from "../GameOver/GameOverChecker.js";
import { hideTheLastCell } from "../Initializations/HiddenCells/LastCellHider.js";
import { generateNumericalColorfulBackground } from "../Initializations/Backgrounds/NumericalColorfulBackground.js";
import { shuffle } from "../Restart/Shuffler.js";
import { isSolveable } from "../Valids/ValidSolveableBoard.js";
import { askForPositiveInteger } from "../InteractionWithUser/AskInfoFromUser.js";
import { GetSchwiftyManager } from "../GameManager/GetSchwiftyManager.js";

let initializeTableFundamentals = createTableFundamentals;
let initializeElements = createButtonsAsTableElements;
let clickOnElement = clickOnButton;
let initializeElementsBackground = generateNumericalColorfulBackground;
let hideUnnecessaryCells = hideTheLastCell;
let gameOverChecker = isGameOver;
let shuffler = shuffle;
let checkTableValidity = isSolveable;
let boardSizeFromUser = askForPositiveInteger;

let gameManager = new GetSchwiftyManager(initializeTableFundamentals,
                                        initializeElements,
                                        clickOnElement,
                                        initializeElementsBackground,
                                        hideUnnecessaryCells,
                                        gameOverChecker,
                                        shuffler,
                                        checkTableValidity,
                                        boardSizeFromUser);
gameManager.start();