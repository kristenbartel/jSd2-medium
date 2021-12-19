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

             function convertor (string) {

                 return string.split('').map(i => leetText[i] || i) .join('');
             }
             
     console.log(convertor("EAGLE"));

    //  other attempts

             // function leetSpeak (aString) {
        //     for (aString.includes("A")) {
        //         console.log(aString.replace('A', leetText.A));
        //      }
        //      for (aString.includes("E")) {
        //         console.log(aString.replace('E', leetText.E));
        //      }
            
        //      }

