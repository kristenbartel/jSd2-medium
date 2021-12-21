// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.
// loop as many times as it's height 
// loop as many times as it's width
//first loop will make rows

// let w = ' - - - '
// let h = '|     |'

//making a string by opening an empty string 
//write a function that would push a value to the empty string for a given number of runs through a loop 
//tip- string are imutable -- can't change-- make a new string, throw away the old and use the new

function printBox(w, h) {
  let finalBox = '';
  finalBox = finalBox + createBoxWidth(w) + createBoxHeight(w, h) + createBoxWidth(w);
  return finalBox;
}

function createBoxWidth(w) {
     //solving for width 
     let boxTopBot = '';
     // must declare for a storage place
     for (i = 0; i < w; i++) {
         boxTopBot = boxTopBot + '-';
         //see tip
     }
     boxTopBot = boxTopBot + '\n';
     return boxTopBot;    
}

function createBoxHeight(w, h) {
    let boxRow = '';
    //first add a bar to a string
    for (i = 0; i < h; i++) {
     boxRow = boxRow + '|';
     //boxRow plus w
     //add last bar and /n to boxRow
     for (j = 0; j < w - 2; j++ ) {//for each unit of w add a space-- the -2 takes away the pipe 
         boxRow = boxRow + '.';
     }
     boxRow = boxRow + '|\n'; 
    }
 
 //    outer loop adds pipes
 //    inner loop adds spaces-- being sure to reduce the number of space by two to account for the pipes
 //    h is the number of times to loop
 //    w is the number of spaces it takes
    
    return boxRow;
}
      //next add number of space based on w to string
   //then add bar to string
   //return the line/string
   //if h is 4 then we need 3 \n chars
   console.log(printBox(4, 3));
    





//  - - -    = 7
// |     |   = 7
//  - - - 
