var PersonBuilder = require('./PersonBuilder');

// Employees
var nitish = new PersonBuilder('Nitish').makeEmployee().makeManager(60).build();
var harry = new PersonBuilder('harry').makeEmployee().makePartTime().build();
var sugam = new PersonBuilder('sugam').makeEmployee().build();

// Shoppers
var rahul = new PersonBuilder('rahul')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();

var nishant = new PersonBuilder('nishant').withMoney(1000).build();

console.log( nitish.toString() );
console.log( rahul.toString() );
console.log( nishant.toString() );
