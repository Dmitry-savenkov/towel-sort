
// You should implement your task here.

module.exports = function towelSort (matrix)  {
let number = matrix.reduce((prev,item) => {
    return prev.concat(item);
},[]);
}
