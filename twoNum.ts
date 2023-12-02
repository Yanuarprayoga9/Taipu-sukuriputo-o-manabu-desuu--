function twoSum(nums: number[], target: number) {
  // [2,7,11,15]
  // target = 9
  let arr: number[] = [];
  let result: number = 0;
  for (let i = 0; i < nums.length; i++) {
    // 2
    result = target - nums[i];
    // 6-2 = 4
    for (let j = 0; j < nums.length ; j++) {
      if (result - nums[j] == 0 && i != j) {
        arr.push(i, j);

        return arr;
        // console.log(i,j)
      }
    }
  }
  return arr;
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3,2,4], 6));
