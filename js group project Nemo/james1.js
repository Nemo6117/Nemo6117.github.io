let d = new Date();
alert("Today's date is "+ d);

function oneFunction() {
  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = "Good Morning,what would you like to order？";
  } else if (time < 18) {
    greeting = "Good Afternoon,what would you like to order？";
  } else {
    greeting = "Good Night,what would you like to order？";
  }
  document.getElementById("happy").innerHTML = greeting;
}