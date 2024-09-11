function sayMyName(){
    console.log("Kushagra");
    
}

//sayMyName();

// function addTwoNumbers(number1,number2){ //parameters
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){ //parameters
    // let result=number1+number2
    // return result
    // console.log("kushagra"); //wont be executed 
    return number1+number2
}



//addTwoNumbers()  //NaN
const result=addTwoNumbers(35,44)
//addTwoNumbers(43,"43")
//console.log("Result", result); //undefined as function does not return anything

function loginUserMessage(username){  //can also give default predefined value (username="sam")
    // if (username==undefined){
    //     console.log("please enter a username");
    //     return
    // }
    if (!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("kushagra")); //kushagra just logged in 

//console.log(loginUserMessage());
//undefiend just logged in 
 
function calculateCartPrice(...num1){ //rest operator
    return num1
}

console.log(calculateCartPrice(200,44,55));


const user={
    username:"kushagra",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username id ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user) //can also send the object inside the function call handleObject({
//    username: "Sam",
//    price:399

//})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,100,600])); //same same but different


