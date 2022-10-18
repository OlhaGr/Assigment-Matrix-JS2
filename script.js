let num = 0;
while (num) {
	num++;
	console.log(num);
}

let num2 = 5;
while (num2) {
	console.log(num2);
	num2--;
}

function showConsole() {
	console.log("Click!!");
}

function showMessage() {
	alert('Wellcome on my site!!');
 }
showMessage();

const button = document.querySelectorAll('.button');

function showConsole() {
	console.log('i can do it!!');
}
button.forEach(buttonItem => {
	buttonItem.addEventListener("click", showConsole);
});
 


 