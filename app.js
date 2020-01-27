<script type="text/javascript">
var correct=0,pos=0,test,ques,choices,choice,question,chA,chB,chC;
var questions=[
["What called we # in c language?", "preprocessor", "directive", "definition", "A"],
  ["Where is function called?", "outside main", "inside main", "inside function body", "B"],
  ["What is 8 x 12?", "88", "112", "96", "C"]
  ];
 function get(x){
 	return document.getElementById(x);
 }
 function renderquestion(){
 	test=get("ques");
 	if (pos>=questions.length) {
 		 test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
 		 get("heading1").innerHTML="Test completed";
 		 pos=0;
 		 correct=0;
 		 return false;
 	}
 	get("heading1").innerHTML="<h2>Question "+(pos+1)+"</h2>";
 	question= questions[pos][0];
 	chA=questions[pos][1];
 	chB=questions[pos][2];
 	chC=questions[pos][3];
 	test.innerHTML="<h2>"+question+"</h2>";
 	test.innerHTML += "<input type='radio' value='A' name='choices'>"+chA+"<br>";
 	test.innerHTML += "<input type='radio' value='B' name='choices'>"+chB+"<br>";
 	test.innerHTML += "<input type='radio' value='C' name='choices'>"+chC+"<br><br>";
 	test.innerHTML += "<button onclick='checkAnswer()'> Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementById("choices");
	for (var i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
		choice=choices[i].value;
	}
	}
	if (choice == questions[pos][4]) {
		correct++;
	}
	pos++;
	renderquestion();
	}
window.addEventListener("load", renderquestion ,false);
	</script>}
