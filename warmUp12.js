/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 function mysteryRange(inputString,range){
    // split the input string into  array of numbers
    var arr = inputString.split('');
    var array = [];
    // this empty array will hold the first group of Integers < 10 .. it's length is range
    for(let i = 0; i < range; i++){
        array.push(arr[i]);
    }
    console.log(array)
    // arr1 will hold the rest of arr : 
    var arr1 = arr.slice(range);
    // console.log(array)
    // console.log(arr)
    // console.log(arr1)

    for(let i = 0; i < range; i++){
        //looping threw array fixing one item
        var n1 = Number(array[i])
        for(let j = 0; j < arr1.length; j++){
            // looping threw arr1 checking of the range condition and updating array 
            var n2 = Number(arr1[j]);
            if(n1 +n2 < 100 && n1 + n2 > 0){
                array[i] = n1 + n2
            }
        }
    }
    //console.log(array);
    var max = Math.max(...array); // maximum
    var min = Math.min(...array); // minimum
    return '['+ min + ',' + max + ']'
 }