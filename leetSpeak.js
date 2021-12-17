// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

const leetText = {
    A : 4, 
    E : 3, 
    G : 6, 
    I : 1, 
    O : 0, 
    S : 5, 
    T : 7
}
    



    // function leetSpeak (aString) {
    //     for (let i = 0; i <= aString.length; i++) {
    //     if (aString) {
    //         console.log(aString.replace('I', 1));
    //     }  
    //     }
    // }

    // leetSpeak("Index");

// function leetSpeak (aString) {
//     for (let i = 0; i <= aString.length; i++) {
//        console.log(aString.replace('I', 1));
//     }
// }

// leetSpeak("Index");

function leetSpeak (aString) {
    console.log(aString.replace('A', leetText.A));
    console.log(aString.replace('E', leetText.E));
    console.log(aString.replace('G', leetText.G));
    console.log(aString.replace('I', leetText.I));
    console.log(aString.replace('O', leetText.O));
    console.log(aString.replace('S', leetText.S));
    console.log(aString.replace('T', leetText.T));
}

leetSpeak("AEGOIST");