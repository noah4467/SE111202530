var message = prompt("What is your name");
//alert(message + " You have a virus");
document.getElementByID("welcome-message").innerHTML = 'Welcome ${message} to to week 2 lab.';
document.getElementByID("footer").style.color = "red";