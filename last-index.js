let lastIndexOf = function (array, value){
  let gotIt;
  let number;
  for (let i = array.length - 1; i >= 0; i--){
    if (array[i] === value){
      gotIt = true;
      number = i;
    }
  }
  if (gotIt) {
    return number;
  } else {
    return -1;
  }
}