/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryAmountArr=[];
  for(let i=0 ; i<transactions.length ; ++i) {
    
    let alreadyVisited=false;
    for(let idx=0 ; idx<categoryAmountArr.length ; ++idx) {
      if(categoryAmountArr[idx]["category"]==transactions[i]["category"]) {
        categoryAmountArr[idx]["totalSpent"] += transactions[i]["price"];
        alreadyVisited=true;
        break;
      }
    }
    
    if(alreadyVisited) continue;
    
    // if not already visited then calc and push in categoryAmountArr

    let categoryAmountObj = {
      category: transactions[i]["category"],
      totalSpent : transactions[i]["price"]
    };

    categoryAmountArr.push(categoryAmountObj);
  }
  return categoryAmountArr;
}

module.exports = calculateTotalSpentByCategory;
