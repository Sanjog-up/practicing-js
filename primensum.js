function sumPrimes(num){
  if(num < 2) return 0;

  function isPrime(n){
    for(let i = 2; i<= Math.sqrt(n) ; i++){
      if(n % i === 0)
      return false;
    } return true;
  }
  return Array.from({length: num-1}, (_, i) => i + 2)
  .filter(isPrime)
  .reduce((sum, n) => sum + n, 0);
}

console.log(sumPrimes(5));