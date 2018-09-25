
/*

BMI CALCULATOR

*/


//declare variables
var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, markHigher;

massJohn = 220;
massMark = 180;
heightJohn = 74;
heightMark = 70;

//calculate bmi imperial formula
//bmi = (mass lb / height ** 2) * 703

//calculate bmi metric formula
//bmi = (mass kg / height ** 2)

// Get John's BMI
bmiJohn = (massJohn / Math.pow(heightJohn, 2)) * 703;
//round BMI to 2 decimal places
bmiJohn = (Math.round(bmiJohn * 100) / 100);
console.log(bmiJohn);

//Get Mark's BMI
bmiMark = (massJohn / Math.pow(heightMark, 2)) * 703;
//round to 2 decimal places
bmiMark = (Math.round(bmiMark * 100) / 100);
console.log(bmiMark);

//Test if Mark's BMI is higher than John's and log result
markHigher = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s: ' + markHigher);


