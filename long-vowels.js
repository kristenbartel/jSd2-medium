// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.

// write a function skeleton with a string parament 
//any long vowels add char to length of 5
//return



function longVowel (string) {
    for (i = 0; i < string.length; i++)
    if (string.includes('a')) {
        string = string.replace('a', 'aaaaa');
    }
    if (string.includes('e')) {
        string = string.replace('e', 'eeeee');
    }
    if (string.includes('i')) {
        string = string.replace('i', 'iiiii');
    }
    if (string.includes('o')) {
        string = string.replace('o', 'ooooo');
    }
    return string;
}
    


console.log(longVowel('soon'));