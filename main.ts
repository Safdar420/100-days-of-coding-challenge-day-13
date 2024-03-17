//  Q no 37

function MakeShirts ( size : string = 'Large' , message : string = 'I Love Programming') : void {
    console.log(`Shirt size : ${size}`);
    console.log(`Message on the Shirt : ${message}`);
}

MakeShirts();
console.log('\n');
MakeShirts('Medium');
console.log('\n')
MakeShirts('Small','Progming is my love');

// Q no 38

function Describecity (city : string = "Tokoyo" , country : string = 'Defult Country') : void {
    console.log(` ${city} is in ${country}`);
}

Describecity('Karachi','Pakistan');
Describecity('Tokoyo');
Describecity('Paris','France');

//  Q no 39
function cityCountry (city : string , country : string ) : string {
    return`${city} , ${country}`;
}

console.log(cityCountry("Lahore","Pakistan"));
console.log(cityCountry("Tokyo","Japan"));
console.log(cityCountry("Paris","France"));
