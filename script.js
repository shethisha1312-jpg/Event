// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was cilcked");
//     let a=25;
//     a++;
//     console.log(a);

// }

// let div = document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are inside div");
// };

btn1.onclick = ()=>{
    console.log("Handler 1");
    let a=25;
    a++;
    console.log(a);
}
btn1.oncilick = ()=>{
    console.log("Handleer 2");
};

let div = document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are insied div");

};
