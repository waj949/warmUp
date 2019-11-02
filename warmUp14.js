/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

var maxProfit = function(prices) {
  // this array will hold all of the differences between prices[i] and the rest of the prices array
  var arr = [] 		
  //looping and fixing prices[i] .. make prices[i] - prices[j] .... and push them to arr		
  for(let i=0; i < prices.length; i++){
  		for(let j = i + 1; j < prices.length; j++)
  			arr.push(prices[i] - prices[j])
  }
  // arr will hold the opposites profites we need so we look for the minimum
  var p = Math.min(...arr);
  //if all the differnces are positives so there is no profits 
  if(p < 0){
  return 'Maximum profit is ' + Number(-p); // return -p 
  }
  return 'Maximum profit is 0' ;

};
