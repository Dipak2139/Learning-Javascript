// console.log("Learning Object Oriented Programming.")

// let ob = {
//     a: 1,
//     b: "Deepu"
// }

// console.log(ob)

// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }

// // we can inherit or prototype animal and rabbit
// rabbit.__proto__ =  animal; // sets rabbit.[[Prototype]] = animal

// class Animal {
//     constructor(name){
//         this.name = name;
//         console.log("OBject has been created..")
//     }

//     eats(){
//         console.log("Eating  ghaas bro.. pleasee let me eat")
//     }

//     jumps(){
//         console.log("Ofcourse I am a animal I can jump bro..")
//     }
// }

// // if we want to inherit the properties of animal class so simply we will do

// class Lion extends Animal{
//     constructor(name){
//         super(name)
//         console.log("Object is created and he is a  lion")
//     }

//     eats(){
//         console.log("Kha raha hoon roarrr")
//     }
// }

// let a = new Animal("Rabbu");
// console.log(a);

// let l = new Animal("Shera");
// console.log(l)  


// getter and setter

// class user{
//     constructor(name){
//         this.name=name;
//     }

//     get name(){
//         return this._name;
//     }

//     set name(value){
//         if(value.length < 4){
//             console.log("Name is too short.");
//             return
//         }
//         this._name = value
//     }
// }

// let User = new user("Dipak")

// console.log(User.name)

// user.name = "harry"
// console.log(user)

class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("Rahul");
  console.log(user.name); // John
  
  user.name = "Dipak" // Name is too short.
  console.log(user.name)