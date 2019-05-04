function verify (num){
  if(num.length === 16 || num.length === 14 || num.length === 15){   
       return true;
  } else {
       return false;
  }
};

function cardValidator(num){ 
      
  if (verify(num)) {
    let total = 0;
    let arr = [];      
    for (let i in num) { 
             
      if(i % 2 === 0){
        dig = num[i] * 2;              
        if(dig > 9){    
          let digOne = dig.toString().substr(0,1);
          let Digtwo = dig.toString().substr(1,1);
          arr[i] =  parseInt(digOne)+parseInt(Digtwo);
        } else {
          arr[i] = parseInt(dig);
        }                  
        total += parseInt(arr[i]);      
      } else {      
        arr[i] =parseInt(num[i]);
        total += parseInt(arr[i]);
      } 
    } 
    if(total % 10 === 0){
      return true;    
    }else {
      return false;    
    }
  } else {
    return false;
  }
}

module.exports.cardValidator = cardValidator;


