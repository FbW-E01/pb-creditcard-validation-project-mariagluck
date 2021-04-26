// You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called  `validateCreditCard`  that returns  `true`  or  `false`.

// Here are the rules for a valid number:

// -   Number must be 16 digits, all of them must be numbers
// -   You must have at least two different digits represented (all of the digits cannot be the same)
// -   The final digit must be even
// -   The sum of all the digits must be greater than 16

// The following credit card numbers are valid:

// -   `9999777788880000`
// -   `6666666666661666`

// The following credit card numbers are invalid:

// -   `a92332119c011112`  _invalid characters_
// -   `4444444444444444`  _only one type of number_
// -   `1111111111111110`  _sum less than 16_
// -   `6666666666666661`  _odd final number_


// **Bonus #1:**  A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:

// -   `9999-7777-8888-0000`
// -   `6666-6666-6666-1666`

// Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)

// **Bonus #2:**  Return an object indicating whether the credit card is valid, and if not, what the error is  
// `{ valid: true, number: '9923-3211-9c01-1112' }`  
// `{ valid: false, number: '9923-3211-9c01-1112', error: ‘wrong_length’ }`

// ----------

// **Bonus #3:**  Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the  [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)  for inspiration.

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
      
   // The credit card number must have at least two different digits represented (all of the digits cannot be the same)
     let diverseDigits = {};
     for(let l = 0; l < removeDashes.length; l++){
      diverseDigits[removeDashes[l]] = true;
     }
     if(Object.keys(diverseDigits).length < 2){
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

