//Immediately invoked function expression (IIFE)

(function chai (){
    console.log(`DB CONNECTED`);
    
})();

//first parentheses is for function and second one is for function call

//to remove the global scope pollution we are using iife

(function chai2(){

    //named IIFE
    console.log(`DB2 CONNECTED`);
    
})(); //gives an error as immediate function does not know where to stop and if we put ; at end of the first iife we do not get any error

(()=>{
    console.log(`HELLO`);
    
})();

//can also give arguments and parameters

((name)=>{
    console.log(`DB CONNECTED ${name}`);
    
})('kushagra') 
//above is simple iife
//(be careful about semicolon)
