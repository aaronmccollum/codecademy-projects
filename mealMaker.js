// Creates an object with meal and price information
// Validates if information has correct data type with setter methods
// Returns readable information with a getter method

const menu = {
  _meal: "",
  _price: 0,
  set meal(mealToCheck) {
    if(typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
      return this._meal;
    }
  },
  set price(priceToCheck) {
    if(typeof priceToCheck === 'number') {
      this._price = priceToCheck;
      return this._price;
    }
  },
  get todaysSpecial() {
    if(this._meal && this._price) {
      return `Today's special is ${this._meal} for just ${this._price} dollars!`;
    } else {
      return "Meal or price was not set correctly.";
    }
  }
}

// With a setter, this checks for value types
menu._meal = "pizza";
menu._price = 10;

console.log(menu._meal);
console.log(menu._price);

console.log(menu.todaysSpecial);

// --Before setter methods, these incorrectly--
// --do not check for value types!--
// menu._meal = 4;
// menu._price = 7;
// console.log(menu);
