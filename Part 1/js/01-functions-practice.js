var result;

//STEP 1
//half of number
function halfNumber(number) {
    result = number / 2;
    window.console.log("Half of " + number + " is " + result + ".");
    return result;
}
halfNumber(5);

//STEP 2
//square of number
function squareNumber(number) {
    result = number * number;
    window.console.log("The result of squaring the number " + number + " is " + result + ".");
    return result;
}
squareNumber(3);

//STEP 3
//percentOf() 
function percentOf(number1, number2) {
    result = (number1 / number2) * 100;
    window.console.log(number1 + " is " + result + "% of " +  number2 + ".");
    return result;

}
percentOf(2,4);

//STEP 4
//find Modulus
function findModulus(number1, number2) {
    result = (number2 % number1);
    window.console.log(result + " is the modulus of " +  number1 + " and " + number2 + ".");
    return result; 
}
findModulus(4,10);

//STEP 5
//find sum of all valid numbers
function sum() {
    var sum = 0;
    var choice = window.prompt("Enter numbers seprated by commas...");
    var inputNumbers = choice.split(",");
    var sumCalculated = true;
  
    for(var i = 0; i < inputNumbers.length; i++) {
        if(isNaN(inputNumbers[i])) {
            window.alert("Enter a valid number. "+ inputNumbers[i] + " is not valid" + ".");
            sumCalculated = false;
            break;            
        } else {
            // converting string to a number and add it to the sum
            sum += Number(inputNumbers[i]);
        }
    }
    if(sumCalculated) {
        window.console.log("Sum: "+ sum);
    }     
   
}
sum(); 