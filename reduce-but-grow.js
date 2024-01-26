const arr = [1, 2, 3, 4];
function grow(x) {
  let temp = x[0];
  for (let i = 1; i < x.length; i++) {
    temp = +temp * x[i];
    console.log(temp);
  }
  return temp;
}
