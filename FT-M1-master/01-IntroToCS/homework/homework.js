"use strict";

function BinarioADecimal(String) {
  let numResult = 0;
  var pos = String.length - 1;
  console.log(String.length);
  for (let i = 0; i < String.length; i++) {
    numResult = numResult + String[i] * 2 ** pos;
    pos--;
  }
  return numResult;
}
console.log(BinarioADecimal("111")); // 7

function DecimalABinario(num) {}

console.log(DecimalABinario(12)); //1100
module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
