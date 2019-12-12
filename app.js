'use strict'

let calcScreen = document.querySelector('.screen input');
let cl = document.querySelector('.clear');

let numbers = document.querySelectorAll('.numbers div');
let opers = document.querySelectorAll('.operators div');
let value = 0;
let op;
let result;

for (let i=0;i<numbers.length;i++){
numbers[i].addEventListener('click', function(e){
console.log(this.innerText);
calcScreen.value +=this.innerText;
e.preventDefault();
})
}
cl.onclick = function(){
	result = 0;
	calcScreen.value = '';
}

opers[0].addEventListener('click', function(){
	// calcScreen.value=calcScreen.value + '+';
	value=calcScreen.value;
	op = '+';
	calcScreen.value = '';
	console.log (value);
})
opers[1].addEventListener('click', function(){
	value=calcScreen.value;
	op = '-';
	calcScreen.value = '';
	// calcScreen.value=calcScreen.value + '-';
	console.log (value);
})
opers[2].addEventListener('click', function(){
	value=calcScreen.value;
	op = '*';
	calcScreen.value = '';
	// calcScreen.value=calcScreen.value + '*';
	console.log (value);
})
opers[3].addEventListener('click', function(){
	value=calcScreen.value;
	op = '/';
	calcScreen.value = '';
	// calcScreen.value=calcScreen.value + '/';
	console.log (value);
})
opers[4].addEventListener('click', function(){
	// value=Number(calcScreen.value);
	switch (op){
	case '+' :
	result = (+value + +calcScreen.value);
	break;
	case '-' :
	result = (value - calcScreen.value);
	break;
	case '*' :
	result = (+value * +calcScreen.value);
	break;
	case '/' :
	result = (+value / +calcScreen.value);
	break;
	default: calcScreen.value = 0; break
}
calcScreen.value = result;
result = null;
op = null;
})