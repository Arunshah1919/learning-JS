function x(arr, item){
    arr.push(item);
   return arr.shift();
  }
  let testarr = [1,2,3,4,5,6];
  console.log(x(testarr,7));
  console.log("after: " + JSON.stringify(testarr));


x(testarr,7)