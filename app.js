const sum = (a,b) => {
    return a + b
}


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) =>{
    return euro * oneEuroIs['USD']
}
console.log(fromEuroToDollar(1))
const fromDollarToYen = (dollar) =>{
    return dollar/1.2 * oneEuroIs['JPY'];
}
console.log(fromDollarToYen(1))

const fromYenToPound = (yen) =>{
    return yen/127.9 *oneEuroIs['GBP']
}
console.log(fromYenToPound(1))

module.exports = {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound};