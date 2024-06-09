const contiguousSubarray = (arr, target) => {
  // 1. Initialization:
  let start = 0;
  let currentSum = 0;
  let found = false;

  // 2. Iterate over the elements of the array and Check for Target Sum
  arr.forEach((num, i) => {
    if (found) return;

    // 3. Updating currentSum For each element num in the array (with index i), we add num to currentSum.
    currentSum += num;

    while (currentSum > target && start <= i) {
      currentSum -= arr[start++];
    }

    // 4. If a subarray with the target sum was found during the iteration,
    // found will be true; otherwise, it will be false

    if (currentSum === target) {
      found = true;
    }
  });

  // 5. Once the forEach loop completes, we return the value of the found flag.

  return found;
};

// Eg:
const arr = [4, 7, 2, 1, 9, 5];
const target = 17;
console.log(contiguousSubarray(arr, target)); // Expected Output: true
