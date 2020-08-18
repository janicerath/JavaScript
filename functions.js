//functions are datatypes in JS

function Add(x,y) {
    return x+y;
}

function Print () {
    console.log('function is printed.')
}

let multiply = function(x,y){
   let product = x*y;
   return product;
}

let x;
x = function() {
    return 5-2;
}

let sum = Add(false,4);
console.log(sum);
console.log(typeof product);
console.log(multiply(false,4));
console.log(typeof product);
console.log(multiply);
console.log(x());
