function filter_list(l) {
  let noStringsList = l.filter(x => typeof x === 'number');
  return noStringsList;
};