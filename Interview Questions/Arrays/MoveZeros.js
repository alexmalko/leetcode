function move(nums) {
  let index = 0,
    temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
      index++;
    }
  }
  return nums;
}

console.log(move([0, 1, 0, 3, 12]));
