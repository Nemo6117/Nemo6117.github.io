alert("Question 1 answer:" + " " + Date());
function question2(){
	var question2=document.getElementById('question2');
	question2.src="https://img.artpal.com/037071/3-20-5-8-0-39-4m.jpg";
}
function question3(){
	document.getElementById('question3').innerHTML='I love Drake';
}
function question4(){
	alert('Fart Warn!!!');
}
function question5(){
	var question5=document.getElementById('question5');
	question5.style.backgroundColor='#87eda3';
	question5.style.fontFamily='Arial';
	question5.style.textAlign='center';
}
function question6more(f) {
  return (5/9) * (f-32);
}
function question6() {
  document.getElementById("question6").innerHTML = question6more(20);
}
	function question7(){
    var a=parseFloat(prompt('First number'));
    var b=parseFloat(prompt('Last number'));
    document.getElementById('solution1').innerHTML=a+b;
}	

	function question7more(){
	document.getElementById('solution1').innerHTML=0;
}
function question8(){
    var a=prompt('Your first name');
    var b=prompt('Your Last name');
    document.getElementById('solution2').innerHTML="Nice to meet you"+" "+a+" "+b;
}	