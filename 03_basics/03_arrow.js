const user={
    username: "kushagra",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        //current context
        console.log(this);
        
    }


}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this); //refers to an empty object
// in browser it is Window object


// function chai(){
//     let username="kushagra"
//     console.log(this.username); //not able to use this inside the function  (output: undefined)

//     //this inside function
// }

// chai()


// const chai= function (){
//     let username="kushagra"
//     console.log(this.username)
// }

const chai= ()=>{
    let username="kushagra"
    console.log(this);
    //empty object

    //we can use this inside arrow function
}


//chai()

const addTwo=(num1,num2)=>{
    return num1+num2
}
//explicit return
console.log(addTwo(23,44));

//implicit return 
const addThree=(num1,num2,num3)=> num1+num2+num3
console.log(addThree(323,33,33));

//in curly braces, it is necessary to write return keyword but not in direct

const addOne=(num1)=>(num1+1)
console.log(addOne(3));

const addTwo1=(num1,num2)=>({username: "hitesh"})
console.log(addTwo1(3,4));

//in case of objects we need to wrap it up in small parenthesis

//arrow function will be used mostly in react