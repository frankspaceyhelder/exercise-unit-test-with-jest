// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = (USD,JPY) => {
    return USD/JPY
}

const fromYenToPound = (JPY,GBP) => {
    return JPY * GBP
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum };
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }