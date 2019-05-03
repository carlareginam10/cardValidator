function verify (num){
  if(num.length === 16 && num[0] != 0){   
    console.log("true", num.length);
    return true;
  } else {
    console.log("false", num.length);
    return false;
  }
};

// function becomeArray(num){
//   let array = num.split('');
//   console.log("passou em become array",array);
//   return array;

// }


function cardValidator(num){ 
      
  if (verify(num)) {
    // let card = becomeArray(num)
    let total = 0;
    let arr = [];      
    for (let i in num) {        
      if(i % 2 === 0){
        dig = num[i] * 2;              
        if(dig > 9){
           
          //  arr[i] = dig.split().reduce((result, card) => 
          //  (result + card), 0);
          //  console.log("o que tem em dig",typeof(dig))
          

          let digOne = dig.toString().substr(0,1);
          let Digtwo = dig.toString().substr(1,1);
          arr[i] = parseInt(digOne)+parseInt(Digtwo);
          console.log("o que tem em array",typeof(arr[i]))
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
module.exports.verify = verify;

