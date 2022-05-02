const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  let arr1 = [];

  if(arr === []){
    return [];
  }

  if(!(arr instanceof Array)){
    throw new Error("'arr' parameter must be an instance of the Array!"); 
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === "--discard-prev" || arr[i] === "--discard-next"){
      
    }
    else if(arr[i] === "--double-next"){
      if(i+1<arr.length){
        arr1.push(arr[i+1]);
      }
    }
    else if(arr[i] === "--double-prev"){
      if(i - 1 > 0){
        if(i-2 < 0 || arr[i-2] !== "--discard-next"){
          arr1.push(arr[i-1]);
        }
      }
    }
    else{
      let discardPrev = i !== 0 && arr[i-1] === "--discard-next";
      let discardNext = i !== arr.length-1 && arr[i+1] === "--discard-prev";
      if(!discardPrev && !discardNext){
        arr1.push(arr[i]);
      }
    }
  }
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      arr.splice(i,i);
    }
  }

  console.log(arr1);
  return arr1;
}

transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]);

module.exports = {
  transform
};
