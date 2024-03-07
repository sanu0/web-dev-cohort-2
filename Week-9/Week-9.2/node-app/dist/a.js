"use strict";
// let x : number = 101;
// //x = "harkirat"; //This wil give and error as x is typesafed and cant be asssigned to string as it is of type number.
// console.log(x);
//------------------------------------------------------------
// function Hello(str : string){
//     console.log("hello " + str);
// }
// Hello("Sanu")
//------------------------------------------------------------
// //Type inference, as we do not have to give the return type specifically as it infers that when two numbers are added it will give the number type only.
// //Still we do it as a good practice.
//------------------------------------------------------------
// function sum(a : number , b : number) : number{
//     return a + b;
// }
// const val = sum(1,2);
// console.log(val);
//------------------------------------------------------------
//------------------------------------------------------------
// function isLegal(age : number) : boolean {
//     if(age >= 18){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isLegal(23));
//-------------------------------------------------------------
// //Create a function that takes another function as an input and runs it after 1 seconds 
//--------------------------------------------------------------
// function runAfter1sec(fn : ()=> void){
//     setTimeout(fn , 1000);
// }
// runAfter1sec(function(){
//     console.log("hi there")
// })
//---------------------------------------------------------------
//Interfaces
//To assign types to the objects you need interfaces also with this you can use the same type in multiple places...
// interface User{
//     firstName : string,
//     lastName : string,
//     age : number,
//     email? : string //email is optional
// }
// function isLegal(user : User){
//     if(user.age > 18){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isLegal({
//     firstName : "Kumar",
//     lastName : "Sanu",
//     age : 20,
// }))
//---------------------------------------------------------------------------------------------------------------------------
//Implementing Interfaces
//Interfaces have another special property . you can implement interface as class
//-------------------------------------------------------------------------------------------------------------------------
// interface Person{
//     name : string;
//     age : number;
//     greet(phrase : string) : void;
// }
// class Employee implements Person{
//     name : string;
//     age : number;
//     constructor(n : string, a : number){
//         this.name = n;
//         this.age = a;
//     }
//     greet(phrase : string){
//         console.log(`${phrase} ${this.name}`);
//     }
// }
//-----------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------
//Types
// type User = {
//     firstName : string;
//     lastName : string;
//     age : number 
// }
// //type cannot be used to implement classes just like interfaces.
// //it let us use some extra fufture as well
// //1. Union
// type greetArg = number | string;
// function greet(id : greetArg){
//     console.log(id);
// }
// greet(1);
// greet("1");
// // 2. Intersection
// type Employee = {
//     name: string;
//     startDate: Date;
//   };
//   type Manager = {
//     name: string;
//     department: string;
//   };
//   type TeamLead = Employee & Manager;
//   const t: TeamLead = {
//     name: "harkirat",
//     startDate: new Date(),
//     department: "Software developer"
//   };
//---------------------------------------------------------------------------------------------------------------
//Given an array of positive integers as input, return the maximum value in the array
// function max(arr : number[]){
//     let max = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(max([2,43,2,2,22,2,4,56,77,43,2,45,6,4,34,543,2,79,98,76]))
// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }
// function filteredUsers(users: User[]) {
//     return users.filter(x => x.age >= 18);
// }
// console.log(filteredUsers([{
//     firstName: "harkirat",
//     lastName: "Singh",
//     age: 27
// }, {
//     firstName: "Raman",
//     lastName: "Singh",
//     age: 16
// }, ]));
//------------------------------------------------------------------------------
//Enums
/**Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.
Example 1 - Game
Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.

What should the type of keyPressed be?
Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
Should it be numbers? (1, 2, 3, 4) ?

The best thing to use in such a case is an enum.
*/
//type keyInput = "up" | "down" | "left" | "right";
var direction;
(function (direction) {
    direction[direction["Up"] = 45] = "Up";
    direction[direction["Down"] = 46] = "Down";
    direction[direction["Left"] = 47] = "Left";
    direction[direction["Right"] = 48] = "Right"; //48
})(direction || (direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == direction.Up) {
        console.log("Up keu is pressed");
    }
}
//but what if the someone gives doSomething("downrandom")
//This is not a key as you can see it can be solved in one way using "type"
//Another way is to ue Enum
doSomething(direction.Up);
doSomething(direction.Left);
console.log(direction.Up);
console.log(direction.Down);
console.log(direction.Left);
console.log(direction.Right);
//This is better for feew reasons.. like you will get suggestions when u write direction and vscode will give u suggestions
//So enum is preferred over type when it is known that there is a specific set of input to a function
//It is more human readable
