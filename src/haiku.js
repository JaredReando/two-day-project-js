export class Haiku {

  constructor(lineOne, lineTwo, lineThree) {
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
  }

  checkLines() {
    let sample = this.lineOne;
    return sample;
  }

  checkLength(haikuArray) {
    if (haikuArray.length != 3) {
      return "Haiku length invalid"
    }
  }

  newFromString(userString) {
    let haikuArray = userString.split(/\r?\n/);
    console.log(haikuArray);
    return haikuArray;
  }

  vowelCount(string, returnType) {
    const vowels = ['a','e','i','o','u','y'];
    const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
    const dipthongs = ['oi', 'oy', 'ou', 'ow', 'au', 'aw', 'oo'];

    let counterVowels = 0;
    let counterConsonants = 0;

    string.split('').forEach(function(char) {
      if (vowels.includes(char)) {
        counterVowels += 1;
      } else if (consonants.includes(char)) {
        counterConsonants += 1;
      }
    })
    let charTypes = [counterVowels, counterConsonants];

    if (returnType.toLowerCase() == 'v') {
      return charTypes[0];
    } else if (returnType.toLowerCase() == 'c') {
      return charTypes[1];
    }
    return "Invalid returnType. Must use 'v/c' second argurment in function call."
  }

}



//
// export function viable(arrayOfNine) {
//   const cleanedArray = arrayOfNine.filter(input => ((typeof(input)=='number' && input>0 && !input.isNaN) || (typeof(input)=='string' && input.length>0)));
//   const inputLength = arrayOfNine.length;
//   const checkLength = [...new Set(cleanedArray)].length;
//   if (inputLength == checkLength) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// export function checkAllRows(sudokuBoard) {
//   var valid = true;
//   sudokuBoard.forEach(function(row) {
//     if(!viable(row)) {
//       valid = false;
//     }
//   });
//   return valid;
// }
//
// export function checkAllColumns(sudokuBoard) {
//   // sudokuBoard.forEach(function(rowArray) {
//   // go through master array and build arrays representing columns
//   var singleCheck = true;
//   for (var columnIndex = 0; columnIndex < sudokuBoard[0].length; columnIndex++) {
//     var column = [];
//     var viability = true;
//     for (var rowIndex = 0; rowIndex < sudokuBoard.length; rowIndex++){// for each row, push the number in the given column
//       column.push(sudokuBoard[rowIndex][columnIndex]);
//     }
//     singleCheck = viable(column);
//     if(!singleCheck){
//       viability = false;
//     }
//   }
//   return viability;
//
// }
//
// export function checkAllBoxes(sudokuBoard) {
//   var valid = true;
//   var singleCheck = true;
//
//   for (var chunkRow = 0; chunkRow < 9; chunkRow+=3 ) {
//     var crate = [];
//     for (var chunkColumn = 0; chunkColumn < 9; chunkColumn+=3) {
//       var box = []
//       var chunkSlice = sudokuBoard[chunkRow].slice(chunkColumn,chunkColumn+3);
//       box = box.concat(chunkSlice);
//       chunkSlice = sudokuBoard[chunkRow+1].slice(chunkColumn,chunkColumn+3);
//       box = box.concat(chunkSlice);
//       chunkSlice = sudokuBoard[chunkRow+2].slice(chunkColumn,chunkColumn+3);
//       box = box.concat(chunkSlice);
//       crate.push(box);
//     }
//     crate.forEach(function(box) {
//       singleCheck = viable(box);
//       if(!singleCheck){
//         valid = false;
//       }
//     });
//   }
//
//   return valid;
// }
