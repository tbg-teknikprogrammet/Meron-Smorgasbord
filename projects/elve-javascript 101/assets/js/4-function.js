// //Föräldern sjunger och barnet lyssnar
// console.log("blinka lilla tjärna där")
// console.log("blinka lilla tjärna där")
// console.log("hur jag undrar var du är")
// console.log("fjärran lockar du min syn")
// console.log("likt en diamant i skyn")

// //Barnet nynnar med
// console.log("blinka lilla tjärna där")
// console.log("blinka lilla tjärna där")
// console.log("hur jag undrar var du är")
// console.log("fjärran lockar du min syn")
// console.log("likt en diamant i skyn")

// //Nu sjunger barnet den helt själv
// console.log("blinka lilla tjärna där")
// console.log("blinka lilla tjärna där")
// console.log("hur jag undrar var du är")
// console.log("fjärran lockar du min syn")
// console.log("likt en diamant i skyn")

//This code is WET! Write Everything Twice
//Eftersträva att er kod är DRY! Don't Repeat Yourself
function twinkletwinkle(){
    console.log("blinka lilla tjärna där");
    console.log("blinka lilla tjärna där");
    console.log("hur jag undrar var du är");
    console.log("fjärran lockar du min syn");
    console.log("likt en diamant i skyn");
}

//Call a function - Kalla/Anropa på fubktionen
twinkletwinkle();
twinkletwinkle();
twinkletwinkle();

//Deklarera en funktion
function doSomething(){
    console.log("Hello World");
    console.log("Do Something");
} 
//Anropa funktionen
doSomething();

//Visar innehålet i funktion
doSomething;

//parameter och Argument

//Deklarera en funktion med två stycken parameter
function square(num, num1) {
    console.log(num * num1);
}

//Anropa funktionen med två stycken argument
square(5, 6);

function sayHello(name){
    console.log("Well hello there, dear " + name);
}

//Anropar funktion med ett argument, i form ev en string
sayHello("king");
sayHello("Greta");

function area(length, height){
    console.log("The area of: " + length + "and" + height + "is: " + length * height);
}
area(5, 10);

function greet(person1, person2, person3, person4) {
    console.log("Hej, " + person1 +"!") 
    console.log("Hej, " + person2 +"!") 
    console.log("Hej, " + person3 +"!") 
    console.log("Hej, " + person4 +"!") 
}
greet("jag", "du", "han", "hon");

function squared(x){
    // console.log(x *x);
    return x * x;
}

console.log("4 squared is: "+ squared(4));
var result = squared(10);
console.log(result);