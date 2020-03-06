// function add(a,b){
//     let c=a+b;
// return c;}


// function subtract(x,y){
//     let r=x-y
//     return r;
// }


// function multiply(x,y){
//     let z=x*y
//     return z;
// }
       

// function divide(x,y){
//     let h=x/y
//     return h;
// }
// let g = subtract(10,5)
// let l = multiply(3,2)
// let f = divide(12,4)
// let j = add(g,l)
// let d = subtract(j,f)
// console.log(g);
// console.log(l);
// console.log(f);
// console.log(d);






//Object literal
//Defining object Person with five properties
// let Person ={
//     name:"rachel",
//     age:22,
//     race:"black",
//     religion:"anglican", 
//    tribe:"mufumbira"
//     } 
// //Printing the results for 5 properties for object Person
// console.log(Person)
// // to change the property of the object, we use the dot notation
// Person.age=27
// console.log(Person.age);

//object factory
// function Person(name,years,ethinicity,){
//     return {
//             names:name,
//             age:years,
//             race:ethinicity
//             }
// }
// let rachel=Person("rachel",22,"white")
// let liza=Person("eliza",20,"black")
// console.log(rachel)
// console.log(liza);


//object constructor
function person(name,years,ethinicity)
{
    this.names=name;
    this.age=years;
    this.race=ethinicity;
}
let rachel=new person("rachel",22,"african")
console.log(rachel);

//example of constructor
function phone(name,OS,Countryoforigin)
{
this.names=name;
this.system=OS;
this.origin=Countryoforigin;
}
let tecno=new phone("tecno","android","Hong Kong")
let Iphone=new phone("iphone","IOS","China")
let infinix=new phone("infinix","andriod","France")
let Lenovo=new phone("Lenovo","android","China")
let Huawei=new phone("Huawei","android","China")
let Konka=new phone("Konka","android","China")
let Blackberry=new phone("Blackberry","android","Canada")
console.log(tecno);
console.log(Iphone);
console.log(infinix);
console.log(Lenovo);
console.log(Huawei);
console.log(Konka);
console.log(Blackberry);

//class
class car {
    constructor(name, color, model,horsepow) {
        this.names = name;
        this.color = color;
        this.model = model;
        this.horsepower= horsepow
    }
    start(){
 console.log("this car starts by pressing the ignition button")
    }
}
let Tesla=new car("Tesla","red","roadster","10000 HP")
console.log(Tesla);
Tesla.start();
//create a class person
class person{
    constructor(name,color,height,weight){}
    talk(){ console.log()}
    walk(){}
    laugh(){}
    cry(){}
}
let rachel=new person()
let prim=new person()
let liza=new person()
let matthew=new person()
let paul=new person()


             