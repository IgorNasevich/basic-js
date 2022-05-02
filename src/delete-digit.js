const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let arr = [];
  // let min = str[0];

  // for(i = 0; i < str.length; i++){
  //   if(str[i] <= min){
  //     min = str[i];
  //   }
  // }

  // for(i = 0; i < str.length; i++){
  //   if(str[i] === min){
  //     index = i;
  //     break
  //   }
  // }
  for(i = 0; i < str.length; i++){
    arr[i] = str.substring(0,i) + str.substring(i+1,str.length);
  }
  console.log(Math.max.apply(null, arr));
  return Math.max.apply(null, arr);
  // console.log(arr)
  // return Number.parseInt(str.substring(0,index) + str.substring(index+1,str.length));
}



module.exports = {
  deleteDigit
};
