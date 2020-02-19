var data = {
    qnum:0,
    questions:[
        {
            title:"What Comes After A?",
            answer:"B",
            bgcolor:"yellow",
            img:"http://placekitten.com/100/100"
        },
        {
            title:"Is 5 bigger than 4?",
            answer:"Yes",
            bgcolor:"#ABC",
            img:"http://placekitten.com/200/200"
        },
        {
            title:"What is the color of a banana?",
            answer:"yellow",
            bgcolor:"rgb(2,150,232)",
            img:"http://placekitten.com/300/300"
        }
    ]
}

//alert(data.questions[1].img);
console.log(data, window);

function Start(){
    document.querySelector("#h_q").innerText = data.questions[0].title;
    document.body.style.backgroundColor = data.questions[0].bgcolor;
    document.querySelector("#h_r").innerHTML = "<img src='"+data.questions[0].img+"' />";
}

function CheckAnswer(){
    var myInp = document.querySelector("#answer").value;
    console.log(myInp);

    if(myInp === data.questions[data.qnum].answer){
        //alert("Correct!");
        document.querySelector("#h_r").innerHTML = "<h1>Correct!</h1>";
        
        data.qnum++;
        document.querySelector("#h_q").innerText = data.questions[data.qnum].title;
        document.body.style.backgroundColor = data.questions[data.qnum].bgcolor;
        document.querySelector("#h_r").innerHTML += "<img src='"+data.questions[data.qnum].img+"' />";
        
    } else {
        document.querySelector("#h_r").innerText = "<h1>WRONG!</h1>";
    }
}

Start();