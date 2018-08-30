
//declare variables
var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark, markHigher;

massJohn = 220;
massMark = 180;
heightJohn = 74;
heightMark = 70;

//calculate bmi imperial
//bmi = (mass lb / height ** 2) * 703

//calculate bmi metric
//bmi = (mass kg / height ** 2)

bmiJohn = (massJohn / Math.pow(heightJohn, 2)) * 703;
//round to 2 decimal places
bmiJohn = (Math.round(bmiJohn * 100) / 100);
console.log(bmiJohn);


bmiMark = (massJohn / Math.pow(heightMark, 2)) * 703;
//round to 2 decimal places
bmiMark = (Math.round(bmiMark * 100) / 100);
console.log(bmiMark);

markHigher = bmiMark > bmiJohn;
console.log(markHigher);


