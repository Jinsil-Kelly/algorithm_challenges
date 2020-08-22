// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = (prices) => {
  let min = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i += 1) {
    min = Math.min(prices[i], min);
    if (prices[i] > min) {
      profit = profit + prices[i] - min;
      min = prices[i];
    }
  }
  return profit;
};
