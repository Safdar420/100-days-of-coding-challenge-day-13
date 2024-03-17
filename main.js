//  Q no 37
function MakeShirts(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I Love Programming'; }
    console.log("Shirt size : ".concat(size));
    console.log("Message on the Shirt : ".concat(message));
}
MakeShirts();
console.log('\n');
MakeShirts('Medium');
console.log('\n');
MakeShirts('Small', 'Progming is my love');
// Q no 38
function Describecity(city, country) {
    if (city === void 0) { city = "Tokoyo"; }
    if (country === void 0) { country = 'Defult Country'; }
    console.log(" ".concat(city, " is in ").concat(country));
}
Describecity('Karachi', 'Pakistan');
Describecity('Tokoyo');
Describecity('Paris', 'France');
//  Q no 39
function cityCountry(city, country) {
    return "".concat(city, " , ").concat(country);
}
console.log(cityCountry("Lahore", "Pakistan"));
console.log(cityCountry("Tokyo", "Japan"));
console.log(cityCountry("Paris", "France"));
