// objects coding challenge

// create object for john
var john = {
    fistName : "John",
    lastName : "Smith",
    mass : 205,
    height : 72,
    // function to calculate BMI, rounded (no decimals) is part of object
    bmiCalc : function() {
        return Math.round((this.mass / Math.pow(this.height, 2)) * 703);
    }
}

// create oject for mike
var mike = {
    fistName : "Mike",
    lastName : "Platypus",
    mass : 180,
    height : 70,
    // function to calculate BMI, rounded (no decimals) is part of object
    bmiCalc : function() {
        return Math.round((this.mass / Math.pow(this.height, 2)) * 703);
    }
}

/* 
   calculate BMI and record in object
   uses function and data with in object
*/

john.bmi = john.bmiCalc();
mike.bmi = mike.bmiCalc();

// control structure prints to console who has higher BMI
if (john.bmi > mike.bmi) {
    console.log(john.fistName + ' ' + john.lastName + ' has the higher BMI at ' + john.bmi);

} else if (mike.bmi > john.bmi) {
    console.log(mike.fistName + ' ' + mike.lastName + ' has the higher BMI at ' + mike.bmi);

} else {
    console.log ('both ' + mike.fistName + ' and ' + john.fistName + ' had the same BMI');
}

// print objects
console.log(john);
console.log(mike);