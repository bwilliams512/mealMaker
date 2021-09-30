/*
This project uses JavaScript to randomly create a
three-course meal based on what is available on a menu.

It will run until the user is satified with the generated meal.
*/

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers () {
    return this._courses.appetizers
  },
  set appetizers (appetizer) {
    this._courses.appetizers.push(appetizer)
  },
  get mains () {
    return this._courses.mains
  },
  set mains (main) {
    this._courses.mains.push(main)
  },
  get desserts () {
    return this._courses.desserts
  },
  set desserts (dessert) {
    this._courses.desserts.push(dessert)
  },
  get courses () { // _courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  // Create method which will be used to add a new dish to the specified course on the menu
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    // return
    this._courses[courseName].push(dish)
  },
  // Create method to get a random dish from a course on the menu
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName]
    const num = Math.floor(Math.random() * dishes.length)
    return dishes[num]
  },
  // Create method which will automatically generate a three-course meal
  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + main.price + dessert.price

    return `Your meal includes: ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is $${totalPrice}.`
  }

}

// Create a menu by adding some dishes
menu.addDishToCourse('appetizers', 'Garlic Knots', 6)
// Uncomment code below to check dish input
// console.log(menu.courses.appetizers)
menu.addDishToCourse('appetizers', 'Meatballs', 6)
menu.addDishToCourse('appetizers', 'Classic Chips and Queso', 8)

menu.addDishToCourse('mains', 'Pepperoni Pizza', 12)
menu.addDishToCourse('mains', 'BBQ Brisket', 11)
menu.addDishToCourse('mains', 'BLT Salad', 8)

menu.addDishToCourse('desserts', 'Smores', 6)
menu.addDishToCourse('desserts', 'Classic Donut Holes', 6)
menu.addDishToCourse('desserts', 'Cookie Brownie', 4)

// Generate a meal
const meal = menu.generateRandomMeal()
console.log(meal)
