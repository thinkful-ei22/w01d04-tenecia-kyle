'use strict';
const fizzBuzz = function(num) {

    
  if (num % 15 === 0) {
      
    return 'fizzbuzz';
  } 
  if (num % 5 === 0) {
      
    return 'buzz';
  }
  if (num % 3 === 0){
      
    return 'fizz';
  }
    
  return num;

};

//console.log(fizzBuzz(3));

//result in browser

const fizzResults = function (x) {

  let fizzClass = '';
  if(typeof x === 'string'){
    fizzClass = x;
  }

  return `<div class='fizz-buzz-item ${fizzClass}'><span>${x}</span></div>`;
};

//fizzBuzz Button event

const subButton = function(){
  $('#number-chooser').on('submit', event => {
    event.preventDefault();


    const playerInput = $('#number-choice').val();

    //fizzBuzz Value Input
    $('#number-choice').val('');

    const fizzElements = [];
    for (let i = 1; i<= playerInput; i++){

      fizzElements.push(fizzBuzz(i));
    }
    
    const html = fizzElements.map(item => fizzResults(item));
    $('.js-results').empty().append(html);

    // console.log(fizzElements);
  });

};
function main(){
  subButton();
}
$(main);