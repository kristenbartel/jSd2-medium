// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.
let alpha = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " "];    
function getRotatedIndexOfString (string, alphaArr) {
    let tempArr = [];
    for (i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            tempArr.push(26);
            // continue; control flow keyword-- controls the flow of  a for loop
        }
        if (string[i] === 'a') {
            tempArr.push(25);
            // continue; control flow keyword-- controls the flow of  a for loop
        } if (string[i] != 'a' && string[i] != ' ') {
            tempArr.push(alphaArr.indexOf(string[i])-1)
        }
    }
        return tempArr; //=> [6, 3, 10, 10, 13]
}

function getCharValuesOfIndex (alphaArr, rotatedIndexes) {
    let rotatedCharsArr = [];
    for (i = 0; i < rotatedIndexes.length; i++) {
        //first get the char value
        let rotatedIndex = rotatedIndexes[i];
        let rotatedChar = alphaArr[rotatedIndex];
        //then push the char value
        rotatedCharsArr.push(rotatedChar);
    }
    return rotatedCharsArr;
}
// console.log(getCharValuesOfIndex(alpha, [6, 3, 10, 10, 13]))
function assembleString (string, alphaArr) {
    let assembledString = '';
    let rotatedIndicesOfString = getRotatedIndexOfString(string, alphaArr);
    let charValuesOfIndex = getCharValuesOfIndex(alphaArr, rotatedIndicesOfString); //this uses the previous as a parameter-- getting the getting the rotatedIndexOfString into the getCharValuesOfIndex function
    for (i = 0; i < charValuesOfIndex.length; i++) {
        assembledString = assembledString + charValuesOfIndex[i];
    }
    return assembledString;
}
console.log(assembleString('hello ', alpha));


