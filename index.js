function multiplyNumbers(cardNumber) {
    const size = cardNumber.length % 2; //Pensar em um nome melhor
    return cardNumber.split("").map((number) => {
        if (i % 2 === size) {
            let dig = number * 2;
            if (dig > 9) {
                let digOne = dig.toString().substr(0, 1);
                let digTwo = dig.toString().substr(1, 1);
                return parseInt(digOne) + parseInt(digTwo);
            } else {
                return parseInt(dig);
            }
        } else {
            return parseInt(number);
        }
    });
}

function cardValidator(cardNumber) { 
    const hasValidSize = cardNumber.length >= 14 || cardNumber.length <= 16;
    if (hasValidSize) {
        const cardArray = multiplyNumbers(cardNumber);
        const result = cardArray.reduce((a, b) => a + b, 0);
        
        return result % 10 === 0;
    }
    return false;
}

module.exports.cardValidator = cardValidator;


