// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function pgcd(a, b){
	if(a % b === 0){
		return b; 
	}
	return pgcd(b, a % b)
} 
// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
<<<<<<< HEAD
//you can only add one at each summetion, you'll need to use recursion in this.
function sum(a, b){
	if(b === 0){
		return a;
	}
   return 1 + sum(a, b-1);
}
=======
//you can only add one at each summetion, you'll need to use recursion in this.
>>>>>>> 5351c491bef905428a1af3ea57f32fb6874d8e38
