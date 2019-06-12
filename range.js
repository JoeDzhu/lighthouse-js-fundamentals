let range = function(start, end, step){
  let array = [];
  if(start !== undefined && end !== undefined && step !== undefined && end > start && step > 0){
    for (let i = start; i <= end; i += step){
      array.push(i);
    }
  } else {
    array = [];
  }
  return array;
};
console.log(range(0, 10, 2));