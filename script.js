const incBtn=document.getElementById("inc");
const decBtn=document.getElementById("dec");
const resetBtn=document.getElementById("reset");

const count=document.getElementById("count").children[0];



incHandler=function () {
    console.log("+ clicked!");
    let n=Number(count.textContent);
    count.textContent=(n+1).toString();
}

decHandler=function () {
    console.log("- clicked!");

    let n=Number(count.textContent);

    if (n){
        count.textContent=(n-1).toString();
    }
    
}

resetHandler=function () {
    console.log("reset clicked!");

    count.textContent="0";
}

incBtn.onclick=incHandler;
decBtn.onclick=decHandler;
resetBtn.onclick=resetHandler;


