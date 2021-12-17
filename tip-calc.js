
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


