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

// btn1.onclick = ()=>{
//     console.log("Handler 1");
//     let a=25;
//     a++;
//     console.log(a);
// }
// btn1.oncilick = ()=>{
//     console.log("Handleer 2");
// };

// let div = document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are insied div");

// };


// btn1.onclcik=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientx,evt.clienty);

// };
//=========================================
// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",(evt)=>{
//     console.log("button 1 was clciked - handler1");
//     // console.log(evt);
//     // console.log(evt.type);
// });

// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clciked - handler2");
// });
// const handler3= ()=>{
//     console.log("button 1 was clciked - handler3");
// };

// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clciked - handler4");
// });
// btn1.removeEventListener("clcik",handler3);

//==============================================

// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clciked - handler3");
// });
// btn1.addEventListener("click",handler3);


// let div=document.querySelector("div");

//===============================================
//Qs1==

let modeBtn = document.querySelector("#mode");
let body=document.querySelector("body");
let cuurmode="light";
modeBtn.addEventListener("click",()=>{
    if(cuurmode ==="light"){
        cuurmode="dark";
        body.classList.add("dark");
         body.classList.remove("light");
    }else{
        cuurmode="light";
        body.classList.add("light");
         body.classList.add("dark");
    }
    console.log(cuurmode);
});