import { makePottery } from "./potteryWheel.js"
//import {potteryObject} from "./potteryWheel.js"

export const firePottery = (piece, temp) => {
     piece.fired = true
     if (temp > 2200) {
        piece.cracked = true
     } else {
        piece.cracked = false
     }
    return piece
}




