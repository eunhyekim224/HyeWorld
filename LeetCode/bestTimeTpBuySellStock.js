/**
 * ay you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // let buyDay = 1;
  // let maxDiff = 0;
  let totalProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    let maxProfit = 0;
    for (let j = i; j < prices.length - i; j++) {
      console.log("j:", j);
      console.log("i2:", i);
      console.log("prices[i+j]:", prices[i + j]);
      console.log("prices[i]2:", prices[i]);
      let potentialProfit = prices[i + j] - prices[i];
      console.log("potentialProfit:", potentialProfit);
      if (potentialProfit > maxProfit) {
        maxProfit = potentialProfit;
      }
    }
    console.log("maxProfit:", maxProfit);
    totalProfit += maxProfit;
  }

  return totalProfit;
};
