// let a=10
// const b=20 
// var c=30

//{} this is known as scope
//global scope
//var c=300
let a= 300 //a value will be 300 as it is defined in the global scope

if (true){
    let a=10 //block scope
    const b=20 
    console.log("inner: ",a);
    
    // var c=30
    
}
console.log(a);
// console.log(b);
// console.log(c);

//++++++++scope level and mini hoisting in js

function one(){
    const username="kushagra"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
    
}
//one()

//in nested function the child function can access the parent function variable as it is global scope for them

function one(){
    const username="kushagra"
    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}
one()

//child function can access the variable of parent function but not vice versa

if (true){
    const username="kushagra"
    if (username=="kushagra"){
        const website = " youtube"
        console.log(username+website);
        
    }
    //console.log(website);
    
}
//console.log(username);

//+++++++++++interesting+++++++++++++


function addone(value){
    return value+1
}


addone(5)


const addTwo=function(num){
    return num+2                   //expression

}

addTwo(5)

// if the function is hold in the variable then we cannot call it before the declaration (HOISTING)