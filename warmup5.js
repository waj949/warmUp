// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .  
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.

// 
var classmate1 = {
	name : 'Wajdi',
	surname : 'Hamrouni',
	gendre : 'male',
	age : 26, 
}

// constructor function 
function makeClassmate( name, surname, gendre, age ){
	return {
		name : name,
		surname : surname,
		gendre : gendre,
		age : age
	}
}

var firas = makeClassmate('Firas', 'Ammous', 'male', 25);
var jihed = makeClassmate('jihed', 'Abdelli', 'male', 25);
var insaf = makeClassmate('insaf', 'Mechergui', 'female', 22);
var fooz  = makeClassmate('Fooz', 'Barakat', 'female', 22);
var amine = makeClassmate('Medamine', 'Khadhraoui', 'male', 25)
var mahdi = makeClassmate('Mahdi', 'Farjallah', 'male', 25)

var classmates = [firas, jihed, insaf, fooz, amine, mahdi];

// concatining the freind property in a sentence
function displayFriend(friend){
	return 'My name is ' + friend['name'] + ' ' + friend['surname'] + ' I\'m ' + friend['age'] + ' years old.'
}

//adding a friend with at least name and surname
//pushing only if u enter a name and a surename 
function addFriend(friend){
	if(friend.hasOwnProperty('name') && friend.hasOwnProperty('surname')){
		classmates.push(friend); 
		return classmates;
	}
	return 'Add Your mate name and surname at least ';
}

addFriend({name : 'Amine', surname : 'Slaymia'});

// access the gendre property and add one to the accumulator if gendre is male
function nOfmale(array){
    var count = 0;
    for(var i = 1; i < array.length; i++){
        if(array[i].gendre === 'male'){
            count++ ;
        } ;
    }
    return count;
}


// looping threw the array where every element is an object 
// looping threw the object test on qurey with .includes();
// if true  return the object 
function searchMate(query, array){
    query = query.toLowerCase();
	for(let i = 0; i < array.length; i++){
		for(var key in array[i]){
		    var st = array[i][key].toString(); 
			if(st.includes(query)){
				return array[i];
			}
		}
	}
}

searchMate('AMINE', classmates)
