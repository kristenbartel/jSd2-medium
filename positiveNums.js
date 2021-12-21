// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

//need old array 
//need new array 
//functions that takes the old array 
//pull all positive numbers from old array and place inside new
//return the new array with only the positive numbers

// if parameter index location value of oldArr is great than 0 then push to newArr

let oldArr = [1, -3, 5, -3, 0];


function positivePuller (anArr) {
    let newArr = [];
    for (i = 0; i < anArr.length; i++) {
        if (anArr[i] > 0) {
            newArr.push(anArr[i]); //this pushed the index value of anArr into the newArr
        }
        }
        return newArr;
    }
        
    

console.log(positivePuller(oldArr));


// anArr.filter(anArr => anArr.length[i] < 0);