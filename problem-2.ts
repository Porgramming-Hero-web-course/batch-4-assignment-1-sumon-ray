function removeDuplicates(arr: number[]): number[] {
  return [...new Set(arr)];
}

let result1 = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
console.log(result1);
