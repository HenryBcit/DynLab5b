var data = {
    qnum:0,
    questions:[
        {
            title:"How is life?",
            answer:"Good",
            bgcolor:"yellow",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"Is 5 Bigger than 4?",
            answer:"Yes",
            bgcolor:"blue",
            img:"http://placekitten.com/200/200"
        },
        {
            title:"What is the color of a banana?",
            answer:"Yellow",
            bgcolor:"#FAD",
            img:"http://placekitten.com/300/300"
        }
    ]
}


function Start(){
    //document.querySelector("#henry_q h1").innerText = questions[qnum];
    document.querySelector("#henry_q h1").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#henry_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    if(myInp === data.questions[data.qnum].answer){
        document.querySelector("#henry_r").innerHTML = "<h1>Correct!</h1>";
        NextQ();
    } else {
        document.querySelector("#henry_r").innerText = "<h1>WRONG!</h1>";
    }
}

function NextQ(){
    data.qnum++;
    document.querySelector("#henry_q h1").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#henry_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />"; 
}

Start();