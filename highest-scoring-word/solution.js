function high(x){
  let splitString = x.split(' ');
 
  let sortTheArray = splitString.sort((a, b) => wordValue(b) - wordValue(a));
  return sortTheArray[0];
};
function wordValue(word){
  let scoreForWord = 0;
  for (let i in word) {
    scoreForWord += ((word.charCodeAt(i)) - 96);
  }
  return scoreForWord;
};