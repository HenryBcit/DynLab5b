var data = {
    qnum:0,
    questions:[
        {
            title:"What comes after A?",
            answer:"B",
            bgcolor:"purple",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"#DAD",
            img:"http://placekitten.com/200/200"
        },
        {
            title:"What is the color of a banana?",
            answer:"Yellow",
            bgcolor:"rgb(5,125,252)",
            img:"http://placekitten.com/300/300"
        }
    ]
};

console.log(data, window);

function Start(){
    document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
    document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);
    console.log(data.questions[data.qnum].answer)
    if(myInp === data.questions[data.qnum].answer){
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";

        data.qnum++;
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[data.qnum].img+"' />";

        
    } else {
        document.querySelector("#h_r").innerText = "<h1>Wrong!</h1>";
    }
}
Start();