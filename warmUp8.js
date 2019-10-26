//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. 
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset(arr1, arr2){
	// accumulator 
	var count = 0;
	// if the two arrays have the same length so they should be equal
	if(arr1.length === arr2.length){
		return arr1 === [...arr2];
	}
	// loop threw the shorter array and find if it's element are icluded in the longer array
	for( let i = 0; i < arr2.length ; i++){
		if(arr1.includes(arr2[i])){
			//increment counter 
			count++;
		}
		// if counter is equal to the shorter array's length so all of it's element are in the longer one
		if(count === arr2.length){
			return true;
		}
	}
	return false
}

isSubset([ 1, 2, 3, 4 ], [ 2, 3, 4 ])
isSubset([ 2, 2, 2, 3, 4 ], [ 2, 4, 3 ] )
isSubset([ 2, 3, 3, "a" ], [ 3, 3, 3, "a" ]  )


































