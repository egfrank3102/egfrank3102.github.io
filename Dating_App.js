//****************************************************************************************CONFIG****************************************************************************************************************************************
var GROUP_ONE = ["pictures/1.1.1.jpg","pictures/1.1.2.jpg","pictures/1.1.3.jpg","pictures/1.1.4.jpg","pictures/1.1.5.jpg","pictures/1.2.1.jpg","pictures/1.2.2.jpg","pictures/1.2.3.jpg","pictures/1.2.4.jpg","pictures/1.2.5.jpg"
,"pictures/1.3.1.jpg","pictures/1.3.2.jpg","pictures/1.3.3.jpg","pictures/1.3.4.jpg","pictures/1.3.5.jpg","pictures/1.4.1.jpg","pictures/1.4.2.jpg","pictures/1.4.3.jpg","pictures/1.4.4.jpg","pictures/1.4.5.jpg","pictures/1.5.1.jpg"
,"pictures/1.5.2.jpg","pictures/1.5.3.jpg","pictures/1.5.4.jpg","pictures/1.5.5.jpg"];
var GROUP_TWO = ["pictures/2.1.1.jpg","pictures/2.1.2.jpg","pictures/2.1.3.jpg","pictures/2.1.4.jpg","pictures/2.1.5.jpg","pictures/2.2.1.jpg","pictures/2.2.2.jpg","pictures/2.2.3.jpg","pictures/2.2.4.jpg","pictures/2.2.5.jpg"
,"pictures/2.3.1.jpg","pictures/2.3.2.jpg","pictures/2.3.3.jpg","pictures/2.3.4.jpg","pictures/2.3.5.jpg","pictures/2.4.1.jpg","pictures/2.4.2.jpg","pictures/2.4.3.jpg","pictures/2.4.4.jpg","pictures/2.4.5.jpg","pictures/2.5.1.jpg"
,"pictures/2.5.2.jpg","pictures/2.5.3.jpg","pictures/2.5.4.jpg","pictures/2.5.5.jpg"];

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
var d0 = document.createElement("DIV");
d0.style.position = "fixed";
//d0.style.top = 100 +"px";
d0.style.width = window.innerWidth -16 +"px";
d0.style.height = window.innerHeight -16 +"px";
document.body.style.backgroundColor = "#3B074B";
d0.style.backgroundColor = "#DDDDDD";

document.body.appendChild(d0);
d0.id = "test1";
d0.style.color = "3B074B";

var d1 = document.createElement("DIV");
d1.style.position = "fixed";
d1.style.top = "20px";
d1.style.left = window.innerWidth/5 + "px";

d1.style.width = 3*window.innerWidth/5 +"px";
d1.style.height = window.innerHeight/2 +"px";
d1.style.borderColor = "#9E62B1";
d1.style.backgroundColor = "#DDDDDD";
d1.style.borderWidths = "2px";
d1.style.borderTopWidth = "40px";
d1.style.borderStyle = "solid";
d1.style.borderRadius = "10px";
d1.style.textAlign = "center";
d0.appendChild(d1);



var d1Text = document.createElement("div");
var t1 = document.createTextNode("AP Research Survey");
d1Text.style.color = "#3B074B"
d1Text.style.position = "fixed";
d1Text.style.left = d1.offsetLeft+2 +"px";
d1Text.style.top = d1.style.top;

d1Text.style.fontSize = d1.clientTop*3/4 +"px";

d1Text.appendChild(t1);
d0.appendChild(d1Text);

var disclaimerText1 = `Data gathered from this survey will be used for a research project on online dating.`;

var br1 = document.createElement("br");
var br2 = document.createElement("br");


var disclaimerText2 = 
"\nAll information gathered on will be used for research" +
" purposes only, and will not be shared with anyone for any reason. Furthermore, collected data" +
" will remain anonymous and therefore cannot be traced back to you. All collected data will be" +
" destroyed after the study is completed.";
var d2Text = document.createTextNode(disclaimerText1);
d1.appendChild(d2Text);
d1.appendChild(br1);
d1.appendChild(br2);
var d3Text = document.createTextNode(disclaimerText2);
d1.appendChild(d3Text);

var br = []; 
for(var i =0; i<11; i++){
	br.push(document.createElement("br"));
	d1.appendChild(br[i]);
}


var b1 = document.createElement("BUTTON");
b1.style.position = "inline-block";
b1.textContent = "Continue";
b1.style.top = 400 + "px";
b1.style.backgroundColor = "#3B074B";
b1.style.color = "#FFFFFF";
d1.appendChild(b1);
b1.addEventListener("click",toSurvey);
function toSurvey(){
	document.body.removeChild(d0);
	test42();
}
//Border---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var x;
function test42(){
x = document.createElement("DIV");
x.style.width = window.innerWidth -16 +"px";
x.style.height = window.innerHeight -16 +"px";
document.body.style.backgroundColor = "#3B074B";
x.style.backgroundColor = "#DDDDDD";
x.style.textAlign = "center";
document.body.appendChild(x);
x.id = "test1";
x.style.color = "3B074B";
//Survey------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var userDataForm = document.createElement("FORM");
var testInput = document.createElement("INPUT");
userDataForm.target = "_blank";
testInput.setAttribute("type","text");
testInput.name = "test1";
testInput.value = "TESTING";
userDataForm.appendChild(testInput);
document.body.appendChild(userDataForm);
testInput.style.display = "none";


createQuestion("q1",QUESTION_ONE, Q_ONE_ANSWERS);
createQuestion("q2",QUESTION_TWO, Q_TWO_ANSWERS);
createQuestion("q1",QUESTION_THREE, Q_THREE_ANSWERS);
createQuestion("q2",QUESTION_FOUR, Q_FOUR_ANSWERS);
createQuestion("q1",QUESTION_FIVE, Q_FIVE_ANSWERS);

//INSTRUCTION TEXT--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var instrTxtDiv = document.createElement("DIV");
instrTxtDiv.id = "InstrTxt";
var instructionTxt = document.createTextNode("You will be shown a collection of images. Please select if you would swipe right/match with each profile by using the \"yes\" button, and indicate you would swipe left/ignore by using the \"no\" button.");
instrTxtDiv.appendChild(instructionTxt);
x.appendChild(instrTxtDiv);
x.appendChild(document.createElement("br"));


//Next Button----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var nextButton = document.createElement("BUTTON");
nextButton.style.position = "inline-text";
//nextButton.style.left = 400 +"px";
//nextButton.style.top = 265 + "px";
nextButton.textContent = "NEXT";
x.appendChild(nextButton);

nextButton.addEventListener("click",nextPage);
}
function nextPage(){
	var toRemove = x.children;
	for(var i =0; i<toRemove.length;i++){
		x.removeChild(toRemove[i]);
		i--;
	}
//	userDataForm.submit();
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
var onGroupOne = true;
var onGroupTwo = false;
var currentImageIndex = 0;
var yesButton;
var noButotn;

function updatePicture(){
	//send or set data first, then
	if(onGroupOne){
		currentImageIndex++;
		document.getElementById("test").src = GROUP_ONE[currentImageIndex];
		if(currentImageIndex===24){
			onGroupOne = false;
			currentImageIndex =0;
		}
	}else{
		if(!onGroupTwo)
			showLink();
		else{
			if(currentImageIndex==24){
				endScreen();
			}else
		currentImageIndex++;
		document.getElementById("test").src = GROUP_TWO[currentImageIndex];
		}
	}
}

function datingSurvey(){
image("test",GROUP_ONE[0]);
setPosition("test", x.offsetWidth/4,x.offsetHeight/16,x.offsetWidth/2,x.offsetHeight*7/8);


yesButton = document.createElement("BUTTON");
yesButton.id = "yesButton";
yesButton.style.position = "fixed";
yesButton.style.left = x.offsetWidth/2 + "px";
yesButton.style.top = x.offsetHeight*15/16 + "px";
yesButton.style.backgroundColor = "green";
yesButton.style.width = x.offsetWidth/4 + "px";
yesButton.style.height = x.offsetHeight/17 + "px";

yesButton.textContent = "YES";
document.body.appendChild(yesButton);

noButton = document.createElement("BUTTON");
noButton.id = "noButton";
noButton.style.position = "fixed";
noButton.style.left = x.offsetWidth/4 +"px";
noButton.style.top = x.offsetHeight*15/16 + "px";
noButton.style.backgroundColor = "red";
noButton.style.width = x.offsetWidth/4 + "px";
noButton.style.height = x.offsetHeight/17 + "px";

noButton.textContent = "NO";
document.body.appendChild(noButton);

yesButton.addEventListener("click",updatePicture);
noButton.addEventListener("click",updatePicture);//This didn't work:( 
window.addEventListener("resize",updatePage);

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
//Link page******************************************************************************************************************************************************************************************************************************
function showLink(){
	document.getElementById("test").style.display = "none";
	document.getElementById("yesButton").style.display = "none";
	document.getElementById("noButton").style.display = "none";
	var div3 = createTextBorder();
	div3.id = "linkDiv";
	x.appendChild(div3);
	
	var div3InstrText = document.createTextNode("You have completed part one of the survey, please click on the link and complete the Skin Tone IAT. Then, return to this page to finish the survey with a new set of images.");
	div3.appendChild(div3InstrText);
	div3.appendChild(makeBR());
	div3.appendChild(makeBR());
	
	var link = document.createElement("A");
	link.id = "link";
	link.text = "Implicit Bias Test";
	link.target ="_blank"
	link.href = "https://implicit.harvard.edu/implicit/selectatest.html";
	
	div3.appendChild(link);
	div3.appendChild(makeBR());
	div3.appendChild(makeBR());
	
	var continueButton = document.createElement("BUTTON");
	continueButton.style.display = "none";
	continueButton.textContent = "continue";
	continueButton.id = "continueButton";
	continueButton.addEventListener("click",tempFunc);
	div3.appendChild(continueButton);
	link.addEventListener("click", function(){
		continueButton.style.display = "initial";
		});

}
function tempFunc(){
	x.removeChild(document.getElementById("linkDiv"));
	document.getElementById("test").style.display = "initial";
	document.getElementById("test").src = GROUP_TWO[0];
	document.getElementById("yesButton").style.display = "initial";
	document.getElementById("noButton").style.display = "initial";
    onGroupTwo = true;
	
}

function createQuestion(id,questionText,optionList){
var q = document.createElement("DIV");
q.style.textAlign = "center";
q.style.position = "inline-block";

q.id=id;
var qText = document.createTextNode(questionText);
q.appendChild(qText);

x.appendChild(q);
var dropdown = document.createElement("SELECT");
dropdown.style.position = "inline-block";


for(var i =0; i<optionList.length;i++){
var qA = document.createElement ("option");
qA.text = optionList[i];
dropdown.appendChild(qA);
}
var breakLine = document.createElement("BR");
q.appendChild(breakLine);
q.appendChild(dropdown);
var breakLine2 = document.createElement("BR");
x.appendChild(breakLine2);
}

function createTextBorder(){
var textBorderDiv = document.createElement("DIV");
textBorderDiv.style.position = "fixed";
textBorderDiv.style.top = "20px";
textBorderDiv.style.left = window.innerWidth/5 + "px";

textBorderDiv.style.width = 3*window.innerWidth/5 +"px";
textBorderDiv.style.height = window.innerHeight/2 +"px";
textBorderDiv.style.borderColor = "#9E62B1";
textBorderDiv.style.backgroundColor = "#DDDDDD";
textBorderDiv.style.borderWidths = "2px";
textBorderDiv.style.borderTopWidth = "40px";
textBorderDiv.style.borderStyle = "solid";
textBorderDiv.style.borderRadius = "10px";
textBorderDiv.style.textAlign = "center";

return textBorderDiv;
}
function makeBR(){
	return document.createElement("BR");
}
function endScreen(){
	document.getElementById("test").style.display = "none";
	document.getElementById("yesButton").style.display = "none";
	document.getElementById("noButton").style.display = "none";
	var finalDiv = createTextBorder();
	x.appendChild(finalDiv);
	var finalDivText = document.createTextNode("Thank you for completing this survey.");
	finalDiv.appendChild(finalDivText);
}