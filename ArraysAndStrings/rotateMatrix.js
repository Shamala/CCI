// Matrix:        1  2  3
//                4  5  6
//                7  8  9

// Output:        7  4  1
//                8  5  2
//                9  6  3

// Input:
// Matrix:        1  2  3  4
//                5  6  7  8
//                9 10 11 12
//               13 14 15 16

// Output:         13  9   5  1
//                 14  10  6  2
//                 15  11  7  3
//                 16  12  8  4
//in place i.e. use no extra space
import printMatrix from "@shamala/helpercci/printMatrix.js";
const rotateMatrix = (matrix) => {
  console.log(`Initial Matrix`);
  printMatrix(matrix);
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return [];
  for (let layer = 0; layer < matrix.length / 2; layer++) {
    let first = layer;
    let last = matrix.length - layer - 1;
    console.log(`Layer : ${layer}`);
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = matrix[first][i];
      //left -> top
      matrix[first][i] = matrix[last - offset][i];
      //bottom->left
      matrix[last - offset][i] = matrix[last][last - offset];
      //right-> bottom
      matrix[last][last - offset] = matrix[i][last];
      //top-> right
      matrix[i][last] = top;
      printMatrix(matrix);
    }
  }
  console.log(`Rotated Matrix: `);
  printMatrix(matrix);
  return true;
};

console.log(
  `rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]): ${rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])}`
);
