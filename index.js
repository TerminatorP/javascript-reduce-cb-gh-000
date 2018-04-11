function reduce(arr, callback, initialValue) {
  let acc = initialValue;
  collection.forEach((cur, i) => {
    result = callback(acc, cur, i, arr);
  });
  return result;
}
