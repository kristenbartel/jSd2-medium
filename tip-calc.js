
// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

// good -> 20% fair -> 15% bad -> 10%

function tipAmount(billAmount, quality) {
    if(quality === "good") {
        return billAmount * .20;
    }
    else if(quality === "fair") {
        return billAmount * .15;
    }
    else if (quality === "bad") {
       return billAmount * .10;
    }
    else {
        return "error";
    }
}
console.log(tipAmount(100, "good"));


