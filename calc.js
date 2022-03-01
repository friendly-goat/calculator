const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate? ('+' '-' '*' '/' 'sqrt')", function(input){
	tokens = input.split(' ');
	

	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);


	// This line closes the connection to the command line interface.
	function case1(){
		console.log('mathSymbol', mathSymbol);
		console.log('num1', num1);
		console.log('num2', num2);
	}
	function case2(){
		console.log('mathSymbol', mathSymbol);
		console.log('num', num1);		
	}

	switch(mathSymbol){
		case "+":
			case1();
			console.log(num1+num2);
			break;
		case "-":
			case1();
			console.log(num1-num2);
			break;
	    case "*":
			case1();
			console.log(num1*num2);
			break;
		case "/":
			case1();
			console.log(num1/num2);
			break;
		case "sqrt":
			case2();
			console.log(Math.sqrt(num1));
			break	
	}
	reader.close()

});
