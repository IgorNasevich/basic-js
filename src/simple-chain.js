const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(value === undefined){
      value = '';
    }
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    
    if(typeof position === "string" || position-1 < 0 || position-1 >= this.arr.length){
      throw new Error("You can't remove incorrect link!");
    }
    position--;
    this.arr.splice(position,position);
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    return '( ' + this.arr.join(" )~~( ") +" )";
  }
};

//console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain());
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0);
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd');
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2);
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4);

module.exports = {
  chainMaker
};
