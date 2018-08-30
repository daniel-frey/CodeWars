function mutateMyStrings(stringOne, stringTwo){
  let stringOneArray = stringOne.split('');
  let stringTwoArray = stringTwo.split('');
  let mutatedString = [];
  mutatedString = [stringOneArray.join('')];

  for (let i = 0; i < stringOneArray.length; i++) {
    if (stringOneArray[i] !== stringTwoArray[i]) {
      stringOneArray[i] = stringTwoArray[i];
      mutatedString.push(stringOneArray.join(''));
    };
  };
  return mutatedString.join('\n') + '\n';
};

// make string one and two into arrays
// replace index [0] of array one with index [0] of array two
// return this
// replace all indexes of array one with indexes of array two
// return each mutated string using .join with a \n

