
function validateCreditCard(creditCardNum) {

  //Remove dashes from creditCardNum string
  let removeDashes = '';
  for (let i = 0; i < creditCardNum.length; i++) {
      if (creditCardNum[i] !== '-') {
        removeDashes += creditCardNum[i];
      }
  }
    // Credit card number must be 16 digits
  if(removeDashes.length !== 16){
    return `Valid: ${false}, number: ${creditCardNum}, ‘error, wrong length’`
  };
  
   // All digits must be numbers
   for (let j = 0; j < removeDashes.length; j++) {
       let actualNumber = removeDashes[j];   

       switch (actualNumber) {
           case "0": break;
           case "1": break;
           case "2": break;
           case "3": break;
           case "4": break;
           case "5": break;
           case "6": break;
           case "7": break;
           case "8": break;
           case "9": break;
           default: return `Valid: ${false}, number: ${creditCardNum}, ‘error, digits must be numbers’`
       };
  
    }
   // The credit card number must have at least two different digits represented (all of the digits cannot be the same)
     let diverseDigits = {};
     for(let l = 0; l < removeDashes.length; l++){
      diverseDigits[removeDashes[l]] = true;
     }
     if(Object.keys(diverseDigits.length < 2){
        return `Valid: ${false}, number: ${creditCardNum}, 'error, not enough digit diversity'`
    };
 
    // The final digit must be even
    if(removeDashes[removeDashes.length - 1] % 2 !== 0){
        return `Valid: ${false}, number: ${creditCardNum}, ‘error, final digit must be even’`
    };

    // The sum of all the digits must be greater than 16
    let sumOfDigits = 0;
    for(let k = 0; k < removeDashes.length; k++){
        sumOfDigits += parseInt(removeDashes[k]);
    }
    if(sumOfDigits <= 16){
        return `Valid: ${false}, number: ${creditCardNum}, ‘error, sum of digits must be > 16’`
    };

    return `Valid: ${true}, number: ${creditCardNum}`
};




/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-6666-6666-1665'));// {Valid: false, number: 6666-6666-6666-1665, ‘error, final digit must be even’}
console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
console.log(validateCreditCard('0001-0001-0001-0010')); //{Valid: false, number: 0001-0001-0001-0010, ‘error, sum of digits must be > 16’}

