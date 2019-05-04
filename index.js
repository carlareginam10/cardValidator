function checkSize(cardNumber) {
    if (cardNumber.length === 15) {
        return 1;
    } 
    if (cardNumber.length === 16 || cardNumber.length === 14) {
        return 0;
    } else {
        return false;
    }
} 

function multAndSum(cardNumber) {
    let sum = 0;
    let cardArray = [];
    let size = checkSize(cardNumber);
    for (let i in cardNumber) {             
        if (i % 2 === size) {
            let dig = cardNumber[i] * 2; 
            if (dig > 9) {    
                let digOne = dig.toString().substr(0, 1);
                let digTwo = dig.toString().substr(1, 1);
                cardArray[i] = parseInt(digOne) + parseInt(digTwo);
            } else {
                cardArray[i] = parseInt(dig);
            }                  
            sum += parseInt(cardArray[i]);      
        } else {      
            cardArray[i] = parseInt(cardNumber[i]);
            sum += parseInt(cardArray[i]);
        }        
    }
    return sum;         
}

function cardValidator(cardNumber) {       
    if (checkSize(cardNumber) === 0 || checkSize(cardNumber) === 1) {
        let result = multAndSum(cardNumber);    
        if (result % 10 === 0) {
            return true;    
        } else {
            return false;    
        }
    } else {
        return false;
    }
}

module.exports.cardValidator = cardValidator;


