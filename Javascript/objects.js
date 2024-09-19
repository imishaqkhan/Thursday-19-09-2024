
const person = {
    fname : 'ishaq',
    lname : 'khan',
    age : 24,
    color :'blue'

}
console.log(person.fname +' '+ person.lname + ' is '+ person.age + ' Year old'+'\n'+ 'And his cap is ' + person.color );
// return ishaq khan is 24 year old And his cap is blue

let person2 = {fname : 'ali',lname : 'hussnain', age :20,color:'black'}
Object.assign(person,person2)
console.log(person.fname +' '+ person.lname + ' is '+ person.age + ' Year old'+'\n'+ 'And his cap is ' + person.color )
// return ali hussnain is 20 year old And his cap is black

// object create method
let create = Object.create(person)
create.fname = 'Junaid'
create.lname =  'jamshaid'
console.log(create.fname +' '+ create.lname + ' is '+ person.age + ' Year old'+'\n'+ 'And his cap is ' + person.color )
//return Junaid jamshaid is 20 year old and his cap is black

// object add value
let obj = {}
Object.defineProperty(obj,"'Year'",{value :'2024'})
console.log(obj.year);
// return 2024

Object.defineProperty(person, 'age',{value : 50})

console.log(person.age);
// return 50

//----object entries method

let entries = Object.values(person)
console.log(entries);
// return [ 'ali', 'hussnain', 50, 'black' ]

let person3 = {banana : 300,orange : 450, apple : 150}
let text = ''
for (let [persons,value] of Object.entries(person3)){
    text += persons + ': '+ value +'\n'
}
console.log(text);
// return banana: 300 ,orange: 450 ,apple: 150

// find object key
let key = Object.keys(person3)
console.log(key);
// return [ 'banana', 'orange', 'apple' ]

// fine object value
let value = Object.values(person3)
console.log(value);
// return [ 300, 450, 150 ]

// object prototype
function personinfo(name,age,job){
   this.name = name
   this.age = age
   this.job = job
}
personinfo.prototype.salary = 10000
let newp =new personinfo('ishaq',24,'developer')
console.log(newp.salary);
// return 10000

let seal = Object.seal(personinfo)

console.log( Object.isSealed(personinfo));
// return true

let string = Object.toString(personinfo)
console.log(string);
// retutn function Object() { [native code] }


let tostring = personinfo.toString()
console.log(tostring);
// return function personinfo(name,age,job){
//     this.name = name
//     this.age = age
//     this.job = job
//  }


let pvalue =Object.values(person) 
console.log(pvalue);
// return [ 'ali', 'hussnain', 50, 'black' ]