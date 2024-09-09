const name="kushagra"
const repoCount=50

console.log(name+repoCount+" value"); //outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String ("Kushagra-sx")

console.log(gameName[0]);
/*String {'Kushagra'}
0: "K"
1: "u"
2: "s"
3: "h"
4: "a"
5: "g"
6: "r"
7: "a"
length: 8
[[Prototype]]: String
[[PrimitiveValue]]: "Kushagra"*/

console.log(gameName.__proto__); //gives an empty object but has many functions inside it

console.log(gameName.length); //8

console.log(gameName.toUpperCase()); //original string is not changed 
console.log(gameName.charAt(6));

const newString=gameName.substring(0,4)

console.log(newString); //4 characters 0->n-1

const anotherString=gameName.slice(-8,4)
console.log(anotherString);



const newStringOne="   jerier   "
console.log(newStringOne.trim()); //works on whitespaces and on line terminators

const url="https://kushagra.com/kushagra%20saxena"

console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(gameName.split('-'));
