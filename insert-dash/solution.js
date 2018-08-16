function insertDash(num) {
  // this will return a new string with a dash inserted between only odd numbers.
  // the first string is what you are looking for, the /g is a global.
  // the regex '$1-' inserts the dash between the even numbers.
  return String(num).replace(/([13579])(?=[13579])/g, '$1-');

}