/* console.log("Start");


setTimeout(()=>{                 // 2 sec after call 
    console.log("Between");
},2000)


console.log("End"); */

/* let a = 10;
let b = 0;

setTimeout(()=>{   //  Drawback
    b = 20;
},2000)

console.log(a+b); */

let a = 10;
let b = 0;

let loaddingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 2000)
})

loaddingData.then((data)=>{
    b=data
    console.log(a+b);
})