let primaryKey = 1

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
    const pottery = {
        shape: potteryShape,
        weight: potteryWeight,
        height: potteryHeight,
        id: primaryKey++,
    }
    return pottery
}    

