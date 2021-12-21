// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

//define function printBanner 
//define banner as a string
//banner string need to be concat start and finish with '-'
//find length of bannerString
//print = number of '-' as length of string 
//
//in funct printBanner-- return bannerTopBot with new line, then return bannerTopBot with no new line.


function printBanner (aString) {
    aString = bannerTopBot(aString) +'\n' + bannerText(aString) + bannerTopBot(aString);
    return aString;
}
console.log(printBanner('hello my name is kristen'));

function bannerTopBot (inputString, newLine) {
    banner = ''
    for (let i = 0; i < inputString.length + 2; i++) {
            banner = banner + '-';
    }
    // banner = banner + '\n'
    return banner;
}

// console.log(bannerTopBot('hello'));

function bannerText (inputString) {
    let bannerString = '';
    bannerString = '-' + inputString + '-' + '\n';
    return bannerString
}
//console.log(bannerText('hello'));





// const dash = "-" 


// printBanner('hello');

// function printBanner (banner) {
//     for  (let i = 0; i < banner.length; i++) {
//         // console.log("-");
//         return '-';
//     }
   
//     for  (let i = 0; i < 3; i++) {
        
//     }
//     for  (let i = 0; i < 3; i++) {
        
//     }
// }
// printBanner("hello")