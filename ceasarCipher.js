// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.
// cipher('Genius without education is like silver in the mine')
// 'Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar'

// The action of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places down the alphabet. The cipher illustrated here uses a left shift of three, so that (for example) each occurrence of E in the plaintext becomes B in the ciphertext.


//need a oldString to input
//need to encode the oldString to a newString using cipher
    //create a cipher based of the alphabet
        //need the plain alphabet 
        // need a function that shifts the alpha -1 number indices
        // and also needs to be a fluid loop so that when 'a' is called it goes to index location 25/'z'
//need a loop over a oldString that will evaluate each index value "letter" and 
//then determine what to replace it with

//step 1: figure out to input string of a and return string of b

//function that takes a string and makes it an array
//return the new array

//function that 


let alpha = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// function splitter (string) {
//     newArr = string.split('');
//     return newArr;
// }
//     console.log(splitter("hello"));
    

function cipher(string, alphaArr) {
    let newArr = [];
        for (i = 0; i < string.length; i++) {
        newArr.push(alphaArr.indexOf(string[i])-1);
        //need to return value of index in alphaArr according to newArr index numbers
        //need to join values
        
        
        }
        
        // newArr = alphaArr.valueOf(newArr);
        // alphaArr.indexOf(newArr);
        // let newArr = alphaArr.indexOf(newArr);
        // newArr = newArr.valueOf(alphaArr[i]);
         
        return newArr;
}
console.log(cipher('hello', alpha));

// let newArr2 = alpha.map(cipher('hello', alpha));
// console.log(alpha.indexOf())
// function printArrElements(arr,) {
//     console.log(arr[arr1[i]]);
// }
// printArrElements(alpha, cipher());

