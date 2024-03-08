let x : number = 101;
//x = "harkirat"; //This wil give and error as x is typesafed and cant be asssigned to string as it is of type number.
console.log(x);


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

//-------------------------------------------------------------------------------------------------------
// function runAfter1sec(fn : ()=> void){
//     setTimeout(fn , 1000);
// }
// runAfter1sec(function(){
//     console.log("hi there")
// })
//--------------------------------------------------------------------------------------------------------
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
interface Person{
    name : string;
    age : number;
    greet(phrase : string) : void;
}

class Employee implements Person{
    name : string;
    age : number;

    constructor(n : string, a : number){
        this.name = n;
        this.age = a;
    }
    greet(phrase : string){
        console.log(`${phrase} ${this.name}`);
    }
}

const e = new Employee("sanu" , 23);
console.log(e.name);
//-----------------------------------------------------------------------------------------------------------------------------

/**What is the difference between interfaces and types 
 * 
 * ans - Interfaces can be extended to a class it acts like blueprint while types can be used for union and intersections
 */
//-------------------------------------------------------------------------------------------------------------------
//Types

// type User = {
//     firstName : string;
//     lastName : string;
//     age : number 
// }
// //type cannot be used to implement classes just like interfaces.
// //it let us use some extra feature as well

// //1. Union-----------------------------------------------------

// type greetArg = number | string;   //either a number or a string (types let you do that!)

// function greet(id : greetArg){
//     console.log(id);
// }
// greet(1);    //does work
// greet("1");  //does work as well

// // 2. Intersection-----------------------------------------------

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

// enum direction{
//     Up = 45,     //45  (0 is by deafult if not specifically initislised)
//     Down,   //46
//     Left,   //47
//     Right   //48
// }
// function doSomething(keyPressed : direction){
//     if(keyPressed == direction.Up){
//         console.log("Up key is pressed");
//     }
// }
//but what if the someone gives doSomething("downrandom")
//This is not a key as you can see it can be solved in one way using "type"
//Another way is to ue Enum
// doSomething(direction.Up);
// doSomething(direction.Left);
/** 
console.log(direction.Up)
console.log(direction.Down) 
console.log(direction.Left)
console.log(direction.Right) */ 


//This is better for feew reasons.. like you will get suggestions when u write direction and vscode will give u suggestions
//So enum is preferred over type when it is known that there is a specific set of input to a function
//It is more human readable


//Common use case in express
/**
 * enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
})
 */

//----------------------------------------------------------------------------------------------------

//Generics
// type Input = number | string;
// function firstEl(arr : Input[]){
//     return arr[0];
// }
// const value = firstEl(["Kumar","Sanu"]);
// //console.log(value.toUpperCase());
// /**So this is the error we get as .toUpperCase() method is only for the string type and not for number or Input type that we have created!
//  * This is a problem but how can we fix it?
// */
// /**So this issue can be solved using Generics
//  * Generics enables you to create components that work with any data type while still providing compile time type safety.
// */

// function identity<T>(arg: T): T {
//     return arg;
// }
// //What T refers here is that this identity func can be called with any value 

// let output1 = identity<string>("myString"); //Here it is called  with T set to Strings
// let output2 = identity<number>(100); //Here it is called with T set to Number
// output1.toLowerCase()

// // It is like you can have created two variations of a function one with string input and other with number input.
// //You can think of generics of making multiple variations of your function.

// function getFirstElement<T>(arr: T[]) {
//     return arr[0];
// }

// //const el = getFirstElement(["harkiratSingh", "22"]);
// const el = getFirstElement<string>(["harkiratSingh", "22"]);
// const el1 = getFirstElement<number>([1,2,3,4]);
// const el2 = getFirstElement<boolean>([true, false]);
// const el3 = getFirstElement<string | number>(["harkiratSingh", "22" ,1,2,3,34]);

// //All of these will work without <string> or <string|number> as well as in that case generics will auto identify the types.

// console.log(el.toLowerCase())

//----------------------------------------------------------------------------------------------------

//Better way to import and export modules

//math.ts
// export function add(x: number, y: number): number {
//     return x + y;
// }

// export function subtract(x: number, y: number): number {
//     return x - y;
// }

//main.ts
// import { add } from /*"./math"*/

// add(1, 2)


//-----------------------------------------
//Default exports

//calculator.ts

// export default class Calculator {
//     add(x: number, y: number): number {
//         return x + y;
//     }
// }

//main.ts

// import Calculator from './Calculator';

// const calc = new Calculator();
// console.log(calc.add(10, 5));