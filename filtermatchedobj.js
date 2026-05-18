//! filter obj
 function whatIsInAName(arr, src){
  const sourceKeys = Object.keys(src);
  return arr.filter(obj =>
    sourceKeys.every(key=>
      obj.hasOwnProperty(key) && obj[key] === src[key]
    )
  )
}

//! reduce obj 
function whatIsInObj(array, source){
  const sourceKeys = Object.keys(source);
  return array.reduce((acc, obj )=> {
  if(sourceKeys.every(key => obj[key] === source[key])){
    acc.push(obj);
  } return acc;
  },[]);
}
console.log(whatIsInAName([{a:2},{b:4},{c:5}],{c:5}))
console.log(whatIsInObj([{a:2},{b:4},{c:5}],{c:5}))