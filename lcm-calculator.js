function smallestCommons(arr){
const [min, max] = [...arr].sort((a,b) => a -b);

const range = [];
for(let i = min; i<= max; i++){
  range.push(i);
};

const gcd = (a, b) => (b === 0 ? a: gcd(b, a%b));
const lcm = (a, b) => (a*b)/gcd(a, b);

  return range.reduce(lcm);
}

console.log(smallestCommons([3,7]));