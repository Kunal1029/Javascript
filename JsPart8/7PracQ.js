//Q- check if all numbers in our array are multiples of 10 or not.

let arr = [10, 20, 3];
let ks = arr.every((ten) => {
  return ten % 10 == 0;
});
console.log(ks);

//Q - Create a function to find min number in an array.
let arr1 = [12, 32, 4, 34, 1, -2];

function getMin(num) {
  let min = arr1.reduce((result, elem) => {
    if (result < elem) {
      return result;
    } else {
      return elem;
    }
  });
  return min;
}

console.log(getMin(arr1))
