// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

// number of accurence of each charachter 

function occurnece(str){
	var result ='' ;
	var acc;
	for(var i =0; i < str.length; i++){
	    acc = 1;
	   for(var j = 0; j <= i-1; j++){
	       if(str[i] === str[j]){
	           ++acc;
	       }
	   }
	    result += acc;
	}
    return result;
}
 
var input    =  "Hello, World!"
// result  =  "1112111121311"

//var input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
occurnece(input)