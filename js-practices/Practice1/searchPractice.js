'use strict'

function search(input, target) {
  var index=-1;
  for(let i=0;i<input.length;i++){
      if(input[i]==target){
        index = i;
        return index;
      }
  }
  return index;
  //return input.indexOf(target);  // Remove this line and change to your own algorithm
}

module.exports = search
