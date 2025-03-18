import { firePottery } from "./Kiln.js"
let sellItems = []
export const toSellOrNotToSell = (piece) => {
    if (piece.weight >= 6 && piece.cracked === false) {
        piece.price = 40
        sellItems.push(piece)
    } else if (piece.weight < 6 && piece.cracked === false) {
        piece.price = 20
        sellItems.push(piece)
    // } else if (piece.cracked !== true) {
    //      sellItems.push(piece)
    }
    return sellItems
    
}

export const usePottery = () => {
    return structuredClone(sellItems)
}