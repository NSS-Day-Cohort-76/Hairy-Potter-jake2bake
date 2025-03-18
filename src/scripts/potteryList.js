import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = (items) => {
    let potteryHTML = " "
    for (const item of items){
    potteryHTML += `<section class="pottery" id="pottery--${item.id}">
    <h2 class="pottery__shape">${item.shape}</h2>
    <div class="pottery__properties">
      Item weighs ${item.weight} grams and is ${item.height} cm in height
    </div>
    <div class="pottery__price">Price is $${item.price}</div>
  </section>`}
  
  return potteryHTML
}