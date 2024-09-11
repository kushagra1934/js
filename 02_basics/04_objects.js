//const tinderUser=new Object() //singleton object
const tinderUser={}  //non-singleton object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false


console.log(tinderUser);
const regularUser={
    email:"someone@gmail.com",
    fullname:{
        userfullname:{
            firstname:"kushagra",
            lastname:"saxena"
        }
    }
    
}


console.log(regularUser.fullname?.userfullname.lastname);
//? gives the output if present

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//console.log(obj3); //same problem as arrays


//const obj3 = Object.assign({},obj1,obj2) //better //if not given then all values are going to obj1 i.e target is obj1 and obj2 goes into it. if {} are given then it is the target and rest are source.

const obj3={...obj1,...obj2} //another method
//console.log(obj3);


//these can be used in databases
const users=[
    {
        id:1,
        email:"kushagra@gmail.com"

    },
    {
        id:1,
        email:"kushagra@gmail.com"

    },
    {
        id:1,
        email:"kushagra@gmail.com"

    },
]

console.log(users[1].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //if the property is available or not (true in this case)


//read the documentation of objects on mdn


//destructuring of object
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"

}


// course.courseInstructor

const {courseInstructor}=course

console.log(courseInstructor);
//will bw used in react


// {
//     "name":"hitesh",
//     "coursename":"js in hindi ",
//     "price":"free"
// }  this is a valid json structure


//it can be in form of 

[
    {},
    {},             //this is an array of objects, also of the json format
    {}
]

//json formatter, etc
