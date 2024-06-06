// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromDollarToYen = (USD) => {
    const dollarToEuro = USD / 1.07;
    const valueInYen = dollarToEuro * 156.5;
    return valueInYen;
}

const fromYenToPound = (JPY) => {
    const yenToEuro = JPY / 156.5;
    const valueInPounds = yenToEuro * 0.87;
    return valueInPounds;
}

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))


// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }