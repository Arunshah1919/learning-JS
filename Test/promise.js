const uno = () => {
    return "I am One"
};

const dos = () => {
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve ("I am Two");
    },3000);
});   
};

const tres = () => {
    return "I am Three"
};

const callMe = async() => {
    let valueOne = uno();
    console.log(valueOne);

    let valueTwo = await dos ();
    console.log(valueTwo);

    let valueThree = tres();
    console.log(valueThree);
};

callMe();