/**
 * ay you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  return calculateProfit(prices, 0);    
};

var calculateProfit = function(prices, currentDay) {
  if (currentDay >= prices.length) {
      return 0;
  }
  let totalMaxProfit = 0;
  for (let start=currentDay; start<prices.length; start++) {
      let maxProfit = 0;
      for (let i=start+1; i<prices.length; i++) {
          if (prices[start] < prices[i]) {
              let profit = calculateProfit(prices, i+1) + prices[i] - prices[start];
              if (profit > maxProfit) {
                  maxProfit = profit; 
              }
          }
      }
      if (maxProfit > totalMaxProfit) {
          totalMaxProfit = maxProfit; 
      }
  }
  return totalMaxProfit; 
}