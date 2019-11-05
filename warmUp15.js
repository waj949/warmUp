// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//hi there how == woh ereh ih 
//
// Note : you can`t use any built-in functions .

function reverseStr(str){
	arr = str.split(' ');
	var result = [];
	for(var i = arr.length -1; i >= 0; i--){
		result.push(arr[i]);
	}
	return result.join(' ')
}

function reverseStr(str){
	var indexesOfSpaces = [];
	for(var i =0; i < str.length; i++){
		if(str[i] === ' '){
			indexesOfSpaces.push(i);
		}
	}
	console.log(indexesOfSpaces);
	var result = '';
	for(var i = str.length - 1; i >= 0; i--){
		result += str[i];
	}
	console.log(str)
	for(j =0 ; j < indexesOfSpaces.length; j++){
		result[result.length - indexesOfSpaces[j]] = ' ';
	}
	console.log(result);
	
}

