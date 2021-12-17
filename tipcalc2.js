
// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
const tip =
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
console.log(tip(100, "good"));

function totalAmount(billAmount) {
    return tip(100, "good") + billAmount;
}

console.log(totalAmount(100));