const tokenizer = (expression) => {
  let tokens = [];
  expression.split(' ').forEach((item) => {
    if (item.indexOf('!') === 0) tokens = [...tokens, ...[item.slice(0, 1), item.slice(1)]];
    else tokens.push(item);
  });
  return tokens;
};

const isOperand = (keyword) => {
  const operands = ['true', 'false'];
  return operands.indexOf(keyword) >= 0;
};

const isOperator = (keyword) => {
  const operators = ['!', '&', '|', '^'];
  return operators.indexOf(keyword) >= 0;
};

const operandEvaluator = (operand) => {
  switch (operand) {
    case 'true': return true;
    case 'false': return false;
    default: return operand;
  }
};

const evaluateStatement = (operand1, operator, operand2) => {
  switch (operator) {
    case '!': return !(operandEvaluator(operand1));
    case '&': return operandEvaluator(operand1) && operandEvaluator(operand2);
    case '|': return operandEvaluator(operand1) || operandEvaluator(operand2);
    case '^': return operandEvaluator(operand1) ? !operandEvaluator(operand2) : operandEvaluator(operand2);
    default: throw new Error('Unknown Operator!');
  }
};

function booleanExpressionEvaluator(expression) {
  if (typeof expression !== 'string' || !expression) {
    throw new TypeError(`Expexted string type instead got: ${typeof expression}`);
  }
  const tokens = tokenizer(expression);
  const recentlyEvaluated = [];
  tokens.forEach((keyword, idx) => {
    if (isOperator(keyword)) {
      if ((!recentlyEvaluated.length && keyword !== '!') || (isOperator(recentlyEvaluated[recentlyEvaluated.length - 1]) && keyword !== '!')) {
        throw new Error(`Invalid keyword : ${keyword} at pos ${idx}`);
      } else recentlyEvaluated.push(keyword);
    } else if (isOperand(keyword)) {
      if (recentlyEvaluated.length && isOperand(recentlyEvaluated[recentlyEvaluated.length - 1])) {
        throw new Error(`Invalid keyword : ${keyword} at pos ${idx}`);
      }
      if (recentlyEvaluated.length && isOperator(recentlyEvaluated[recentlyEvaluated.length - 1])) {
        const operator = recentlyEvaluated.pop();
        if (operator === '!') recentlyEvaluated.push(evaluateStatement(keyword, operator));
        else recentlyEvaluated.push(evaluateStatement(recentlyEvaluated.pop(), operator, keyword));
      } else recentlyEvaluated.push(keyword);
    } else throw new Error(`Invalid Keyword : ${keyword} at pos ${idx}`);
  });
  return recentlyEvaluated.pop();
}

export { booleanExpressionEvaluator };
