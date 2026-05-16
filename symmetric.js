function diffArray(arr1, arr2){
  let result = [
    ...arr1.filter(item => !arr2.includes(item)),
    ...arr2.filter(item => !arr1.includes(item))
  ]
  return result;
}
console.log(diffArray([1, 3, 2],[5,9,1, 2]));