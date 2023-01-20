module.exports = function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log([...matrix[i]]);
    console.log("\n");
  }
};
