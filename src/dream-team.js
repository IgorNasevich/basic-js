const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = "";
  if(!Array.isArray(members)){
    return false;
  }
  let arr = [];
  let counter = 0;
  for(let i = 0; i < members.length; i++){
    if(typeof members[i] !== "string"){
      continue;
    }
    arr[counter] = members[i].trim().toUpperCase().slice(0,1); 
    counter++;
  }
  arr.sort();
  for(let i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}



createDreamTeam([
  'Amelia',
  null,
  undefined,
  'Ruby',
  'Lily',
  11,
  'Grace',
  22,
  'Millie',
  'Daisy',
  true,
  'Freya',
  false,
  'Erin',
  new Set([1, 2, 3, 4, 5]),
  'Megan',
  {
    'John': 'Smith'
  },
  'Jasmine',
  1,
  2,
  3,
  4,
  5,
  'Brooke',
]);

module.exports = {
  createDreamTeam
};
