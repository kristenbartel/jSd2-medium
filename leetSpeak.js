// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:


    

leetString = ''

    function leetSpeak (aString) {
        const leetText = {
            A : 4, 
            E : 3, 
            G : 6, 
            I : 1, 
            O : 0, 
            S : 5, 
            T : 7
        }
        for (let i = 0; i <= aString.length; i++) {
       
        }  
        }
    

    // leetSpeak("Index");

// function leetSpeak (aString) {
//     for (let i = 0; i <= aString.length; i++) {
//        console.log(aString.replace('I', 1));
//     }
// }

// leetSpeak("Index");
const leetText = {
    A : 4, 
    E : 3, 
    G : 6, 
    I : 1, 
    O : 0, 
    S : 5, 
    T : 7
}

        // `function leetSpeak (aString) {
        //     if (aString.includes("A")) {
        //      return aString.replace('A', leetText.A); 
        //     //  } else if (aString.includes("E")) {
        //     //     return aString.replace('E', leetText.E);
        //     //  }
            
        //      }}`
            
//     console.log(aString.replace('G', leetText.G));
//     console.log(aString.replace('I', leetText.I));
//     console.log(aString.replace('O', leetText.O));
//     console.log(aString.replace('S', leetText.S));
//     console.log(aString.replace('T', leetText.T));
// }

    //  console.log(leetSpeak("AEGOIST"));

function leetSpeak2 (aString) {
    const leetText = {
        A : 4, 
        E : 3, 
        G : 6, 
        I : 1, 
        O : 0, 
        S : 5, 
        T : 7
    }
    for (E in leetText) {
        return aString.replace('E', leetText.E);
    }
    for (A in leetText) {
        return aString.replace('A', leetText.A);
    }
}

console.log(leetSpeak2("AEGOIST"));