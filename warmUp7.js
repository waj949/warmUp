// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

//1 
var fullName = 'Essam ' + ' Harous'; // concatenation

//2 

13 % 3 === 0; // return if 13 is a multiple of 3

//3
function average(arr){
	var acc = 0;
	for(let i =0; i < arr.length; i++){
		acc += arr[i];
	}
	return acc / arr.length;
} 
average([13,14,13,15,16,17,19,13,16,15]) // sum of the elements of the array and return the sum devided by the length of the array

// 4

var myAgeInSeconds = 26 * 365 * 24 * 3600; 

