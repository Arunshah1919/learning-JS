// const user = ["Arun" , 4 , "Admin"];
// let  [name , courseCount, role] = user;

// console.log(role);

// const user = {
//     name : "Arun",
//     courseCount : 5,
//     role : "Admin",
// }
// const {name, courseCount, role} = user;
// console.log(courseCount);

// function sumOne (a, b, ...args){
//     let multi = a*b;
//     let sum = 0;
//     for (const arg of args) {
//          sum += arg
//     }
//     return [multi,sum];
// }
// console.log(sumOne(2,4,4,3,2,4,5,5));

// function sumTwo(a,b,c){
//     return a+ b *c;
// }
// let myA = [10,5,2];
// console.log(sumTwo(...myA));
// console.log({myA});


// function myFun(ab,...b) {
//     console.log({ab});
//     console.log(b);
// }
// const ar= [1,2,3]
// console.log(myFun(...ar));


const names=['a','b','c']
names.push('d')
const firstName= [...names]

console.log(names);
console.log(firstName);