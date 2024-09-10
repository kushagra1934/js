//singleton
//Object.create

//object literals

const mySym= Symbol("key1")



const JsUser={
    name:"Kushagra",
    age:18,
    //mySym:"mykey1", //string(it is not used as a symbol)
    [mySym]:"mykey1",  //for symbol use [] brackets
    location:"Lucknow",
    email:"kushagra@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]

} 

// console.log(JsUser.email);
// console.log(JsUser["email"]); //better way

// console.log(JsUser[mySym]);  //can use normally

JsUser.email="kush@gmail.com"  //change the value
//Object.freeze(JsUser) //now there won't be any change reflected in the object and no error will be given

JsUser.email="kushagra@micro.com"
//console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello JS User");
    
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





