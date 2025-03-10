// Add your functions here
function map(src, callback){
  let ar = []
  for (const i of src ){
    ar.push(callback(i))
  }
  return ar
}

function reduce(src, callback, startingValue) {
  let total;
  if (startingValue) {
    total = startingValue;
    for (let i = 0; i < src.length; i++) {
      total = callback(src[i], total);
    }
    return total;
  } else {
    total = src[0];
    for (let i = 1; i < src.length; i++) {
      total = callback(src[i], total);
    }
    return total;
  }
}