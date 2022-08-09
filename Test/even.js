/*
const number = ("11");

if (number %2 == 0) {
    console.log("the number is even.");
}

else {
console.log ("the number is odd.")
}
*/

/*
function oddeven(num) {
    return num %2 ===0 ? "true": num % 3 ? "false" : "not defined"
}
console.log(oddeven(100));
*/

/*function getEvenOrOdd(num, type){
    const even=[];
    const odd=[];
    for(let i=0;i<num;i++){
            i%2===0?even.push(i): odd.push(i);
    }
    return  type==='even'? even : odd ;
}
const result = getEvenOrOdd(111,'even');
console.log(result); */


function evenOdd(num, type) {
    const result = []
    switch (type) {
        case 'even':
            for (let i = 0; i <= num; i++) {
                if (i % 2 === 0) {
                    result.push(i)
                }
            }
            break;
        default:
            for (let i = 0; i <= num; i++) {
                if (i % 2 != 0) result.push(i)
            }
            break;
    }
    return result
}
const result = evenOdd(20, 'even')
console.log(result);
