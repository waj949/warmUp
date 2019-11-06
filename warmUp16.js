// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function searchForBalloon(str) {
	str = str.toLowerCase();
	var arr = str.split('');
	
	var bArr = arr.filter(function(element){
		return element === 'b';
	});

	var aArr = arr.filter(function(element){
		return element === 'a';
	})  

	var lArr = arr.filter(function(element){
		return element === 'l';
	}) 
	var oArr = arr.filter(function(element){
		return element === 'o';
	}) 
	var nArr = arr.filter(function(element){
		return element === 'n';
	})

	var counter = 0;

	var result = [];
	for( var i = 0; i < bArr.length; i++){
		result.push(bArr[i], aArr[i], lArr[i], lArr[i+1], oArr[i], oArr[i+1], nArr[i])
	}
	console.log(result)
	return Math.floor(result.length / 7)
}