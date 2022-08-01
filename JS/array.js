let arr = [10,12,14];
let ele = 12;
function findanelement(arr, ele){
  return arr
}
findanelement(arr,ele);
console.log(ele);

$(document).ready(()=>{
    $(document).find('.button1').on('click',()=>{
        let result= findanelement(arr,ele);
        alert(result)
    })
})
