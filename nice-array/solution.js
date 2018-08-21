function isNice (arr){
  if (arr.length === 0) {
    return false;
  }
  
  let counter = 0;

  for (let i = 0; i < arr.length; i ++) {
   
    if (arr.includes(arr[i]-1) || arr.includes(arr[i]+1)) {
      counter ++;
    }
    else {
      return false;
    };
    if (counter === arr.length) {
      return true;
    };
  };
};