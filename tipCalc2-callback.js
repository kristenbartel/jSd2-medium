// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
function tipAmount (billAmount, quality) {
    if (quality === 'good') {
       return billAmount * .20;
    } else if (quality === 'fair') {
        return billAmount * .15;
    } else if (quality === 'bad') {
        return billAmount * .10
    } else 
    return 'Must enter quality of service good bad or fair.'
}

// console.log(tipAmount(100, 'lkajnsflbvkrn'));


function totalAmount (billAmount, operator) {
return billAmount + operator; 
}
setTimeout
console.log(totalAmount(100, tipAmount(100, "good")));

 
// let calc = function(num4, num5, operation) {
//     return operation(num4, num5)
// }