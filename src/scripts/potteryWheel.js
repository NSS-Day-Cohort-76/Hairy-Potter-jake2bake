let primKey = 1
let potteryObject = {}

export const makePottery = (shape, weight, height) => {
    potteryObject[primKey] = {shape: shape, weight: weight, height: height, id: primKey}
    primKey ++
    return potteryObject
}