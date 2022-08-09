// let findArray = result=>toString.call(result) === "[object Array]" 
// console.log(findArray("dgsedtgwest"));
// console.log(findArray([1,2,3,4]));


//  const array = function (result ) {
//     return toString.call(result) === "[object Array]" 
// }
// const a = [1,2,3,[4,5,6],7];
// a.splice(2, 1, 10,20);
// console.log(a);


// const shallow =[1, 2, 4, 0];

// var array_Clone = function(a) {
//    return a.slice(0,3);
//   //  return a;
//        };
//   const newarray = array_Clone(shallow);
//   newarray.push(3);
//    console.log(newarray ,shallow);

//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
// const first = function(array, n) {
//     if (array==null)
//     return void 0;
//     if (n==null)
//     return array[0];
//     if (n < 0)
//     return [];
//     return array.slice(0, n);
// };
// const result = first([1,2,3,4,5,6,7],3);
// console.log(result);
// console.log(first([1,2,3,4,5,6,7],3));
// console.log(first([1,2,3,4,5,6,7],-2));
// console.log(first([],2));
// console.log(first([1,2,3,4,5,6,7],8));

const last = function(array, n){
    if (array == null)
    return void 0;
    if (n == null)
    return array[array.length -1];
    return array.slice(Math.max(array.length - n, 0)); 
};
const result = last([2,4,3,5,6,8],2);
console.log(result);
