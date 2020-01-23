//****************************************************************************************CONFIG****************************************************************************************************************************************
var GROUP_ONE = ["pictures/1.1.1.jpg","pictures/1.1.2.jpg","pictures/1.1.3.jpg","pictures/1.1.4.jpg","pictures/1.1.5.jpg","pictures/1.2.1.jpg","pictures/1.2.2.jpg","pictures/1.2.3.jpg","pictures/1.2.4.jpg","pictures/1.2.5.jpg"
,"pictures/1.3.1.jpg","pictures/1.3.2.jpg","pictures/1.3.3.jpg","pictures/1.3.4.jpg","pictures/1.3.5.jpg","pictures/1.4.1.jpg","pictures/1.4.2.jpg","pictures/1.4.3.jpg","pictures/1.4.4.jpg","pictures/1.4.5.jpg","pictures/1.5.1.jpg"
,"pictures/1.5.2.jpg","pictures/1.5.3.jpg","pictures/1.5.4.jpg","pictures/1.5.5.jpg"];
var GROUP_TWO = [];

var QUESTION_ONE = "What is your race?";
var Q_ONE_ANSWERS=["","White","Black","Hispanic","Asian","Middle Eastern","Mixed-Race","Other"];
var QUESTION_TWO = "What is your gender identity?";
var Q_TWO_ANSWERS=["","Female","Male","Non-inBary"];
var QUESTION_THREE = "What is your sexual orientation?";
var Q_THREE_ANSWERS=["","Gay","Straight","Bisexual","Asexual","Other"];
var QUESTION_FOUR = "What is your age?";
var Q_FOUR_ANSWERS=["","24-under", "25-35","36-45","46-55","56-65","65-older"];
var QUESTION_FIVE = "What is your relationship status?";
var Q_FIVE_ANSWERS=["","Single","In a relationship", "Married"];
//**************************************************************************************************************************************************************************************************************************************

//Border---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var x = document.createElement("DIV");
x.style.width = window.innerWidth -16 +"px";
x.style.height = window.innerHeight -16 +"px";
document.body.style.backgroundColor = "#3B074B";
x.style.backgroundColor = "#9E62B1";

document.body.appendChild(x);
x.id = "test1";
x.style.color = "3B074B";


console.log(x);
console.log(screen.children);


//Survey------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function createQuestion(id,questionText,optionList){
var q = document.createElement("DIV");
q.id=id;
var qText = document.createTextNode(questionText);
q.appendChild(qText);

x.appendChild(q);
var dropdown = document.createElement("SELECT");
dropdown.style.position = "fixed";
//dropdown.style.left = 265 + "px";
//dropdown.style.top = 265 + "px";

for(var i =0; i<optionList.length;i++){
var qA = document.createElement ("option");
qA.text = optionList[i];
dropdown.appendChild(qA);
}
q.appendChild(dropdown);
}
var q1AnswerList = ["answer 1", "answer 2"];
var q2AnswerList = ["answer 1", "answer 2"];

createQuestion("q1",QUESTION_ONE, Q_ONE_ANSWERS);
createQuestion("q2",QUESTION_TWO, Q_TWO_ANSWERS);
createQuestion("q1",QUESTION_THREE, Q_THREE_ANSWERS);
createQuestion("q2",QUESTION_FOUR, Q_FOUR_ANSWERS);
createQuestion("q1",QUESTION_FIVE, Q_FIVE_ANSWERS);

//Next Button----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var nextButton = document.createElement("BUTTON");
nextButton.style.position = "fixed";
//nextButton.style.left = 400 +"px";
//nextButton.style.top = 265 + "px";
nextButton.textContent = "NEXT";
x.appendChild(nextButton);

nextButton.addEventListener("click",nextPage);

function nextPage(){
	var toRemove = x.children;
	for(var i =0; i<toRemove.length;i++){
		x.removeChild(toRemove[i]);
		i--;
	}
	datingSurvey();
}
//image code-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function image(ID,source){
var img = document.createElement("IMG");
img.id = ID
document.body.appendChild(img);
img.src = source;
img.style.position = "fixed";
}


function setPosition(ID,x,y,width,height){
	
	var img = document.getElementById(ID);

	img.style.width = width+ "px";
	img.style.height = height+ "px";
	img.style.left = x + "px"
	img.style.top = y + "px"


}
//---------------------------------------------------------------------page2-----------------------------------------------------------------------------------------------------------------------------------------	
var currentImageIndex = 0;

function updatePicture(){
	//send or set data first, then
	currentImageIndex++;
	document.getElementById("test").src = GROUP_ONE[currentImageIndex];
	
}
function datingSurvey(){
image("test",GROUP_ONE[0]);
setPosition("test", x.offsetWidth/4,x.offsetHeight/16,x.offsetWidth/2,x.offsetHeight*7/8);


var yesButton = document.createElement("BUTTON");
yesButton.style.position = "fixed";
yesButton.style.left = x.offsetWidth/2 +"px";
yesButton.style.top = x.offsetHeight*15/16 + "px";
yesButton.style.backgroundColor = "green";
yesButton.style.width = x.offsetWidth/4 + "px";
yesButton.style.height = x.offsetHeight/17 + "px";

yesButton.textContent = "YES";
document.body.appendChild(yesButton);

var noButton = document.createElement("BUTTON");
noButton.style.position = "fixed";
noButton.style.left = x.offsetWidth/4 +"px";
noButton.style.top = x.offsetHeight*15/16 + "px";
noButton.style.backgroundColor = "red";
noButton.style.width = x.offsetWidth/4 + "px";
noButton.style.height = x.offsetHeight/17 + "px";

noButton.textContent = "NO";
document.body.appendChild(noButton);

yesButton.addEventListener("click",updatePicture);
}
//update screen-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function updatePage(){
x.style.width = window.innerWidth -16 +"px";
x.style.height = window.innerHeight -16 +"px";

setPosition("test", x.offsetWidth/4,x.offsetHeight/16,x.offsetWidth/2,x.offsetHeight*7/8);
	
yesButton.style.left = x.offsetWidth/2 +"px";
yesButton.style.top = x.offsetHeight*15/16 + "px";
yesButton.style.width = x.offsetWidth/4 + "px";
yesButton.style.height = x.offsetHeight/17 + "px";
	
noButton.style.left = x.offsetWidth/4 +"px";
noButton.style.top = x.offsetHeight*15/16 + "px";
noButton.style.width = x.offsetWidth/4 + "px";
noButton.style.height = x.offsetHeight/17 + "px";
}

window.addEventListener("resize",updatePage);





