import { generateNumericalBackground } from "./NumericalBackground.js";
import { generateColorfulBackground } from "./ColorfulBackground.js";

export function generateNumericalColorfulBackground(table) {
    generateNumericalBackground(table);
    generateColorfulBackground(table);
}