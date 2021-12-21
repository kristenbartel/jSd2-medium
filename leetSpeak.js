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

//need new string 
//need old string
//if x is true then add the new char to new string
//need to run over the string 
//the only way to anything in to scope is through a parameter.
//the only way to get anything out is through return

             function leetSpeak (aString) {
                let leetString = aString;
                for (i = 0; i < aString.length; i++) {
                        leetString = leetString.replace('A', leetText.A);
                        leetString = leetString.replace('E', leetText.E);
                        leetString = leetString.replace('I', leetText.I);
                        leetString = leetString.replace('G', leetText.G);
                        leetString = leetString.replace('O', leetText.O);
             }
             return leetString;
            }
             console.log(leetSpeak('AEIGO'));



// other attempts
//         function convertor (string) {
//                  return string.split('').map(i => leetText[i] || i).join('');
//              }
//             console.log(convertor("EAGLE"));

     

