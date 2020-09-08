
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  let reverse = false;

  if(!matrix) return res;

  for(let i = 0; i < matrix.length; i++) {
    if(!reverse) {
      for(let j = 0; j < matrix[i].length; j++) {
        res.push(matrix[i][j]);
      }
    } else {
      for(let j = matrix[i].length - 1; j >= 0; j--) {
        res.push(matrix[i][j]);
      }
    }
    reverse = !reverse;
  }

  return res;
}
