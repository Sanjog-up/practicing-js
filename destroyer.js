function destroyer(arr, args){

    return arr.filter(el=> !args.includes(el))

}

console.log(destroyer([2,3,4,5],[2,3,4,6,8]));

function destroyers(arr, ...args){
const flatArgs = args.flat();
    return arr.filter(el=> !flatArgs.includes(el))

}

console.log(destroyers([1,9,2,3,4,5],[2,3,4,6,8],[2,3,5,7]));
