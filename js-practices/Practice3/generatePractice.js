'use strict'
function ranForArray(){
  return (Math.floor(Math.random()*20000))-10000;
}


function ranForLitte(){
  return Math.floor(Math.random()*1000);
}

function sort(input){
  var temp=0;
  for(var i=0;i<input.length;i++){
    for(var j=i+1;j<input.length;j++){
      if(input[i]>input[j]){
        temp=input[i];
        input[i]=input[j];
        input[j]=temp;  
      }
    }
  }
  return input;
}


function generate(testLengthArray){
  var a=[];
  var input=[];
  var target;
  var output;
  a.length = testLengthArray.length
  for(let i = 0;i<a.length;i++){
    a[i]=ranForLitte();
    input.length =a[i];
    for(let i=0;i<input.length;i++){
      input[i]=ranForArray();
      sort(input);

    }
    
   
  }
      


  return Array.from({length : testLengthArray.length})
  .map(item => ({
    input: Array.from({length: item}).map(item => []),
    target: 0,
    output: -1
  })
); // Remove this line and change to your own algorithm
}
module.exports = generate
