let primKey = 1
//let potteryObject = {}

export const makePottery = (shape, weight, height) => {
    
    let potteryObject = {shape: shape, weight: weight, height: height, id: primKey}
    
    primKey ++
    return potteryObject
}

//module.exports = {potteryObject}