const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split("-");

  for(let i = 0; i < arr.length; i++){
    console.log(arr[i].slice(0,1).match(/[0123456789ABCDEF]/));
    if(!(arr[i].slice(0,1).match(/[0123456789ABCDEF]/) && arr[i].slice(1,2).match(/[0123456789ABCDEF]/))){
      return false;
    }
  }
  return true;
}

isMAC48Address('Z1-1B-63-84-45-E6');

module.exports = {
  isMAC48Address
};
