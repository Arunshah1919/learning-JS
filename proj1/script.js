let counter = document.querySelector(".counter");
let followers = document.querySelector(".followers");

let count = 1;
setInterval(() => {
    if(count < 1000){
     count++;
     counter.innerText = count;
    }
}, 10);

setTimeout(() => {
    followers.innerText = "followers in Instagram!"
}, 11500);