var myInp = document.getElementById("num");
var numDisp = document.getElementById("numDisplay");
var answer = Math.round(Math.random()*100);
var score = 100;

document.getElementById("guess").addEventListener("click", function(){
    //console.log("hi");
    //document.body.style.backgroundColor = "red";
    
    //console.log(parseInt("10")+1);
    var realNum = parseInt(myInp.value);
    
    if(realNum == answer){
        numDisp.innerText = "You're correct! Score: "+score;
    } else {
        //numDisp.innerText = "Wrong";
        if(realNum > answer){
            numDisp.innerText = "Too big";
        } else if(realNum < answer){
            numDisp.innerText = "Too small";
        }
        score = score - 1;
    }
});