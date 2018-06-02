$(document).ready(function() {

    var firstNum = '';
    var secondNum = '';
    var operator = '';
    var result = '';
  
    //reset calculator function
    function reset(){
      firstNum = '';
      secondNum = '';
      operator = '';
      result = '';
  
      $('#first-number, #second-number, #operator, #result').empty();
    }
  
    //click function that will give the first number its value, 
    //and then give the second number its value
    $('.number').on('click', function(){
      if(firstNum === '') {
        firstNum += $(this).val();
        $("#first-number").text(firstNum);
      } else {
        secondNum += $(this).val();
        $("#second-number").text(secondNum);
      }
    })
  
    //click function that displays operator on screen in between the first and second number
    $('.operator').on('click', function(){
      if(firstNum !== ''){
        operator = $(this).val();
        $('#operator').text($(this).text());
      }
    })
  
    //click function that equals/computes the result, and displays it 
    $('.equal').on('click', function(){
     if(operator === "plus"){
       result = parseInt(firstNum) + parseInt(secondNum);
     } else if(operator === "minus"){
       result = firstNum - secondNum;
     } else if(operator === "times"){
       result = firstNum * secondNum;
     } else if(operator === "divide"){
       result = firstNum / secondNum;
     } else if(operator === "power"){
       result = Math.pow(firstNum, secondNum);
     }
     $("#result").text(result);
    })
  
    $(".clear").on('click', function(){
      reset();
    })
  
    reset();
  
  });