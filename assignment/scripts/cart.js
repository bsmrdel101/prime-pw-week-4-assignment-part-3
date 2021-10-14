console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
  let count = full();

  if (count === false) {
    basket.push(item);
    return true;
  } else {
    return false;
  }
}
function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}

function empty() {
  basket = [];
}

function full() {
  let itemCount = (basket.length < maxItems) ? false : true;
  return itemCount;
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log('Adding bannanas (expect true)', addItem('bannanas'));
console.log('Adding grapes (expect true)', addItem('grapes'));
console.log(`Basket is now ${basket}`);

listItems();
