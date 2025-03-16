"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b,2) - 4*a*c;
  if (D>0) {
      let res1 = (-b + Math.sqrt(D))/(2*a);
      arr.push(res1);
      let res2 = (-b - Math.sqrt(D))/(2*a);
      arr.push(res2);
      }
  else if (D === 0) {
    let res = -b/(2*a);
    arr.push(res);
    }
  return arr;
}

function checkIfInteger(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      arr[i] = parseInt(arr[i], 10);
    }
    if (!Number.isInteger(arr[i])) {
      arr[i] = Math.floor(arr[i]);
    }
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let arr = checkIfInteger([percent, contribution, amount, countMonths]);
  percent = arr[0]/(100*12);
  contribution = arr[1];
  amount = arr[2];
  countMonths = arr[3];
  let creditBody = amount - contribution;
  // Платёж = S * (P + (P / (((1 + P)^n) - 1)))
  let monthlyPayment = creditBody * (percent + (percent / (Math.pow((1 + percent), countMonths) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return parseFloat(totalAmount.toFixed(2));
}