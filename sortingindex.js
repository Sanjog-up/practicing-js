function getIndexToIns(arr, num){
  arr.sort((a , b)=> a - b);
  const index = arr.findIndex(element => element >= num);
  if(index === -1)
  return arr.length;
  return index;

}
console.log(getIndexToIns([2,4,5], 3.1));