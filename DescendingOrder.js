const arr = [1, 2, 3, 4];
const arrSort = arr.sort().reverse();

function descendingOrder(n) {
  const a = n.toString().split("");
  const resultArray = a.sort().reverse();
  const result = parseInt(resultArray.join(""), 10);
  return result;
}

console.log(descendingOrder(123456789));
