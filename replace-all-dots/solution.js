var replaceDots = function(str) {
// you need to escape the special characters and then use the g to replace all instances of the "."
  return str.replace(/\./g, '-');
};