/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  #result=0;
  constructor(number=0) {
    this.result=number;
  }

  add(number) {
     this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if(!number) {
      throw new Error();
    }
    
    this.result /= number;
  }

  clear() {
    this.result=0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // let isValid=true;
    // let cntBalanceParenthesis=0;

    // for(let i=0 ; i<expression.length ; ++i) {
    //   if(expression[i]>='0' || expression[i]<='9') {
    //     continue;
    //   }
    //   else {
    //     switch(expression[i]) {
    //       case '+' : 
    //         break;
    //       case '-' :
    //         break;
    //       case '*' : 
    //         break;
    //       case '/' :
    //         break;
    //       case ' ' :
    //         break;
    //       case '(' : cntBalanceParenthesis++;
    //         break;
    //       case ')' : cntBalanceParenthesis--;
    //         break;
    //       default : isValid=false;
    //         break;
    //     }
    //   }
    //   if(!isValid) break;
    // }

    // if(!isValid || cntBalanceParenthesis) {
    //   throw new Error();
    // }

    let validExpression = /[\d+,+,-,/,*,(,),\s]/;

    if(!validExpression.test(expression)) {
      throw new Error();
    }

    let cleanedExpression=expression.replace(/\s/g,'');

    let expressionResult=eval(cleanedExpression);
    if(expressionResult==Infinity) {
      throw new Error();
    }
    this.result=expressionResult;
  }

};

module.exports = Calculator;
