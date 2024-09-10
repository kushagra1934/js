//arrays
// they are resizable
//deep copy and shallow copy 

const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","nagraaj"]

const myArr2=new Array(1,2,3,4)

//Array Methods
// myArr.push(6)
// myArr.pop()

//myArr.unshift(9)  //shifts every element
//myArr.shift() //removes the element from the start
console.log(typeof myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr=myArr.join()  //converts object to string
// console.log(myArr);
// console.log(typeof newArr);


//slice,splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);

console.log("B ",myArr);

const myn2=myArr.splice(1,3) //original array gets manipulated
console.log(myn2);

console.log("C ",myArr);

