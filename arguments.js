// array like object
function sum(a, b){
  const args = [...arguments];
  // console.log(args);
  const result = a + b ;
  return result;
}
// console.log(arguments);
const total = sum(45, 89, 12);
// console.log(total);
console.log(sum.length);