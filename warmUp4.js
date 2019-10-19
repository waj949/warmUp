// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).

// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseStr(str) {
	let result = ''; 

	for(let i = str.length -1; i >= 0; i-- ){		// for loop goes backword from the last ondex of the string
        result = result + str[i] + (str.length - i); // accumulating the concatinated string in result var 
	}

	return result.substring(0, result.length -1); // since the function returns an "o1l2l3e4h5" i needed to remove the last char from result
}
reverseStr('hello') === "o1l2l3e4h" // tester

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength(array){
	let result = [];

	for(let i = 0; i < array.length; i++) {           // loop threw the array and trigger element by element 
		for(let j = i + 1; j < array.length; j++) {   //loop threw the rest if the array looking for teh same length and pushing
			if(array[i].length === array[j].length) {
				result.push(array[i]);
				result.push(array[j]);
			}
		}
	}

	return result;
}

