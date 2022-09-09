// let uId = "abc123";
// let firstName = "Arun";
// let lastName = "shah";
// let state = "punjab";
// let logCount = 0;
// let isLoggedInFromGoogle = "true";

// console.log(`
//     With Unique ID : ${uId}
//     First Name Is : ${firstName}
//     Last Name Is : ${lastName}
//     THE State Is : ${state}
//     Is He Logged From Google : ${isLoggedInFromGoogle} 
// `);


// let sellingPrice = 100;
// let listingPrice = 1100;

// let discountPrice = ((listingPrice-sellingPrice) / listingPrice) * 100;
// displayDiscountPrice = Math.round(discountPrice);

// console.log("The Discount Percent Is: " + displayDiscountPrice + "% off"  );

// let getUserByRole = function(name , role) {
//     switch(role) {
//         case "teacher":
//         return `${name} is the teacher`
//         case "accountent":
//         return `${name} is the accountent`
//         case "banker":
//         return `${name} is the banker`
//         case "student":
//         return `${name} is the student`
//         default :
//         return `${name} is the new admission`
//     }
// }
// let result = getUserByRole("Arun" ,"teacher");
// console.log(result);

// const jeans = [32,34,30,32,30,34,36,36,30,36];
// jeans.splice(1,6,28);
// console.log(jeans); 

// const jeans = [32,34,30,32,30,34,32,32,34,32,,40,32,32,36,36,30,36];
// const result = jeans.filter((num)=>  num ===32);

// class colors {
//     constructor(color, colorCount) {
//         this.color = color;
//         this.colorCount = colorCount;
//         this.getColorCount = function () {
//             console.log(`The Jeans color is: ${this.color} and total numbers of jeans are: ${this.colorCount}`);
//         };
//         //    colors.prototype.getColor = function(){
//         //     console.log(`The Jeans color is: ${this.color}`);
//         //    };
//     }
// }

// let black = new colors("Black", 3);
// let blue = new colors("Blue", 2);
// //black.getColor();
// black.getColorCount();
// blue.getColorCount();
// console.log(result);

const colorsCount = {
    30 : ["black","blue","sky"],
    32 : ["black","blue","sky"],
    34 : ["black","blue","white","sky"],
    36 : ["black","blue","navy","sky"],
    38 : ["black","blue"],
    40 : ["balck","blue"],
}
const jeansWithColors = function(size){
    try{
        return  {
            colors:colorsCount[size]||'Not availble',
            count: colorsCount[size] ? colorsCount[size].length: []}
    }
    catch(e){
        return {error:e}
    }
   
}
console.log(jeansWithColors(36));
//console.log(colorsCount[42]);