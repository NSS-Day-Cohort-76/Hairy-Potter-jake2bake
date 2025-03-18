import { firePottery } from "./Kiln.js"
let sellItems = []
export const toSellOrNotToSell = (piece) => {
    if (piece.weight >= 6 && piece.cracked === false) {
        piece.price = 40
    } else if (piece.weight < 6 && piece.cracked === false) {
        piece.price = 20
    } 
    
    return sellItems.push(piece)
}

export const usePottery = () => {
    return structuredClone(sellItems)
}