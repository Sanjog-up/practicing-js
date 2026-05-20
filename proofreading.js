function isPalindrome(word){
  let lower = word.toLowerCase();
  let revword = lower.split("").reverse(word).join("")
    return lower === revword;
}
function findPalindromeBreaks(words){
  if(words.length === 0) return [];

  let result = [];
  for(let i = 0; i< words.length;i++){
    if(!isPalindrome(words[i])){
    result.push(i);
    }
  } return result;
};

function findRepeatedPhrases(words, phraseLength){
  if(phraseLength>= words.length)return [];

  const phraseMap = {};
  for(let i=0; i<words.length - phraseLength;i++){
    const phrase = words.slice(i, i+ phraseLength).join("");
    if(!phraseMap[phrase]){
      phraseMap[phrase]= []
    } phraseMap[phrase].push(i);
  }
  const result = [];
  for(const phrase in phraseMap){
    if(phraseMap[phrase]> 1){
      result.push(...phraseMap[phrase]);
    }
  } return result.sort((a,b)=> a -b)
}

function analyzeTexts(texts, phraseLength){
  if(texts.length = []) return [];

let result = [];
for(let i = 0; i< texts.length; i++){
  let obj = {
    repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
    palindromeBreaks: findPalindromeBreaks(texts[i])
  };
  result.push(obj);
} return result;
}

console.log(findPalindromeBreaks(["racecar","police","racecar","night"],2))