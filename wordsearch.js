const transpose = function (matrix) {
    let newMatrix = [];
  
    for (let i = 0; i < matrix[0].length; i++){
      let newRow = [];
      for (let j = 0; j < matrix.length; j++){
        newRow.push(matrix[j][i]);
        // column 1 row 1   becomes   row 1 column 1
        // column 1 row 2   becomes   row 1 column 2
        // column 1 row 3   becomes   row 1 column 3
      }
      newMatrix.push(newRow);
    }
    return newMatrix;
  };



const wordSearch = (letters, word) => { 
    if (!letters.length) {
        return false;
      }
    
      if (word.length < 3) {
        return false;
      }

    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }  
    }

    let verticleLetters = transpose(letters);
   
    const verticalJoin = verticleLetters.map(ls => ls.join(''));
    for (k of verticalJoin) {
        console.log(k)
        if (k.includes(word)) {
            return true;
        }
    }
    
    return false;
};

console.log(wordSearch([], 'SEIGNFELD'));


module.exports = wordSearch;