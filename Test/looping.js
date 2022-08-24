let names = ["Arun", "Jatin", "Gaurav", 1234, "Rahul", "Vikas", "Arjun"];

// for (let i = 0; i<names.length; i++){
//     if(typeof names[i] !== "string" ) continue;
//     console.log(names[i]);
// }

// let i = 0;
// while(i<names.length){
//     console.log(names[i]);
//     i++;
// }

// for (const n of names){
//     console.log(n);
// }

let symbols = {
    ig: "Instagram",
    fb: "Facebook",
    yt: "Youtube",
}
for(const n in symbols){
    console.log(`key is: ${n} and the value is: ${symbols[n]}`);
}