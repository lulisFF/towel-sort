
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  const newArr = [];
  if(matrix===undefined) return []

  for (let i = 0; i < matrix.length; i++) {
    const arrRow = matrix[i].slice();

    if (i % 2) {
      arrRow.reverse();
    }

    newArr.push(...arrRow);
  }
  return(newArr)
}
