// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var females = ['Insaf', 'Ruba', 'Hania', 'Ons', 'Lina', 'Fooz', 'Amera'];
var males = ['Adnane', 'Amine', 'Hamza', ' Taha', 'Najeh', 'Dhia', 'Ahmad', 'Allam','Fathi'];
var classInstructors = ['Youssef', 'Seif', 'Matt', 'Raghda', 'Tam'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middel(array){
	var index = Math.floor(array.length / 2)
	console.log(index);
	return array[index]
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes. 
function change(array){
	return array.map(function(val, index){
		if (index % 2 === 0) {
			val = val * 2 ;
		}
		return val ;
	})
}
var array =[1,2,3,4,6,7,8];
 change(array)
 // I used the map method in the array object wich iterate over the array and chek if the index of the element is even ==> multiplie by 2 or just returned it as it is
