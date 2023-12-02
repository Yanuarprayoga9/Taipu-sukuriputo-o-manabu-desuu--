const unsortedArray = [64, 25, 12, 22, 11];
function bubbleSort(arr:number[]) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}
const sortedArray = bubbleSort(unsortedArray);

console.log("Sorted array:", sortedArray);
