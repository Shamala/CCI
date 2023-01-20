// [
//    [1 2 3]
//    [1 0 3]
//    [1 2 3]
// ]
// result:
// [
//    [1 0 3]
//    [0 0 0]
//    [1 0 3]
// ]
import printMatrix from "@shamala/helpercci/printMatrix.js";
const zeroMatrix = (matrix) => {
  console.log(`Initial Matrix`);
  printMatrix(matrix);
  if (!matrix.length) return matrix;
  if (matrix.every((row) => row.every((ele) => ele === 0))) return matrix;

  let rowIndex = [];
  let colIndex = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) {
        if (rowIndex.indexOf(i) < 0) rowIndex.push(i);
        if (colIndex.indexOf(j) < 0) colIndex.push(j);
      }
    }
  }

  for (let index of rowIndex) {
    for (let j = 0; j < matrix[index].length; j++) {
      matrix[index][j] = 0;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let index of colIndex) {
      matrix[i][index] = 0;
    }
  }
  console.log(`Updated Matrix`);
  printMatrix(matrix);
};

zeroMatrix([
  [1, 2, 3],
  [1, 0, 3],
  [1, 2, 3],
]);
