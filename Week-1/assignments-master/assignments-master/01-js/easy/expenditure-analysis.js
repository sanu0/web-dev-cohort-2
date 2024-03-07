/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let cat = [];
  let tot = [];
  for(let i=0;i<transactions.length;i++){
    let a = transactions[i].category;
    let b = transactions[i].price;
    if(!cat.includes(a)){
      cat.push(a);
      tot.push(b);
    }else{
      let id = cat.indexOf(a);
      tot[id] += b;
    }
  }
  let ans = [];
  for(let i=0;i<cat.length;i++){
    ans.push({
      category: cat[i],
      totalSpent: tot[i]
    })

  }
  return ans;
  
}

module.exports = calculateTotalSpentByCategory;
