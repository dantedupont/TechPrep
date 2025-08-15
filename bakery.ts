/*

a bakery tracks daily items with:

name (string)

cost (number, cost to make)

price (number, selling price)

sold (number, units sold)

given an array of items for a day, return an array of the names of items that made net profit at least targetProfit.
net profit for an item = (price - cost) * sold.
if no items meet the target, return [].
*/

type Item = {
    name: string,
    cost: number,
    price: number,
    sold: number
}


function profitableItems(day: Item[], targetProfit: number): string[] | [] {
    let results = []
    for(const item of day){
        let name = item.name
        let netProfit = (item.price - item.cost) * item.sold
        if (netProfit >= targetProfit){
            results.push(name)
        }
    }
    return results
}

// test case 1
const day1 = [
    { name: "croissant", cost: 1.2, price: 2.5, sold: 30 },
    { name: "bagel", cost: 0.5, price: 1.5, sold: 20 },
    { name: "muffin", cost: 0.8, price: 2.0, sold: 10 }
  ];
  console.log(profitableItems(day1, 20));
  // expected: ["croissant", "bagel"]
  
  // test case 2
  const day2 = [
    { name: "donut", cost: 0.6, price: 1.0, sold: 15 },
    { name: "brownie", cost: 1.0, price: 3.0, sold: 15 },
    { name: "tart", cost: 2.0, price: 5.0, sold: 1 }
  ];
  console.log(profitableItems(day2, 15));
  // expected: ["brownie"]