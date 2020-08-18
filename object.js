let x = { 
    name : "Janice",
    age : 30,
    gender : 'F'
}

x.gender = 'M';
x.height = 5.3;
x.email = "janrath@tekarch.com";
x['country'] = 'USA'
console.log(x);
console.log(x.name);
console.log(x['email']);
console.log(x['age']);
let m;
let population = 10000;
if (population > 100000) {
    m = 'city';
} else {
    m = "town";
}
x[m] = 'Cypress';

console.log('******************');
console.log(x);