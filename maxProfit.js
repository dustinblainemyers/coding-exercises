function getMaxProfit(array) {
  let maxProfit = array[1] - array[0];
  let minPrice = Math.min(array[1], array[0]);

  for (let i = 2; i < array.length; i++) {
    if (array[i] < minPrice) {
      minPrice = array[i];
    }
    if (maxProfit < array[i] - minPrice) {
      console.log(minPrice);
      maxProfit = array[i] - minPrice;
    }
  }

  console.log("maxprofit", maxProfit);
}
