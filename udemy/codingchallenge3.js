// Functions and Arrays
// bills:  $124 $48 $268

/* 
Start will array of bills and loop
function tip calculator

Rules:
20 % on bills < $49
15 % on bills >= $50 && < $200
10 % on bills >= $200
return tip to tip array
retun bill to bill + tip array

*/


var tipArray = [], totalArray = [], billArray = [], tipAmt, totalBill;

function tipCalc(preTip) {
    //preTip does not need to be declared as it is part of function def
    //local variable tip
    //round to two decimals using 'Math.round' method
    var tip;
    if (preTip < 50) {
        tip = preTip * 0.20;
        return tipRound = (Math.round(tip * 100) / 100);
    } else if (preTip >= 50 && preTip < 200) {
        tip = preTip * 0.15;
        return tipRound = (Math.round(tip * 100) / 100);
    } else {
        tip = preTip * 0.10;
        return tipRound = (Math.round(tip * 100) / 100);
    }
}


//Caculate tips based on bills in array
billArray = [124, 48, 268];
for (i in billArray) {
    //call function to calculate tip
    tipAmt = tipCalc(billArray[i]);
    //calc total bill including tip
    totalBill = billArray[i] + tipAmt;
    //create arrays by appending to the end of arrays using 'length' method of array
    tipArray[tipArray.length] = tipAmt;
    totalArray[totalArray.length] = totalBill;
}

console.log(tipArray);
console.log(totalArray);