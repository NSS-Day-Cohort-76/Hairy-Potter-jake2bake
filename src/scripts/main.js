import { makePottery } from "./potteryWheel.js" // Imports go first
import {firePottery} from "./Kiln.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery( "mug", 1, 4)
let platter = makePottery("platter", 3, 1)
let bowl = makePottery("bowl", 4, 3)
let cup = makePottery("cup", 2, 5)
let plate = makePottery("plate", 5, 1)


// Fire each piece of pottery in the kiln
let mugCondition = firePottery(mug, 5000)
let platterCondition = firePottery(platter, 2000)
let bowlCondition = firePottery(bowl, 2300)
let cupCondition = firePottery(cup, 1500)
let plateCondition = firePottery(plate, 1000)
console.log(plateCondition)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

