const Employee = require('./Employee');
const Shopper = require('./Shopper');

// var userFactory = require('./userFactory');

//new Employeechanges to userFactory
var harry = new Employee('Harry Potter', 100, 'employee', 'This and That',"PM Certi");
//new Shopper changes to userFactory
var nitish = new Shopper('Nitish Kumar', 100);


// harry.payDay(100);

console.log( nitish.toString() );
console.log( harry.toString() );
