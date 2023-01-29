//Functions to interact with the user: alert, prompt and confirm.

//1. alert() - shows a message.

//2. prompt() - shows a message, input text. It returns the text on ok or, if Cancel button or Esc is clicked, null.

//3. confirm() - shows a message, confirm with “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc. 

//Note: All these functions pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.
//alert("hey what are you doing")

/*
let age=prompt("Enter your age",20); //by default print 20
if(age!=null){
    document.write(`you have successfully written your age ,${age}`)
}
else{
    document.write('please enter your age')
}


let response = confirm("Are you sure! to delete this")
if(response){
    document.write('deleted')
}
else{
    document.write('not deleted')
}
*/

//JavaScript variables can be converted to a new variable and another data type:

//1. By the use of a JavaScript function
//2. Automatically by JavaScript itself

//Functions that we will use for converting type are

//1. String()
//2. Number()
//3. Boolean()
 //let typingEl = "name"
 //alert(typeof typingEl)

/*
 //automatic conversion example
 let typingEl = 5 + null
 document.write(typeof typingEl+ " "+typingEl)
 //print 5 automaticall take null as 0

 let typingEl1 = "five" + null
 document.write(typeof typingEl1+ " "+typingEl1)
//accordingly it will make null as string and print fivenull

let typingEl2 = "5"+2  //52 take + as string
 document.write(typeof typingEl2+ " "+typingEl2)

 let typingEl3 = "5"-2  //3 take - as number bcs not use in string 
 document.write(typeof typingEl3+ " "+typingEl3)

 let typingEl5 = "5"* "yes"  //NaN 
 document.write(typeof typingEl5+ " "+typingEl5)

 let typeel1 = 5;
 let newtype1=String(typeel1)
 document.write(typeof newtype1) //convert no to string


 let typeel2 = "5";
 let newtype2=Number(typeel2)
 document.write(typeof newtype2) //convert no to string

 let typeel3 = 5;
 let newtype3=Boolean(typeel3)
 document.write(typeof newtype3) //convert no to string


let str1 ="jyoti"
let str2 ="mishra"
document.write(str1.concat(" " ,str2))  //jyoti mishra


let substring1 =" This is javascript for beginners. "
document.write(substring1.substr(5,13)+" ")//is javascript.. staring from 5 position and no of character after 5th position is printed

document.write(substring1.substring(5,13)) //is javas...starting index 5 ending index 12+1
 
document.write(substring1.indexOf("good")) //-1
document.write(substring1.indexOf("java")) //8 starting index of j
document.write(substring1.lastIndexOf("n")) //28

//to remove the extra space from starting and ending both
console.log(substring1)
let trimEl=substring1.trim()
console.log(trimEl)

console.log(substring1.trimStart())
console.log(substring1.trimEnd())
console.log(substring1.toLowerCase())
console.log(substring1.toUpperCase())
console.log(substring1.replace("This","that"))

// to check wheather the string is present or not
console.log(substring1.includes("java")) //true



A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

JavaScript Function Syntax
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}


function twoTable(){
    for(let i =1;i<=10;i++){
        document.write(`2 * ${i}= ${2*i}`)
        document.write("<br>")
    }
}
twoTable()
document.write("<br><br>")

function theTable(num){     //parameter
    for(let i =1;i<=10;i++){
        document.write(`${num} * ${i}= ${num *i}`)
        document.write("<br>")
    }
}
theTable(3)//argument


function add(){
    if(arguments.length==0){
        console.log("empty")
    }
    else{
        let sum=0;
        for(let i=0;i<arguments.length;i++){
            sum+=arguments[i]
        }
        console.log(sum) //18
    }

}
add(3,4,5,6)



In JavaScript there are two types of scope:

Local scope
Global scope
JavaScript has function scope: Each function creates a new scope.

Scope determines the accessibility (visibility) of these variables.

Variables defined inside a function are not accessible (visible) from outside the function.

Local JavaScript Variables
Variables declared within a JavaScript function, become LOCAL to the function.
Local variables have Function scope: They can only be accessed from within the function.


Global JavaScript Variables
A variable declared outside a function, becomes GLOBAL.
A global variable has global scope: All scripts and functions on a web page can access it. 


An anonymous function is a function without a name. An anonymous function is often not accessible after its initial creation. We often use anonymous functions as arguments of other functions.


let write=function(){
    console.log("hello world")
}
write()


//immediately invoked function

(function(){
    console.log("hey how are you??")
})()

//if we use thirdparty code and not knowing that the var which we use in our function is also use by third party then we use immediate invoke func so that we make the scope of var local.. also to remove the conflict.
//without assign it into variable directily call i.e function is created and executed at same time


//objects
javaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects. 



Syntax: objectName.propertyName

let objectEl={
    password:"ndjnfjnf",
    email:"jyotihra28@gmail.com"
    
}
objectEl.age='22'
delete objectEl.age
//console.log(objectEl.email)  or
//console.log(objectEl['email'])

//console.log(objectEl) //{password: 'ndjnfjnf', email: 'jyotihra28@gmail.com'}

//console.log('height' in objectEl) //false ..to check property exist or not
 for(let key in objectEl ){
    //console.log(key)// email password
    console.log(objectEl[key]) //print value
 }

or
let person= new Object()
person.name="jyotimishra"
person.age=22

 
Defining methods

A method is a function associated with an object, or, put differently, a method is a property of an object that is a function. Methods are defined the way normal functions are defined, except that they have to be assigned as the property of an object. 

let objectEl={
    name:"jyoti",
    title: "mishra",
    age:23
}
//object action
/*
objectEl.show=function(){
    console.log("hey whats up! dude..")
} 
objectEl.show()

//or

function greet(){
    console.log("hey whats up! dude..")
}
objectEl.show=greet
objectEl.show()

//or



let objectEl={
    name:"jyoti",
    title: "mishra",
    age:23,
    show:function(){
        console.log("hey whats up! dude..")
    } 
}
objectEl.show()



let car={
    brand:"tata",

}
let objectEl={
    name:"jyoti",
    title: "mishra",
    age:23,
    show:function(){
        console.log(this.name + " "+car.brand)

    }
}
objectEl.show()

let x = Math.floor(Math.random()*10) //0-9
//console.log(x)
let k = Math.floor(Math.random()*10)+1 //1-10
//console.log(k)

let y= Math.floor(Math.random()*(25-11)) +11 
console.log(y)//11-24

//object constructor

function personProperty(name,age,nationality){
    this.firstname=name;
    this.nationality=nationality;
    this.age1=age
}

var person = new personProperty("jyoti",22, "indian")
console.log(person.firstname)


const arr = [1, 2, 3]
document.write()
var sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]

}
var ans= sum/arr.length
console.log(ans)
let listEl= document.getElementById("list")
let newList = document.createElement("li")
newList.textContent="list5"
listEl.appendChild(newList)

let addBeforelist3= document.createElement("li")
addBeforelist3.textContent="list6"

let pos=listEl.firstChild

//listEl.insertBefore(addBeforelist3,pos)

let pos1=listEl.firstElementChild.nextElementSibling.nextElementSibling.nextSibling
listEl.insertBefore(addBeforelist3,pos1)

//to add before list ,,ul

let bodyEl= document.body

let elm = document.createElement("h1")
elm.textContent="this is the list";
 
bodyEl.insertBefore(elm, listEl)*/

//remove

//let parent = document.getElementById("list")

//let elm=parent.firstElementChild.nextElementSibling
//console.log(elm)

//parent.removeChild(elm)

//clone or copy 
//let elm = document.createElement("h1")
//elm.textContent="this is the list";

//parent.appendChild(elm) //add in last

//let cloneEl = parent.cloneNode(true)
//document.body.appendChild(cloneEl)


 //replace

 //let replace = document.createElement("li")
 //replace.innerText="list7"

 //let replaceElement = parent.firstElementChild.nextElementSibling

 //parent.replaceChild(replace,replaceElement)


 //inline style in javascript
/*
 let btnEl  = document.getElementById("btn")

 btnEl.style.cssText="background-color:red"

 let btnEl1  = document.getElementById("btn1")
 btnEl1.setAttribute("style","background-color:green; padding:40px;")

 let btnEl2 = document.getElementById("btn2")
 btnEl2.style.background ="cyan"

//funct declaration
function getObjKeys(){
    console.log( "hey whats up!!")

 }
 
 getObjKeys()
 

 //funct expression
const  getObjKeys1=function(){
    console.log( "hey whats up!!")
   
  
 }
 
 getObjKeys1()

 //arrow func
const  getObjKeys2 =()=>{
    console.log( "hey whats up!!")
  
 }
 
 getObjKeys2()
 
let arr= [2,3,4,8,6];
//function myfunc(number, index){
 //   console.log(`number is ${number} and its index ${index}`);
//}
/*
for(let i=0;i<arr.length;i++){
    myfunc(arr[i], i);
}

//ForEach pass... function as argument... in foreach
//arr.forEach(myfunc)

//anonomous function
arr.forEach(function myfunc(number , index){
    console.log(`number is ${number} and its index ${index}`);
})


const users= [
    {username:"jyoti", age:21},
    {username:"priya", age:24},
    {username:"sonal", age:18},
    {username:"anannya", age:25}


]
function myfunc(info){
    console.log(info.username)
}

users.forEach(myfunc)


//or

const users= [
    {username:"jyoti", age:21},
    {username:"priya", age:24},
    {username:"sonal", age:18},
    {username:"anannya", age:25}


]


users.forEach(function myfunc(info){
    console.log(info.username)
})

//map


const users= [
    {username:"jyoti", age:21},
    {username:"priya", age:24},
    {username:"sonal", age:18},
    {username:"anannya", age:25}


]


const userarray=users.map(function myfunc(info){
    //console.log(info.username)
    return info.username
    
})
console.log(userarray)// give undefined userarray ,if not return 

//filter : always return boolean value or return array of value whose value is true

const arr=[1,8,5,7,6];
function  myfunc2(number){
    if(number%2==0)
    return number
}

const iseven=arr.filter(myfunc2)
console.log(iseven)

//reduce

const arr= [2,8,9,10,45]

function sumAll(accumulator, currenvalue){
    return accumulator+currenvalue;
}
const sumofAllNo = arr.reduce(sumAll)//74
const sumofAllNo = arr.reduce(sumAll,100) //100 as intitial value if want output=174
console.log(sumofAllNo)

// accumulator    currentvalue     return
 //    2               8               10
 //    10              9                19
 //    19              10               29



const product =[
    {productId : 1,placeItem: "laptop", price:22000},
    {productId : 2,placeItem: "mobile", price:12000},
    {productId : 3,placeItem: "earphone", price:2000},
    {productId : 4,placeItem: "clothes", price:500}


]
function totalPrice(accumulator,currentvalue){
    return accumulator + currentvalue.price;
   
}
const totalproductPrice= product.reduce(totalPrice,0)

console.log(totalproductPrice)


//sort

const arr=[1,14,5,48,2,56]
arr.sort((a,b)=>{
    //return a-b; // ascending order
    return b-a;  // descending order

})

console.log(arr)


//example 2
const product =[
    {productId : 1,placeItem: "laptop", price:22000},
    {productId : 2,placeItem: "mobile", price:12000},
    {productId : 3,placeItem: "earphone", price:25000},
    {productId : 4,placeItem: "clothes", price:500}


]

function myfunc(a,b){
    return a.price - b.price

}
const lowTohigh= product.sort(myfunc)
console.log(lowTohigh)



//find

const animal =[ "dog" , "cat" ,"goat","panda"]
animal.find((animal)=>{
    return String.length==3;
})

console.log (animal)


//prototype is like empty object {}

//every


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]
function myfunc(number){
    return number.price<30000;

}
const userResult = userCart.every(myfunc)
console.log(userResult)//false

// give boolean true or false if condition is applicable to every element.



const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]
function myfunc(number){
    return number.price<30000;

}
const userResult = userCart.some(myfunc)
console.log(userResult)//true


//fill

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(0,2,5);// value , start ,end
console.log(myArray);


const arr = new Array(10).fill(0);
console.log(arr)


//splice

const arr=[1,23,58,92,63,12]
//const ans=arr.splice(1,2)//index,no of item to be deleted
//console.log(ans)
//console.log(arr)//change original array output [1,92,63,12]

//const ans = arr.splice(2,0,"jyoti")
//console.log(arr)

const ans = arr.splice(2,1,"jyoti")
console.log(arr)//[1, 23, 'jyoti', 92, 63, 12]


//set 

//const setEl= new Set([1,5,8,9])
const setEl= new Set();
setEl.add(1);
setEl.add(7)
setEl.add(17)
setEl.add(47)
setEl.add(57)
//duplicate not allow
if(setEl.has(5)){
    console.log(" present")

}
else{
console.log("not present")
}
//it is also  iterable  like array and string
for(let number of setEl){
    console.log(number)
}
//Map
var userinfo={
    age:24,
    city:"delhi"
}
const extrainfo= new Map()
extrainfo.set(userinfo,{"name":"jyoti", "university":"aktu"})
console.log(extrainfo.get(userinfo).name)


//const info = new Map();
//info.set("firstname","jyoti")
//info.set("lastname" , " mishra")
//console.log(info)




//call

const userinfo={
    username:"jyoti",
    age:52,
    about:function(favsong, subject){
        console.log(this.username , this.age,favsong,subject)
    }
}
const user1={
    username:"riya",
    age:5
}

//const info=userinfo.about.call(user1,"sa re ") //riya 5 sa re undefined
//const info= userinfo.about.apply(user1,["aey vatan mere vatan","hindi"]) // in apply pass as a rray

const myfunc = userinfo.about.bind(user1,"aey vatan mere vatan","hindi")  //store value in function
myfunc()
//riya 5 aey vatan mere vatan hindi


// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);  // undefined undefined bcs this for arrow function take this from surrounding ..one level up
    }   
}

user1.about(user1);

 const user1 = {
     firstName : "harshit",
     age: 8,
     about(){
         console.log(this.firstName, this.age);
     }   
 }



user1.about();

//method :  function inside object

const myfun={
    username:"jyoti",
    age : 12,
    standard :"10th",
    user : function(){
        return (`this is ${this.username}`)
    },
isage : function(){
    return `this is ${this.username} and age is ${this.age}`
}


}
console.log(myfun.user())
console.log(myfun.isage())


//if we have to create data for multiple peoples for this we have to make a function 
//which create empty object first 
//add key value pair
// return object


function createuser(username,age,standard){
const people = {}
people.username=username;
people.age=age
people.standard=standard

people.user = function(){
    return (`this is ${this.username}`)
}
people.isage = function(){
return `this is ${this.username} and age is ${this.age}`
}


return people;
}

const user1 = createuser("jyoti",12,12)

const user2 = createuser("jyotika",18,10)

console.log(user1.isage())
console.log(user2)

//but in this every time method is getting called so jitni bar user bnega utni bar method so take more memory to avoid this method is same for all
//user so create one time only make object and write mehtod in it
const usermethod={
user : function(){
    return (`this is ${this.username}`)
},
isage : function(){
return `this is ${this.username} and age is ${this.age}`
}
}


function createuser(username,age,standard){
   // const people = {}
    const people = Object.create(usermethod)//jitni bar usermethod object me function bnayenge utni bar yha likhna hoga if we forgrt to write then 
    //this is sol  usermothod object is __proto__
    //console.log(people.__proto__)
    people.username=username;
    people.age=age
    people.standard=standard
    people.user = usermethod.user
    
   
    
    
    return people;
    }

    
const user1 = createuser("jyoti",12,12)

const user2 = createuser("jyotika",18,10)

console.log(user1.user())
console.log(user2.isage())  // this is jyotika and age is 18*/

//instead of making object and write method there we use prototype to add key value pair in functon
/*
function userInfo(username, city,education){

    const peopleInfo = Object.create(userInfo.prototype)
    peopleInfo.username=username;
    peopleInfo.city=city;
    peopleInfo.education=education;
    return peopleInfo
    

    
}

userInfo.prototype.user = function(){
    return (`this is ${this.username}`)
}
userInfo.prototype.isage = function(){
    return `this is ${this.username} and age is ${this.age}`
}

const user1= userInfo("jyoti","varanasi","btech")

console.log(user1.user())

var list = [45,22,11,22];
var result = list.reduce(function(a,b){
    return a+b;
});
console.log(result);

var list = [5,10,15,20,25,30,35];
var result = list.map(function(input,index){
       return index;
});
console.log(result);

//splice

const arr=["apple","banana","mango"];
const ans = arr.splice(1,1,"kiwi") 
document.write(arr)


//slice
const arr=["apple","banana","mango"];
const ans=arr.slice(1,3)
document.write(ans + "<br>")

document.write(arr)


var date = new Date();
var month= date.getDay();
document.write(month)



//closure
function myfun(firstname , lastname){
    var a = "hey!"
    var b = "what up"
    return function myfunction(){
        document.write(firstname + " "+ lastname)
    }
}
var funcRes = myfun("jyoti" , "mishra")
funcRes()

//let btnEl1  = document.getElementById("btn1")
 //btnEl1.setAttribute("style","background-color:green; padding:40px;")

 let listEl = document.querySelector("#list")
 listEl.insertAdjacentHTML("beforeend" , "<li>list 7</li>")

 let allbtn = document.querySelectorAll(".allbutton  button")

allbtn.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget.textContent)
    })
})


 function myfunc(number){
    return function(add){
        return number +add;
    }
 }
 const res = myfunc(10);
 console.log(res(12) )

 
 const arr  = [1, 2, 3, 4, 5];


 // length is coming from Array class
 console.log(arr.length); // 5
 
 
 // valueOf() is coming Object class
 console.log(arr.valueOf()); // [1, 2, 3, 4, 5]

const myfunc ={
    username:"jyoti",
    about : function(){
        console.log(`this is ${this.username} live in ${this.city}`)

    }
}
const extrainfo = new Map()
extrainfo.set(myfunc,{city:"mumbai"})
myfunc.about()
//console.log(extrainfo.get(myfunc).city)


var list = [5,10,15,20,25,30,35];
var result = list.map(function(input,index){
       return index;
});
console.log(result);

let add = document.getElementById("add")
let remove = document.getElementById("remove")
const formEl  = document.querySelector(".form")
const textEl = document.querySelector(".form input[type=text]")
const listEl = document.querySelector(".listel")
let child = listEl.firstElementChild

formEl.addEventListener("submit",(e)=>{
    e.preventDefault() 
     // prevent refreshing the web page again and again
     child.textContent =textEl.value
     textEl.value=""
     remove.addEventListener("click",()=>{
        child.textContent=""
        textEl.value=""
        })
        add.addEventListener("click",()=>{
            textEl.value=""
            
        })
console.log(textEl.value)
})

//synchronous and asynchronous 
//synchronous -line wise execution
console.log('hello')
for(let i=0;i<10000;i++){
    console.log("hey inside")
}
console.log("halo last")

//js is synchronous and single threaded 


//then how asynchronous 

console.log("my name is jyoti")//1
function myfunc(){
    console.log("hey whats up")//3
}
setTimeout(myfunc,1000)
console.log("aww")//2
*/

//promise is feature of browser not javascript 
//it is done by asynchronously
/*
const bucket =['rice','vegetables','salt','sugar']
const myPromises = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("rice")){
        resolve ("you made it")
    }
    else{
        reject ("sorry for that")
    }

})

myPromises.then((value)=>{
    console.log(value)

})

function myfunc(){
    var res= "hey"
    return new Promise((resolve,reject)=>{
if(res==="hey"){
    resolve("you did it hurray")
}
else{
    reject("best of luck for next time")
}

    })
}

myfunc().then((value)=>{
    console.log(value)
})


//promise resolve

const myPromises = Promise.resolve("hey")
myPromises.then((value)=>{
    console.log(value)
})


//promise chaining

function myfunc(){
    var res= "hey"
    return new Promise((resolve,reject)=>{
if(res==="hey"){
    resolve("you did it hurray")
}
else{
    reject("best of luck for next time")
}

    })
}

myfunc().then((value)=>{
    console.log(value)
    value+="bar"
    return value  //return promise you did it hurraybar
}).then((value)=>{
    console.log(value)  //promise you did it hurraybar
    value+="baaz"
    return value
}).then((value)=>{
    console.log(value)//you did it hurraybarbaaz
})

var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")

function myfunc(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.innerText=text;
                element.style.color= color
                resolve()
            }
            else{
                reject("element not found")
            }

        },time)
    })
}
myfunc(one , "one","green",1000)
.then(()=>{
    return myfunc(two , "two","red",1000)
})
.then(()=>{
    return myfunc(three , "three","blue",1000)
})
.then(()=>{
    return myfunc(four , "four","orange",1000)
})
.then(()=>{
    return myfunc(five, "five","pink",1000)
})
.then(()=>{
    return myfunc(six, "six","yellow",1000)
})
.catch((error)=>{
alert(error)
})

function promiseMe(time , data) {
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
  resolve(data)

},time)
     
    })
}
promiseMe(1000,"hi").then((resolve)=>{
    console.log(resolve)
})

//destruction   array ke hrek value ko alg alg variable me store krana
//array destructuring 
let array =["pensile","150","mumbai"]
let [product ,price, city]=array
console.log(product)


//destruction array inside array
let array= ["pensile",150,"mumbai", ["standard","maths"]];
let [product ,price,city,[stand,subject]]=array
console.log(subject)

/*
//default parameter
let myname = function(name="noname"){
    console.log(name)
}
//myname("jyoti")//jyoti
myname()//noname



const people ={
    username:"jyoti",
    city:"varanasi",
    city:"mumbai"
}
const peopleArray =[people,people,people]
peopleArray[1].username="anu"
console.log( peopleArray[0].username)
console.log(people.city)


//class and object

class personInfo{
    constructor(username,city){
        this.name = username
        this.location = city
    }
    //we can also define the property outside constructor in ES6
    //also we can use arrow function in side class in ES6
    age =28

    mymethod(){
        console.log("hey this is the method of the class personInfo")
        console.log(this.name)
    }
}
//inheritance
class myinheritence extends personInfo{
   hello(){
    console.log("hey whats up im inheritence")
   }
}
//make object of the claa personInfo

let object = new personInfo("jyotimishra" , "varanasi")
let object2= new myinheritence("mansi","mumbai")
console.log(object2.name)//mansi
console.log(object) //{name: 'jyotimishra', location: 'varanasi'}
//console.log(object.name)//jyotimishra
//console.log(object.location)//varanasi
//object.mymethod()//hey this is the method of the class personInfo


//spread operator 
 let list =["audi" ,"bmw","farari"]
 console.log(...list,"nano") //audi bmw farari nano

 let myobject ={
    username:"jyoti",
    location:"varanasi"
 }
let newInfo ={
    ...myobject, //all the property of myobject comes in newInfo
    age:22

}
console.log(newInfo)//{username: 'jyoti', location: 'varanasi' ,age: 22}
console.log(newInfo.location)//varanasi


//rest operator => when ...agr is use in function argument
function myfunc(a,b,c){  // by using rest operator we dont need to define parameter for arguments
    console.log(a)//2
}
myfunc(2,5,7)


//we can  write it like this

function myfunc(...all){  
    console.log(all)//[2, 5, 7]
    console.log(all[2])//7
}
myfunc(2,5,7)


//object destructuring  => every property  of object will be store in variables

const myobj ={
    username: "jyotimishra",
    city:"varanasi"
}
console.log(myobj.username)//jyotimishra
let  {username,city}=myobj
console.log(username) //jyotimishra*/


//reference(array,object) and primitive type(string,number)



let num1 =100;
let num2 =num1;
console.log(num1)//100
console.log(num2) //100 value will be copy in num2 in primitive type so we can treat them differently
num2=50;
console.log(num2)//50

 //but in reference type it will assign 

 let person1 ={
    username:"jyoti",
    city:"varanasi"
 }
 //let person2 = person1  //not copying person1 in person2  it basically means person2 is pointing to person1.
 //so whatever we change in person2 also change in person1.

 //console.log(person1.username)
 //console.log(person2.username)

 //person2.username = "alisa"
 //console.log(person1.username)//alisa

 //person1.username="riya"
 //console.log(person2.username) //riya   

 //for copying person1 property in person2 use spread operator

 let person2={
    ...person1
 }
console.log(person2.username) //jyoti



//access object property without using . 

const object ={name:"jyoti",nationality:"indian",city:"varansi"}
const {nationality}=object;
console.log(nationality) //indian*/


const arr=[2,8,6,9,7];
function myfunc(a,b){
    return b-a;
}

const result=arr.sort(myfunc);;
console.log(result)

//how to find os name
console.log(navigator.platform)

//event delegation :- we provide event listener to the parent and access child with the help of that event
//otherwise takes lot of memory with support to adding extra elemnt .


const listEl=document.querySelector("#list")
listEl.addEventListener('click' ,(event)=>{
    console.log(event)
    if(event.target.tagName==='LI'){
        //window.location.href+="#"+event.target.id
        console.log("list is clicked")
    }

})


//flatten then array

const arr=[
    [1,2],
    [3,4,5,6],
   // [8,9,3,4,56]
    [8,9,[3,4],56]//[1, 2, 3, 4, 5, 6, 8, 9, Array(2), 56]//nested inside other



]

let flatten = [].concat(...arr)
console.log(flatten)//[1, 2, 3, 4, 5, 6, 8,9, 3,4, 56]

console.log(arr.flat(2))//[1, 2, 3, 4, 5, 6, 8, 9, 3, 4, 56]
*/

//console.log(typeof NaN) //number


//creating object by various way
//1
// var object = new Object();
// object.name="jyoti";
// object.age=21;

// console.log(object)

//2

// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age
//     }
// }

// var obj=new person("jyot",23)


//classes in es6

// class bike{
//     constructor(modal ,color){
//         this.modal=modal;
//         this.color=color;
//     }

//     getdetails(){
//         return (`${this.modal}  has ${this.color}`)
//     }
// }

// bike.prototype.number =21584;
// bike.prototype.color="red"
// console.log(bike("nano","blue").getdetails())


// class bike{
//     constructor(modal,color){
//         this.modal=modal;
//         this.color=color;

//     }

//     getdetails(){
//         return (`${this.modal} and ${this.color} ${this.number}`)
//     }
// }
// bike.prototype.number =21584;
// let bikeStyle = new bike ("nano","red")
// console.log(bikeStyle.getdetails())


// function myfunc(){
//    clearTimeout( setTimeout(()=>{
//         console.log("hey whats up")
//     },2000))
// }

// function yourfunc(){
//     console.log("whaat are yoou doing dude")
// }

// myfunc();
// yourfunc();

// // var a=eval("6+7*2");
// // console.log(a)
// //  const b = parseInt("hekko")
// //  console.log(typeof NaN)

// //  console.log(navigator.platform);


// const parent =document.querySelector("#list")
// parent.addEventListener("click",(e)=>{
//     if(e.target="li"){
//         e.target.style.backgroundColor ="red"
//         console.log("event occure")
//     }
//     else{
//         e.target.style.backgroundColor ="green"
//     }
   
// })

// let childEl = document.createElement("lo")
// childEl.textContent ="list8"
// parent.appendChild(childEl)


// //json is the text-based data-format that is use to store and transfer the data .




// let box = document.getElementById("box");
// let id = setTimeout(anim,3000)

// function anim(){
   
//     box.style.width = "500px";
// }


// function clickHandler(){
//     clearTimeout(id)

// }

// let a=0;
// let box = document.getElementById("box");
// let id = setInterval(anim,100)

// function anim(){

//    a=a+10;
//     if(a == 200){
//         clearInterval(id);
//     }
//     else{
//         box.style.marginLeft = a+"px";
//     }
   
    
// }

// var mainString = "hello",
//   subString = "ell";
// console.log(mainString.indexOf(subString)!==-1);
// console.log("location.href", window.location.href)  //current url of the window


// var obj ={
//     name:"jyoti",
//     age:23
// }
// console.log("age" in obj)
// console.log(obj.hasOwnProperty("age"))


// var object = {
//     k1: "value1",
//     k2: "value2",
//     k3: "value3",
//   };
  
//   for (var key in object) {
//     if (object.hasOwnProperty(key)) {
//       console.log(key + " -> " + object[key]); // k1 -> value1 ...
//     }
//   }


//   var a ="jyoti"

// console.log(a.charAt(0).toUpperCase()+ a.slice(1))//Jyoti

// var date = new Date();
// // var mon = date.getFullYear()
// var anotherTimeZone = date.toLocaleString('en-GB',{timeZone:"UTC"})
// console.log(anotherTimeZone)


// function myfunc(){
//     var ans =0;
//    for(let i =0;i<arguments.length;i++){
//     ans+=arguments[i]

//    }
// return ans
// }
// console.log(myfunc(2,3,5))
// var text=0;
// for (i = 0; i < 10; i++) {
//     if (i === 5) {
//       break;
//     }
//     text += "Number: " + i + "<br>";
  
//   }

//   console.log(text)


//generator function;

// function *myfunc(a){
//     yield a;
//     yield a+10

   
// }

// let gen=myfunc(1)
// console.log(gen.next().value)//1
// console.log(gen.next().value)//11


//map,filter,reduce
//call,apply,bind

// const user1={
//     name:"jyoti",
//    city:"varanasi",
//     getdetail:function(profile,year){
//         return (`${this.name} and ${this.city} ${profile} ${year}`)

//     }
// }
// const user2 ={
//     name:"varsha",
//     city:"mumbai"
// }
// console.log(user1.getdetail.call(user2,"developer",2022))
// console.log(user1.getdetail.apply(user2 ,["develeoper",2021]))
// const bindEl=user1.getdetail.bind(user2)
// console.log(bindEl())

const emails=["jyit@gmail.com","hgdhf@gmail.com","fjhfj@gmail.com"]

function delay(useremail){
    return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`email is send to ${useremail}`)
            },1000)
        })
}
 function student(){
  for(useremail of emails){
    const myfunc = await delay(useremail)
    console.log(myfunc)

  }
   console.log("email is send")
  
}

student();


// const array =[1,2,3,4];
// const res=array.reduce((a,b)=>{
//     return a+b;
// },0)

// console.log


//closure => the inner access the variable and parameter of the outer function even after the outer function has returned
// function retirement(retirementAge){
//     var a = "this  is the age left until retirement";
//     return function(yearOfBirth){
//         var age = 2022-yearOfBirth;
//         console.log((retirementAge-age) + a)
//     }
// }
// var myfunc = retirement(66)
// myfunc(1990)



//every function in javascript has property prototype that refers to an object  as proptotype is  an object so you can assign property ,method in it
//

 function manager(){
    this.name="jyoti";
    this.city="varanasi";
 }

 function employee(){
    this.profile = "developer"
 }

 var emp = new employee();
 manager.prototype=emp;

 var man = new manager();
 manager.prototype.nationality="india"
 console.log(man.nationality)


 function myfunc (){};
 myfunc.prototype.name="jyoti";
 var fun = new myfunc()

 console.log(fun.name)


 function retirement(age){
    var a ="this is the age until retirement"
    return function(birthyear){
        var b = 2022 - birthyear;
        
        console.log(age-b + a)
    }
 }

 var myfunc =retirement(66);
 myfunc(1990)



 const posts =[
    {title:"post1" ,body:"this is post1"},
    {title:"post2" ,body:"this is post2"},
    {title:"post3" ,body:"this is post3"}
 ];

 function mypost(){
    setTimeout(()=>{
        posts.forEach((userPost)=>{
            console.log(`this is ${userPost.title}`)
        })
    },1000)
 }



 function newPost(userNewPost){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            posts.push(userNewPost)
            resolve();
    
        },2000)
     

    })
}
  
 newPost({title:"post4" ,body:"this is post4"}).then(()=>{
    mypost();

 })




//curry function => when the function, instead of taking all the argumnets at same time takes the first one,
// that return new function which take secont one then return another function that takes third one and return new function


// function sum(a){
//     return (b)=>{
//         return (c)=>{
//             return a+b+c;
//         }
//     }
// }
// let data=sum(2)
// console.log(data);

 //first class function

//  function square(num){
//     return num*num;
// }
// const myfunc=function(fn){
//     console.log(fn(6));
// }
// myfunc(square);


//var doestnot have a block scope //let has a block scope
// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000)
// } //0 1 2 3 4 
// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000)
// } //5 5 5 5 5 


//argument cannot be define inside the arrow function


// var myfunction=()=>{
//     console.log(arguments)
// }
// myfunction(1,2,3,4) //error argument cannot define in  arrow function


// function myfunction(){
//     console.log(arguments)
// }
// myfunction(1,2,3,4)  array of 1,2,3,4


//const and let is not hoisted as var but they are hoisted in the temporal dead zone  //variable are in the scope but they have not been declared yet



//infinite curry=>   add(2)(4)(6)...()

// function sum(a){
//     return (b)=>{
//         if(b) return sum(a+b)
//         return a;
//     }
// }
// sum(5)(5)(3)(6)();   //19


//partial application => in curry no of argument we have we return that much function but in partial application no of agrumnet is not eual no of funtion it return 

// function add(a){
//     return (b,c)=>{
//         return a+b+c;
//     }
// }

// add(2)(3,4)

//debouncing => like in flipkart search box whenever we are typing letters (on every keypress event)it is not showing the result for every letters bcs this
//will makeunnecessary api call in the backend which will put alot of pressure on the server for that we are using debouncing u see when we stop for view millisec then only it update the serach result
//it limit the execution of the function call and wait for a certain amount of time to run it again   or unnecessary fn call avoid which slow down the performance


//let there is search box having delay of 500ms and we typing one letter after other and these has the gap of let say 100ms so as soon as we are typing
//no api is call but let say we are typing after 600ms which is more then 500ms then the api is call  example=> infinite scrolling like in twitter
// resizing of the window


//throtlling =>it will call the api after every 500ms like you are typing samsung and 500ms will expire on n then will will call the api
//diff bet two fn call is 500ms then api call instead in debouncing if the diff between two key press event is greater then time limit then api is call
//


//shallow copy=>when one object hold the reference of other object but when we clone completely one objr=ect to other that is called deep copy
// const obj={
//     name:"jyoti",
//     age:23
// }
// const obj2=obj;  obj2 copy the memory address of obj2        copy memory ki location
// obj2.name="varsha"
// console.log(obj)

// const obj={
//     name:"jyoti",
//     age:23
// }
// const obj2=Object.assign({},obj)
// obj2.name="varsha"
// console.log(obj)


// const obj={
//     name:"jyoti",
//     age:23,
//     func:()=>{
//     console.log("hey dude")
//     }
// }
// const obj2={...obj}
// obj2.name="varsha"
// console.log(obj)

// but there is the problem with nested object it alse changes

// const obj={
//     name:"jyoti",
//     age:23,
//     info:{
//         city:"varanasi",
//         state:"up"
//     }
// }
// const obj2={...obj}
// obj2.name="varsha"
// obj2.info.city="kanpur"
// console.log(obj)      city:kanpur showing to avoid this

// const obj={
//     name:"jyoti",
//     age:23,
//     info:{
//         city:"varanasi",
//         state:"up"
//     }
// }
// const obj2=JSON.parse(JSON.stringify(obj))
// obj2.name="varsha"
// obj2.info.city="kanpur"
// console.log(obj)   city:varansi


// const str="this is javascript you have to find max character"
// const reverse=str.split(" ").join("")
// const freqcount={}

// for(let char of reverse){
//     freqcount[char]=freqcount[char]+1||1
// }
// let maxcount=0;
// let getchar=null;
// for(key in freqcount){
//     if(freqcount[key]>maxcount){
//         maxcount=freqcount[key]
//         getchar=key;
//     }
// }
// console.log(maxcount +" "  + getchar)



// const str="this is javascript you have to find max character"
// const reverse=str.split(" ").map((c)=>c.split("").reverse().join("")).join(" ")
// console.log(reverse)
//siht si tpircsavaj uoy evah ot dnif xam retcarahc


// why js is dynamic language
// js is dynamic means data type of the variable can change durin runtime
// var x=10;
// typeof(x) //number
// x="text"
// typeof(x)//string  js can change its data type by looking ay the variable during runtime

//datatypes in js=> primitive : string,number,null,undefined,boolean,symbol,big and objects

//null indicates an absence of data typeof(null)=>object

//hoisting is the mechanism by which variable and function are move to the top of the scope before code execution


//implementing caching/memoization funtion in js

// const memoizationfun=(fn)=>{
//     let cacheres={}
//     return function(...args){
//         let n=args[0]
//         console.log(n)
//         if(n in cacheres){
//             return cacheres[n]
//         }
//         else{
//             let result=fn(n)
//             cacheres[n]=result
//             return result
//         }
        
//     }
// }
// let sum=0;
// const calsum=(n)=>{
//     for(let i=0;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }
// console.time()
// const resultmemo=memoizationfun(calsum)
// console.log(resultmemo(8))
// console.timeEnd()


// const cal={
//     totalresult:0,
//    add:function(n){
//        this.totalresult+=n;
//        return this
    
//    },
//    mul:function(n){
//        this.totalresult*=n
//        return this
//    },
   
//    sub:function(n){
//        this.totalresult-=n
//        return this
//    }
// }

// const totalresults=cal.add(2).mul(10).sub(1);
// console.log(totalresults.totalresult) //19

// let user={
//     name:"jyoti",
//     place:"varanasi",
//     userinfo:{
//         username:"riya",
//         userdetail:function(){
//         console.log(this.name + " "+ this.username)
//     }
//              }
// }
// user.userinfo.userdetail() //undefines riya   this  will point to the current object only



// let user={
//     name:"jyoti",
//     place:"varanasi",
//     userinfo:function(){
     
//        const arrow=()=>{
//         console.log(this.name)
//     }
//         arrow()
        
// }
// }
// user.userinfo() //jyoti


var lengths=44;

function callbacks(){
    console.log(this.lengths)
    
}
const object={
    lengths:7,
    func:function(fn){
        fn()
    }
}
object.func(callbacks)//44

//global variable are the variables which are accessisable throughout the web page ot document
//issue with this is it can make the application hard to debug 
//when you are assign the variable without var keyword then it become global

// var x=10;
// function global(){
//     y=10;-----------------|
//     console.log(y)        |
// }                         | 
// global()                  | 
// console.log(y) //10 10 <--|   once the var bcm global it is hard to bedug and make the application buggy
   

//use strict strictly check if the variable is declared using var keyword or let keyword

"use strict"
var x=10;
function global(){
    y=10;
    console.log(y)
}
global()
console.log(y) //throws error that y is not define  


//we cann use iife and closure to avoid the problem of global variable

//everything in localstorage is in the form of string so we need to convert it into object using JSON.parse()


//module pattern=best design pattern
//module pattern =iife(name collison)+closure(encapsulation) means we can make if public i.e to which we want to show
//and what to hidden can be control by this

const person={
    name:"jyoti"
}
const info={
    name:"riya",
    age:78,
    __proto__:person
}
console.log(info.name) //riya

// function details(){
//     this.name="jyoti"
//     this.age=78
// }
// var infos=new details()
// details.prototype.something=function(){
//     console.log(this.name)
// }
// infos.something()


function manager(){
    this.name="jyoti";
    this.city="varanasi";
 }

 

manager.prototype.es=function(){
    console.log("name")
 }

var e=new manager()
e.es()
//pollyfill=>piece of js code which provide modern funtionality to the olderbrowser for ex=>silver light plugin pollyfill

//pure funtion are the funtion which returns the value determine by its argument without any sideeffect(without modifying any data outside it scope)
var x=10;
function sum(){
    x++;
    console.log(x)
}
sum()
sum()

//event propagation determine in which order element receive the event focu and blur event donot bubble

//api is used so that the access of the actual system is not given to someone else we made an api whoever wants some data of our system we will expose
//those data to them ,give them end points with proper api key and with the help of api we will monito who accessed how much data from out system.

//in documentation of api it was mention there that how many  times we can hit the api 

//marquee => this tag is use when we want to make a scrollable text and image within the web page either from left to right or vice-versa


//when window is loaded it will listen this event

addEventListener("hello",function(){
    alert("event is dispaatch")
})

let event = new Event("hello",{bubbles:true})
document.dispatchEvent(event)


//collection is the group of api request
