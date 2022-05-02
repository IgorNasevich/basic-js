const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(first, second) {
  
  let obj_one = {};
  let obj_two = {};
  let arrF = [];
  let arrS = [];
  let result = 0;

  for(let i = 0; i < first.length; i++){
    let isInArr = false;
    for(let j = 0; j < arrF.length; j++){
      if(arrF[j] === first[i]){
        isInArr = true;
      }
    }
    if(isInArr === false){
      arrF.push(first[i]);
    }
  }

  for(let i = 0; i < second.length; i++){
    let isInArr = false;
    for(let j = 0; j < arrS.length; j++){
      if(arrS[j] === second[i]){
        isInArr = true;
      }
    }
    if(isInArr === false){
      arrS.push(second[i]);
    }
  }

  for(let i = 0; i < arrF.length; i++){
    let counterFirst = 0;
    for(let k = 0 ; k < first.length ; k++){
      if(arrF[i] === first[k]){
        counterFirst ++;
      }
    }
    obj_one[arrF[i]] = counterFirst;
  }

  for(let i = 0; i < arrS.length; i++){
    let counterSecond = 0;
    for(let k = 0 ; k < second.length ; k++){
      if(arrS[i] === second[k]){
        counterSecond ++;
      }
    }
    obj_two[arrS[i]] = counterSecond;
  }  

  for(let i = 0; i < Object.keys(obj_one).length; i++){
    for(let j = 0; j < Object.keys(obj_two).length; j++){
      if(Object.keys(obj_one)[i] === Object.keys(obj_two)[j]){
        if(obj_one[Object.keys(obj_one)[i]] <= obj_two[Object.keys(obj_two)[j]]){
          result += obj_one[Object.keys(obj_one)[i]];
        }
        else{
          result += obj_two[Object.keys(obj_two)[j]];
        }
      }
    }
  }
  return result;
}


module.exports = {
  getCommonCharacterCount
};
