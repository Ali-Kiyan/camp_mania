var sth = require("cat-me");
var knockknock = require('knock-knock-jokes');
var faker = require('faker');
console.log(sth());
console.log(knockknock ());
for (var i = 0; i<90; i++)
console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
