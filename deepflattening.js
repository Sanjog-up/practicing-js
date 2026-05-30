function steamrollArray(arr){
  return arr.reduce((flat, item)=> {
    if(Array.isArray(item)){
    return [...flat, ...steamrollArray(item)];
  }
   return [...flat, item];
  },[] 
  );
}

console.log(steamrollArray([1, [2], [],[3, [[4]]]]));