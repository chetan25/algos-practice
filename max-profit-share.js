function maxProfit(prices) {
    if(prices.length === 0) {
        return 0;
    }
    var min = prices[0];
    var profit = 0;
    for(var i = 1; i<prices.length; i++) {
        if (min < prices[i]) {
            profit = profit < (prices[i] - min) ? (prices[i] - min) : profit;
        } else {
            min = prices[i];
        }
    }

    return profit;
}

console.log(maxProfit([7, 11, 5, 3, 6, 1, 10, 12])); // 11
console.log(maxProfit([7, 6, 4, 3, 1])); //0
