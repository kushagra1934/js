//primitive and non primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// js is dynamically typed
const score =100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

const bigNumber=3224455n


// Reference Type (non primitive)

//Arrays, Objects, Functions

const heros=["shaktiman","nagraj","doga"] //arrays

let myobj={
    name:"kushagra",
    age: 22,


}


const myfunction=function(){
    console.log("Hello World");
    
}

console.log(typeof myfunction); //function object

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

