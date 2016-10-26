

var questionsDB=[{
	question:"Who is Prime Minister of India?",
	answer:"Narendra Modi"
},{
	question:"What is 5*4?",
	answer:"20"
},{
	question:"Titanic was an actual ship?(True/False)",
	answer:"True"
},{
	question:"Which is largest country in the world?",
	answer:"Russia"
},{
	question:"Who invented Linux?",
	answer:"Linus Trovalds"
},{
	question:"What is the length of an American football?",
	answer:"1 Foot"
},{
	question:"What is the capitol of United Kingdom?",
	answer:"London"
},{
	question:"What is 2+2?",
	answer:"4"
},{
	question:"What is the Capitol of California?",
	answer:"Sacramento"
},{
	question:"Where is Egypt?",
	answer:"Africa"
}
]

var questions=getRandom(questionsDB,7)

var newDiv=document.createElement('div')
newDiv.setAttribute('id','questionsdiv')
newDiv.setAttribute('class','col-md-5 col-md-offset-3')
document.getElementById('addHere').appendChild(newDiv)
var newForm=document.createElement('form')
newDiv.appendChild(newForm)
for (var i=0;i<questions.length;i++){
	var newDivQuestion=document.createElement('div')
	newDivQuestion.setAttribute('class','form-group')
	newForm.appendChild(newDivQuestion)
	var newLabel = document.createElement('label')
	newDivQuestion.appendChild(newLabel)
	newLabel.setAttribute('id','question'+i)
	var newTextNode=document.createTextNode(questions[i].question)
	newLabel.appendChild(newTextNode)

	var newInput=document.createElement('input')
	newInput.setAttribute('class','form-control')
	newDivQuestion.appendChild(newInput)
	newInput.setAttribute('id','answer'+i)
}


var newButton=document.createElement('button')
newButton.setAttribute('type','button')
newButton.setAttribute('onclick','checkAnswers()')
newButton.appendChild(document.createTextNode("Submit Answers"))
newForm.appendChild(newButton)
newButton.setAttribute('class','btn btn-primary')

var resultDiv=document.createElement('div')
var correctDiv=document.createElement('div')
var incorrectDiv=document.createElement('div')
resultDiv.appendChild(correctDiv)
resultDiv.appendChild(incorrectDiv)
newDiv.appendChild(resultDiv)

function checkAnswers(){
	var correct=0
	var incorrect=0
	for (i=0;i<questions.length;i++){
		if (questions[i].answer==document.getElementById('answer'+i).value){
			correct++
			document.getElementById('question'+i).setAttribute('class','correct')
			document.getElementById('answer'+i).setAttribute('class','form-control correct')
	
		}else{
			incorrect++
			document.getElementById('question'+i).setAttribute('class','incorrect')
			document.getElementById('answer'+i).setAttribute('class','form-control incorrect')
		}
		if (correct==7){
			window.alert("Congratulations! You have got all the answers correct!!")
		}
	}
	
	
	
	correctDiv.innerHTML=""
	correctDiv.setAttribute('class','correct')
	correctDiv.setAttribute('id','result')
	correctDiv.appendChild(document.createTextNode('Correct: ' + correct))
	
	
	incorrectDiv.innerHTML=""
	incorrectDiv.setAttribute('class','incorrect')
	incorrectDiv.setAttribute('id','result')
	incorrectDiv.appendChild(document.createTextNode('Incorrect: ' + incorrect))
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len;
    }
    return result;
}