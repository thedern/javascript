// coding challenge 5 - Advanced Tip Calculator using Objects, Loops, and Control Structures
// using 'this.<object for self-reference'

// Create object containing functions to calculate tip and calculate average tip
var money = {
    //array to be populated by entering in pre-tip bills
    bills : [],
    //array to be populated by tipCalc function
    tips  : [],
    //array to be populated by tipCalc function
    totalB : [],
    tipCalc : function() {
        var tipAmt, i;
        for (i in this.bills) {
            if (this.bills[i] < 50) {
                //get tip rounded to two decimal places
                tipAmt = Math.round((this.bills[i] * .2) * 100) / 100;
                //append the sum of tip and bills[i] to totalB
                this.totalB.push(this.bills[i] + tipAmt);
                //append the tipAmt to tips
                this.tips.push(tipAmt);

            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                //get tip rounded to two decimal places
                tipAmt = Math.round((this.bills[i] * .15) * 100) / 100;
                //append the sum of tip and bills[i] to totalB
                this.totalB.push(this.bills[i] + tipAmt);
                //append the tipAmt to tips
                this.tips.push(tipAmt);

            } else {
                //get tip rounded to two decimal places
                tipAmt = Math.round((this.bills[i] * .1) * 100) / 100;
                //append the sum of tip and bills[i] to totalB
                this.totalB.push(this.bills[i] + tipAmt);
                //append the tipAmt to tips
                this.tips.push(tipAmt);
            }
        }
    },
    //calculate average tip
    calcAve : function() {
        var sum = 0, i;
        var tipAverage = 0;
        for (i in this.tips) {
            sum += this.tips[i];
        }
        //find average tip rounded to two decimal points and return
        tipAverage = Math.round((sum / this.tips.length) * 100) / 100;
        return tipAverage;
    }

   
};

// bills, pre-tip
var preTip = [174, 48, 268, 180, 42];

// populate the bills array with data
money.bills = preTip;

// calculate tips based on preTip $ amounts
money.tipCalc();
var average = money.calcAve();
console.log(average);
console.log(money);
