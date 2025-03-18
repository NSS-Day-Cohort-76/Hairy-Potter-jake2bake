import { makePottery } from "./potteryWheel.js" // Imports go first
import {firePottery} from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./potteryList.js"


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
//console.log(plateCondition)

// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell(mug)
let sellPlatter = toSellOrNotToSell(platter)
let sellBowl = toSellOrNotToSell(bowl)
let sellCup = toSellOrNotToSell(cup)
let sellPlate = toSellOrNotToSell(plate)
//console.log(sellPlatter)

let goodPottery = usePottery()
//console.log(goodPottery)

// Invoke the component function that renders the HTML list
const potteryHTML = PotteryList(goodPottery)
const pottery = document.getElementById("potteryList")
pottery.innerHTML = potteryHTML

