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
    {username:"jyoti", age:24},
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
    {username:"jyoti", age:24},
    {username:"sonal", age:18},
    {username:"anannya", age:25}


]


users.forEach(function myfunc(info){
    console.log(info.username)
})

//map


const users= [
    {username:"jyoti", age:21},
    {username:"jyoti", age:24},
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
const debounce=(fn,delay)=>{
        var prevcleartimeout
        return function(...args){
            if(prevcleartimeout){
                clearTimeout(prevcleartimeout)

            }
            prevcleartimeout=setTimeout(()=>{
                fn(...args)
            },2000)
        }
    };

    btn.addEventListener("click",debounce(e=>{
        console.log("click")
    },2000))

//let there is search box having delay of 500ms and we typing one letter after other and these has the gap of let say 100ms so as soon as we are typing
//no api is call but let say we are typing after 600ms which is more then 500ms then the api is call  example=> infinite scrolling like in twitter
// resizing of the window


//throtlling =>it will call the api after every 500ms like you are typing samsung and 500ms will expire on n then will will call the api
//diff bet two fn call is 500ms then api call instead in debouncing if the diff between two key press event is greater then time limit then api is call
//
const throttle=(fn,delay)=>{
    let last=0;
    return function(...args){
        let now=new Date().getTime();
        console.log(now-last)
        if(now-last<delay){
            return;
        }
        last=now
        return fn(...args)
    }
}
    btn.addEventListener("click",throttle(()=>{
        console.log("clicked")
    },2000))

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






https://plainenglish.io/blog/50-javascript-output-questions
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Question: What is typeof []
// Answer: Object. Actually Array is derived from Object. If you want to check array use Array.isArray(arr)

// Question: What is typeof arguments
// Answer: Object. arguments are array like but not array. it has length, can access by index but can't push pop, etc.

// Question: What is the value of typeof null
// Answer: "object"

// Question: What is console.log(true+false)
// Answer: 1 here true -->> 1 & false -->> 0 then 1 + 0 -->> 1

// Question: What is 2+true
// Answer: 3. The plus operator between a number and a boolean or two boolean will convert boolean to number. Hence, true converts to 1 and you get result of 2+1

// Question: What is "2"+true
// Answer: 2true here string concatination happer "2"+"true" -->> 2true

// Question: What is the value of -'34'+10
// Answer: -24. minus(-) in front of a string is an unary operator that will convert the string to a number and will make it negative. Hence, -'34' becomes, -34 and then plus (+) will perform simple addition as both the operands are number.

// Question: What is the value of +'dude'
// Answer: NaN. The plus (+) operator in front of a string is an unary operator that will try to convert the string to number. Here, JavaScript will fail to convert the "dude" to a number and will produce NaN.

// Question: If you have var y = 1, x = y = typeof x; What is the value of x?
// Answer: "undefined"

// Question: for var a = (2, 3, 5); what is the value of a?
// Answer: 5. The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. ref: MDN

// Question: for var a = (1, 5 - 1) * 2 what is the value of a?
// Answer: 8

// Question: What is the value of !'bang'
// Answer: false. ! is NOT.

// Question: What is the value of parseFloat('12.3.4')
// Answer: 12.3

// Question: What is the value of Math.max([2,3,4,5]);
// Answer: NaN

// Question: typeof(NaN)
// Anwser:"number"

// Question:null == undefined
// Answer: true

// Question: If var a = 2, b =3 what would be value of a && b
// Answer: 3

// Question: What is -5%2
// Answer:-1. the result of remainder always get the symbol of first operand
======================================================================================================================================================================
let a = [];
let b = [];
console.log(a==b); //false
console.log(a===b); //false
//Explaination : Here we are comparing memory location, not an array. Memory location of 2 arrays are not same.
--------------------------
let a = [];
let b = a;
console.log(a==b); //true
console.log(a===b); //true
//Explaination : Here we are assigning a to b, where memory location is now same.
---------------------------
let a = [1];
let b = [1];
console.log(a[0]==b[0]); //true
console.log(a[0]===b[0]); //true
//Explaination : Here we are comparing elements inside an array, not a memory location. We specify the index so that's why element get compared.
-----------------------------
let z= [1,2,3]
let a ={name: "jyoti"}
console.log(...z); // 1 2 3 
//Explaination : ...z means destructing happened i.e, all the elements are come out from an array/object.
------------------------------
console.log(typeof NaN); //number
//Explaination : If we divide "jyoti"/2 then it will give NaN. 
--------------------------------
let data = 10 - -10;
console.log(data); //20
//Explaination : Minus minus will become plus so 10+10=20
---------------------------------
const set = new Set([1,1,2,2,3,4,5])
console.log(set) //{1,2,3,4,5}
//Explaination : It will remove duplicate values.
---------------------------------
let data ={name: "jyoti"}
console.log(delete data.name); //true
console.log(data)//{}
//Explaination : delete will return either true or false.
-----------------------------------
let data ={name: "jyoti"}
console.log(delete data); //false
//Explaination : We can delete the object property only. We can't able to delete the object(i.e, data).
------------------------------------
const data = ["piya", "jyoti", "sujyoti"];
const [y] = data;
console.log(y); //"jyoti"
//Explaination : We are doing destructuring here. y is representing the first index only
-------------------------------------
const data = ["piya", "jyoti", "sujyoti"];
const [y,z] = data;
console.log(y,z); //"jyoti", "jyoti"
//Explaination : We are doing destructuring here. y is representing the first index only and z representing the second index.
--------------------------------------
const data = ["piya", "jyoti", "sujyoti"];
const [,m] = data; // way to access any specific element here at second position
console.log(m); //"jyoti"
//Explaination : To access any element without taking previous values, we can do just write comma.
--------------------------------------
const data ={name:"jyoti"}
const {name} = data; //how to get the name property without . dot operator
console.log(name);//jyoti
//Explaination : Here we did object destructuring.It's not store in continuos memory location but array store in continuoes memory location so that's why we used comma in an array.
--------------------------------------
let data ={name:"jyoti"}
let data1={city:"ABC"}
data = {...data, ...data1} //merge 2 objects
console.log(data); // {name:"jyoti", age:"ABC"}
//Explaination : using spread operator we use to merge the 2 objects. Three dots will pop out the property from an object and assign inside curly brackets.
-----------------------------------------
let data ={name:"jyoti"}
let data1={city:"ABC"}
data = {data, ...data1} //merge 2 objects
console.log(data); // { "data" : {name:"jyoti"}, "city": "ABC"}
//Explaination :Three dots will pop out the property from an object and assign inside curly brackets. If we didn't do destructing or spread operator then key will be object name(i.e, data) and assign the value as whole object into it.
------------------------------------------
let data ={name:"jyoti"}
let data1={city:"ABC", name: "sujyoti"}
data = {...data, ...data1} //merge 2 objects
console.log(data); // { name:"sujyoti", "city": "ABC"}
//Explaination : If we have same keys while merging then the position of the property will remain same but the value get updated with new value. Because in an objects Keys hould be unique.
-------------------------------------------
const name = "jyoti"
console.log(name()); //Error: name is not a function
//Explaination : Function we are calling but it's not present so it will an error.
--------------------------------------------
const result = false || {} || 20 || null;
console.log(result); //20
//Explaination : OR operator will find first positive value. Null is a falsy value by default. {} is a positive value. It didn't reach till 20 and null.
--------------------------------------------
const result = null || false || '';
console.log(result); //''
//Explaination : OR operator will find first positive value. It will print '' because any of the true value didn't found so it will pick last value always.
-------------------------------------------
const result = [] || 0 || true;
console.log(result); //[]
//Explaination : OR operator will find first positive value. It will print [] because empty array/object is a positive.
-------------------------------------------------
console.log(Promise.resolve(5)); //Promise {<fulfilled>: 5}
//Explaination : While doing resolve(), itself here a promise. If we pass number/string etc then it will print fulfilled.
------------------------------------------------
console.log("smile" === "smile"); //true
//Explaination : Each emojy contain unicode where we are compairing unicode not the emojy so it's true
-------------------------------------------------
JSON.parse ?
Parse JSON object to a JavaScript value // converting data into js object
-------------------------------------------------
let name  = "jyoti";
function getName(){
  console.log(name); //Uncaught ReferenceError: Cannot access 'name' before initialization 
  let name = "sujyoti";
}
getName();
//Explaination : Hoisting used here. If we use VAR the can use variable before declare. But in LET we can't do that. LET/CONST need declaration first then can use it.
--------------------------------------------------
let name  = "jyoti";
function getName(){
  console.log(name); //Uncaught ReferenceError: Cannot access 'name' before initialization 
  let name = "sujyoti";
}
getName();
------------------------------------------------------------------------------
let name  = "jyoti";
function getName(){ 
  let name;
  console.log(name); //undefined
  name = "sujyoti";
}
getName();
------------------------------------------------------------------------------
let name  = "jyoti";
function getName(){ 
  let name = "sujyoti";
  console.log(name); //sujyoti    
}
getName();
------------------------------------------------------------------------------
let name  = "jyoti";
function getName(){
  console.log(name); //jyoti
}
getName();
//Explaination : Let is a block scope.Because of closures we can able to access name which is outside of a function with LET.
--------------------------------------------------
console.log((x => x)('I love')) //"I love"
console.log(`${(x => x)('I love')} to program`) //"I love to program"
//Explaination : Template Literal used here. We use here arrow function which is returning a string 
----------------------------------------------------
function sumValues(x,y,z){
  return x+y+z;
}
sumValues(...[2,3,4]) //how to call a function so that output will be 9
//Explaination : we can't do like this sumValues(2,3,4).
----------------------------------------------------
const name = "jyoti is a girl.";
console.log(typeof name); //string
console.log(!typeof name); //false //"jyoti is a good girl" is a string means thruthy value. Nagation of thruthy is falsy value.
console.log(!typeof name === 'object'); //false
console.log(!typeof name === 'string'); //false
console.log(!typeof name === false); //true
//Explaination : We are using negation mark(!) which will return either true or false only.
----------------------------------------------------
const name = "jyoti";
const age ="10000";
console.log(isNaN(name)); //true
console.log(isNaN(age)); //false
//Explaination : If it's not a number then return True. If it's a number then return false.
-----------------------------------------------------
let person = {name: "jyoti"};
Object.seal(person); //post seal, how can you modify the person object
person.age ="1000";
person.name ="sujyoti";
console.log(person); //{name : "sujyoti"}
//Explaination : Onceyou use Seal we can't able to add the more keys with values into it.But you can modigy the existing key.
-------------------------------------------------------
let data = [2,9,0,10];
data.shift();//remove first element
console.log(data); //[9,0,10]
data.pop(); //remove last element
console.log(data);//[9,0]
//Explaination : shift and pop use to remove the elements from first and last index.
--------------------------------------------------------
//check the value is even or odd
let a =10;
console.log(a%2===0 ? true : false); //true
//Explaination : Need to divide by 2 and then checking if reminder is zero/one.
----------------------------------------------------------
let data ={ name : "jyoti"};
delete data.name;
console.log(data); //{}
//Explaination : delete always work with object properties not a object itself.
---------------------------------------------------------
let data ="true";
//convert data into boolean false value
console.log(!data); //false
console.log(typeof !data); //boolean
//Explaination : ! will make boolean value(or opposite value). 
---------------------------------------------------------
let data ="true";
//convert data into boolean true value
console.log(!!data); //true
console.log(typeof !!data); //boolean
//Explaination : ! will make boolean value(or opposite value). 
---------------------------------------------------------
Diff between Map and foreach: Map will return new thing but Foreach didn't return anything.
---------------------------------------------------------
let data = ["piya", "jyoti", "sujyoti"];
delete data[1];
console.log(data); //["piya",,"sujyoti"] //["piya",empty,"sujyoti"]
console.log(data.length); //3
//Explaination : Whenever element deleted from an object it will create a empty space. Array length will always reain same.
-------------------------------------------------------------
//merge 2 arrays
const a =[1,2,3];
const b =[4,5,6];
const c =[...a, ...b]
console.log(c); //[1,2,3,4,5,6]
//Explaination : using spread operator
----------------------------------------------------------------
const a =[1,2,3];
const b =[3,4,5,6];
const c =[...a, ...b]
console.log(c); //[1,2,3,3,4,5,6]
//Explaination : using spread operator still we can merge and both values will be present in arrays. But in an object, it will take the lates value and assigned to the 1st position of that key.
-------------------------------------------------------------------
let c = 3**3;
console.log(c); //27
console.log(3*3); //9
//Explaination : 3 square 3 means 3*3*3
---------------------------------------------------------------------
let a=2;
setTimeout(()=>{
  console.log(a); //100
},0)
a=100;
//Explaination : Here we are using zero time interval. setTimeout is async function so it will execute at last. Firstly all the sync code will get execute. so that's why 100 is assigned to a.
------------------------------------------------------------------------
let a =2;
let A =30;
console.log(A); //30
//Explaination : a and A both are diff variables.
------------------------------------------------------------------------
let A10="hello";
let 10A ="hi";
console.log(A10); //hello
//console.log(10A); //error
//Explaination : Variable can't start with a number.
------------------------------------------------------------------------
let a="hello";
let b =`hello`;
console.log(a === b); //true
console.log(a == b); //true
//Explaination : Doble code and backticks both are same.
--------------------------------------------------------------------------
let a =1;
let c =2;
console.log(--c === a); //true
//Explaination : --c will be 1 so thats why true.
--------------------------------------------------------------------------
let a =1;
let b =1;
let c =2;
console.log(a === b === -c); //false
//Explaination : a===b gives True. true === -c(number) gives false.
---------------------------------------------------------------------------
console.log(3*3); //9
console.log(3**3); //27
//console.log(3***3); //error
//Explaination : *** doesn't exist in js.
----------------------------------------------------------------------------
console.log(a); //undefined
var a;
//Explaination : We can use VAR variable before its declaration. We didn't assign any value but still by default "undefined" will be store in it.undefined means declared but value didn't initialised.
-----------------------------------------------------------------------------
console.log(a); //not defined
//Explaination : Not defined means variable didn't even declared.Also value is not assogned.
-----------------------------------------------------------------------------
console.log([[[]]]); //[[[]]]
//Explaination : It will print the nested array. We will get 3 nested array and each one have 1 element but at the last array will be empty.
------------------------------------------------------------------------------
How to find Operating system name?
navigator.plateform we can use it. //win32
-------------------------------------------------------------------------------
let for = 100; //Error
//Explaination : For is a reserved keyword.
-------------------------------------------------------------------------------
function fruit(){
  console.log(name); //undefined
  console.log(price); //Error
  var name = "jyoti";
  let price = 1000;
}
fruit()
//Explaination : Hoisting concept used here. Error because in LET declaration first then only we can use it. but in var we can use brfore its declaration.
-------------------------------------------------------------------------------
for(var i=0; i<3; i++){ //i=0 //1 //2 //3
  setTimeout(()=>console.log(i),1) // 3,3,3
}
//Explaination : Var is a global variable. Firstly Sync code get executed then async code will start to execute. so i value incremented from 0 to 3 when pointer reaches to setTimeout so it will print 3 thrice time.
---------------------------------------------------
for(let i=0; i<3; i++){ //i=0 //1 //2 //3
  setTimeout(()=>console.log(i),1) //0 //1 //2
}
//Explaination : LET is a block scope. so it will print 0,1,2. Its having own islocated scope.
----------------------------------------------------
console.log(+true); //1
console.log(typeof +true); //number
//Explaination : if we write + in front of anything then it will convert into a number.
----------------------------------------------------
console.log(!"jyoti"); //false
console.log(typeof ("jyoti")); //string
//Explaination : ! will give either true/false.! means false and !! means true.
----------------------------------------------------
let data = "size";
const bird = {size : "small"}
console.log(bird[data]); //small
console.log(bird["size"]); //small
console.log(bird.size); //small
console.log(bird.data); //undefined
//Explaination : If we wants to access variable with object then use [] notation(. notation will not work).
------------------------------------------------------
let c = {name  : "jyoti"};
let d;
d=c;
c.name = "sujyoti";
console.log(d.name); //sujyoti
//Explaination : Using assignment operator we are accessing the same memory allocation. 
-------------------------------------------------------
var x;
var x=10;
console.log(x); //10
//Explaination : Can be declare multiple times.
---------------------------------------------------------
var x;
let x=10;
console.log(x); //Error
//Explaination : Can't be declare multiple times with LET.
----------------------------------------------------------
let a = 3;
let b = new Number(3);
console.log(a == b); //true
console.log(a === b); //false
console.log(typeof b); //object
//Explaination : === will give false because a will give number but b will give an object.
-------------------------------------------------------
let name;
nmae ={}; //wrong variable name i wrote
console.log(name); //undefined
//Explaination : by default it wil be undefined if we declare first.
---------------------------------------------------------
function first(){
  console.log("Woof!!"); //Woof!!
}
first.name = "apple";
first();
//Explaination : To add the property with a function then it will not create a impact.
----------------------------------------------------------
function sum(a,b){
  return a+b;
}
console.log(sum(1, "2")); //12
//Explaination : 2 is passed as a string so it will get concat. num+string = string
------------------------------------------------------------
let num = 0;
console.log(num++); //0
console.log(++num); //2
console.log(num); //2
//Explaination : ++ will increase the value by 1. preincrement and postincrement used here.
--------------------------------------------------------------
function getAge(...args){ //[1000]
  console.log(typeof args); //object
}
getAge(1000);
//Explaination : typeof args means typeof an array means typeof [] is object.
--------------------------------------------------------------
function getAge(){ 
 age = 1000;
 console.log(age); //1000
}
getAge();
//Explaination : if we didn't declare with Var/Let/const then by default it will become as a Var.
------------------------------------------------------------------
function getAge(){ 
  'use strict'
 age = 1000;
 console.log(age); //error
}
getAge();
//Explaination : Use strict wil give a error because it forces to use a proper way of the variable declaration.
----------------------------------------------------------------------
const sum = eval('10*10+5');
console.log(sum); //105
//Explaination : It will perform the numerical operation
----------------------------------------------------------------------------
const obj = {1:"a", 2:"b"}
console.log(obj.hasOwnProperty("1")); //true
console.log(obj.hasOwnProperty(1)); //true
//Explaination : "1" and 1 treat as same.
----------------------------------------------------------------------------
const obj = {a:"one", b: "two", a:"three"}
console.log(obj); // {a:"three", b: "two"}
//Explaination : Key position will be same but tha value get updated with new value in object.
----------------------------------------------------------------------------
for(let i=1; i<5; i++){
  if(i==3) continue;
  console.log(i); //1,2,4
}
//Explaination : If i =3 then it will not execute the code for 3, but can execute for i=4.
------------------------------------------------------------------------------
const foo = () => console.log("first");
const bar = () => setTimeout(()=> console.log("second"));
const baz = () => console.log("third");
bar();
foo();
baz();
//Explaination : first,third, second. Because asyn operation work post all the syn operation get complete.
----------------------------------------------------------------------------
<div onClick="console.log("first div")">
  <div onClick="console.log("second div")">
    <button onClick="console.log("button")">
     Click Me
     </button>
  </div>
</div>
//Explaination : button, second div, first div. Even bubbling happened here.
---------------------------------------------------------------------------
const person = {name:'jyoti'};
function sayHi(age){
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person,21)); //"jyoti is 21"
console.log(sayHi.bind(person,21)); //it will return a function. //function sayHi(age){  return `${this.name} is ${age}`;}
console.log(sayHi.bind(person,21)()); //"jyoti is 21"
//Explaination : Bind will always return a function so require to invoke the function.
------------------------------------------------------------------------------
function sayHi(){
  return (()=>0)();
}
console.log(typeof sayHi()); //number
//Explaination : sayHi will return anonymous arrow function/IIFE, where it will return 0. type of 0 is number.
----------------------------------------------------------------------------
function sayHi(){
  return ()=>0;
}
console.log(typeof sayHi()); //function
console.log(typeof sayHi()()); //function
//Explaination : sayHi will return anonymous arrow function/IIFE, where we didn't invole the arroe function so it will return function.
-----------------------------------------------------------------------------
console.log(typeof typeof 1); //string
//Explaination : typeof 1 is a number and typeof number is a string.
-----------------------------------------------------------------------------
const numbers = [1,2,3];
numbers[6]=11;
console.log(numbers); //[1,2,3,,,,11]
//Explaination : Array store elements in a continuous memory location. It will give empty in between an array.
-------------------------------------------------------------------------------
const numbers = [1,2,3];
numbers[9]=numbers;
console.log(numbers); //[1,2,3,,,,.......]
//Explaination: It will print infinite loop.
-------------------------------------------------------------------------------
console.log(!!null); //false
console.log(!!""); //false
console.log(!!1); //true
//Explaination: !null give true and !!null give false. !1 give false and then !!1 give true.
-------------------------------------------------------------------------------
console.log(setInterval(()=>console.log('Hi'), 1000));
console.log(setInterval(()=>console.log('Hi'), 1000));
console.log(setInterval(()=>console.log('Hi'), 1000));
//Explaination: setInterval will give uniques id to stop. It will give like 1,2,3. so it will print 1,2,3,Hi,Hi, Hi, Hi, Hi, .....so on.
------------------------------------------------------------------------------
console.log(setTimeout(()=>console.log('Hi'), 1000));
console.log(setTimeout(()=>console.log('Hi'), 1000));
console.log(setTimeout(()=>console.log('Hi'), 1000));
//Explaination : it will print 1,2,3,Hi,Hi, Hi.
-------------------------------------------------------------------------------
console.log([..."jyoti"]); //["p","r","i","y","a"]
//Explaination: It will convert into an array.
-------------------------------------------------------------------------------
const firstPromise = new Promise((res, rej)=>{
  setTimeout(res, 500, 'one');
})
const secondPromise = new Promise((res, rej)=>{
  setTimeout(res, 100, 'second');
})
Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
//Explaination: Race will return only first matching result so it will print 100. For 500 it will take time to execute so it will not get print.
-----------------------------------------------------------------------------------
let person = {name: "jyoti"};
const numbers = [person];
person = null;
console.log(numbers, person); // [{name : "jyoti"}] //null
//Explaination: We try to empty the objecti,e person, but still an array i.e, numbers conatin value so it will not create an impact while assigning null to person.
----------------------------------------------------------------------------------
const person = {name: "jyoti", age: 1000};
for(const item in person){
  console.log(item); //name, age
}
//Explaination: For in loop give a keys only.
--------------------------------------------------------------------------------------
let data = 3+4+'5';
console.log(data); //"75"
console.log(typeof data); //string
//Explaination: It will add as a string.
------------------------------------------------------------------------------------------
console.log(typeof 3+4+'5'); //"number45"
//Explaination: operation went from left to right side.
----------------------------------------------------------------------------------------
console.log(typeof (3+4+'5')); //"75" //string
console.log(typeof (3+4+  +'5'));//number
//Explaination: To find out the typeof when the all the operation get complete thrn have to enclose in paranethisis. If we add + plus sign to any string it will convert to a number.
----------------------------------------------------------------------------------------
let data = [1,2,3].map( num =>{
  if (typeof num === 'number') return;
  return num*2;
})
console.log(data); //[undefined,undefined,undefined]
//Explaination: If jusr return then it will print undefined.
----------------------------------------------------------------------------------------
function getInfo(member){
  member.name = "jyoti";
}
const person = {name : "sujyoti"}
getInfo(person);
console.log(person); //{"name":"jyoti"}
//Explaination: If we pass an object as argument it will have call by refrence, means having same memory location.
----------------------------------------------------------------------------------------
function Car(){
  this.make = "tata";
  return {make: "kia"};
}
const myCar = new Car();
console.log(myCar.make); //kia
//Explaination: return will overrite the property.If we didn't return then it will print tata.
----------------------------------------------------------------------------------------
(()=>{
  let x = (y = 10);
})()
console.log(typeof x, y); //"undefined" //10
//Explaination: x is a block scope, and we are trying to console x outside of x so that's why undefined.
-----------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})()
console.log(typeof y); //number
//Explaination: x is a block scope, and y is a var because y is not declared so by default it will be var.
----------------------------------------------------------------------------------------
(()=>{
  let x = 10;
})();
(()=>{
  let x = 10;
})();
console.log(typeof x); //undefined
//Explaination: x is a block scope.
---------------------------------------------------------------------------------------
(()=>{
  let x = y = 10;
})();
(()=>{
  let x = y = 20;
})();
console.log(y); //20
//Explaination: y is a var scope so it will overrite from 10 to 20
-----------------------------------------------------------------------------------------
let x =100;
(()=>{
  var x = 10;
})();
console.log(x); //100
//Explaination: x=10 contain inside a block because we already declare with 100 outside so it will print 100.
-------------------------------------------------------------------------------------------
const func = (function(a){
                   delete a;
                   return a;
               } )(5)
console.log(func);

output: 5
//delete keyword only use with object properties. here a is a variable so it will not work the variable. //delete user.age 
------------------------------------------------------------------------------------------
Dynamic property of object :
const property = "firstName";
const name = "jyoti";

const user = {
  property : name //{"property" : "jyoti"}
}
console.log(user);

const user1 = {
  [property] : name //dynamic property required [] //{"firstName" : "jyoti"}
}
console.log(user1);
------------------------------------------------------------------------------------------
const user ={
  name : "jyoti",
  age : 100
}

//iterate through keys
for(let item in user){
  console.log(item) //name age
}
//iterate through values
for(let item in user){
  console.log(user[item]) //jyoti 100
}
------------------------------------------------------------------------------------------
const user ={
  name : "jyoti",
  age : 100
}

//double the age as 200 //iterate through keys
for(let item in user){
 if(typeof user[item] === "number"){
   user[item]*=2
 }
}

console.log(user)
------------------------------------------------------------------------------------------
const a = {}
const b = {key : "b"}
const c = {key : "c"}

a[b] = 123;
a[c] = 456;
console.log(a[b]); //456

//console.log(a) //{"[object Object]" : 456}
//here object is not converted into a string so printing key as object Object.
//so for both it will be 
//a["[object Object]"] = 123;
//a["[object Object]"] = 456;
//it get override by 456.
------------------------------------------------------------------------------------------
const user = {
  name :"jyoti",
  age : 100
}
//convert into a string
const str = JSON.stringify(user)
console.log(str)//{'name':'jyoti','age':100}"

//convert string onto an object
console.log(JSON.parse(str)) //{ name : "jyoti, "age":100}


*****************
Real Usecases : Storing in local storage. We can't store the object as a value so require to convert into a string.
const user = {
  name :"jyoti",
  age : 100
}
console.log(JSON.stringify(user)) //convert into a string
console.log(JSON.parse(JSON.stringify(user)))  //convert into an object

localStorage.setItem("testAsKey", JSON.stringify(user)) {"name":"jyoti","age":100}
localStorage.setItem("testAsKey", user) //[object Object] beacuse we are forcefully trying to convert in a string

JSON.parse(localStorage.getItem("testAsKey")) //will get as a object
------------------------------------------------------------------------------------------
const user = {
  name :"jyoti",
  age : 100
}
console.log(JSON.stringify(user,["name"])) //"{'name':'jyoti'}"

//wheen we pass as a array then it will convernt only those properties and ignore rest of the proerties
------------------------------------------------------------------------------------------
const shape = {
  radius : 10,
  diameter(){
    return this.radius*2; //this pointing to shape
  }
 parimeter : () => 2*Math.PI*this.radius; //this pointing to window where it's not exist
}
console.log(shape.diameter()) //20
//console.log(shape.parimeter()) //Nan
-------------------------------------------------------------------------------------------
let user = {
  name : "jyoti",
  age : 100
}

const name = "Sujyoti";
//const {name} = user; //Identifier 'name' has already been declared 
const {name : myName} = user;

console.log(myName) //jyoti
-------------------------------------------------------------------------------------------
let user = {
  age : 100,
  fullName : {
    first : "jyoti",
    last : "Bagde"
  }
}

const {fullName : {first}} = user;
console.log(first); //"jyoti"
//Destructuring at deep nested
-------------------------------------------------------------------------------------------
let c = {greeting : "Hey!"}
let d;

d=c;
c.greeting = "Hello"
console.log(d.greeting); //Hello
//We are passing the refrence not the propertues of an object so when we changge the roperty of any object it will reflect in both objects
-------------------------------------------------------------------------------------------
let person = {name : "jyoti"}
const members = [person]
person = null
console.log(members);// [{"name":"jyoti"}]

let person = {name : "jyoti"}
const members = [person]
person.name = null
console.log(members);// [{"name":null}]
//because we are modifying the property of object
-------------------------------------------------------------------------------------------
Ways to make deep copy:
1. object.assign
2. {...obj}
3. JSON.parse(JSON.stringyfy(obj))
-------------------------------------------------------------------------------------------
console.log(1);

function print(name){
  setTimeout(()=>{
    return `${name}`
  },1000)
}
let value = print("jyoti");
console.log(value)

console.log(2);
Reason : It run the code quickly and it will not wait for setTimeout so value will be undefined
---------------------------------------------------
Above code can be fix by callback:
console.log(1);
function print(name, cb){
  setTimeout(()=>{
     cb(`${name}`)
  },1000)
}
print("jyoti", (value)=>{
  console.log(value)
});
console.log(2);
-------------------------------------------------------------------------------------------
let promises = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    let state = true;
    if(state){
      resolve("Resolved Promises!!...");
    }else{
      reject("Rejected Promises!!...");
    }  
  }, 1000)
})
promises.then((res)=>console.log(res))
.catch((err)=>console.log(err))
//resoled!!....
-------------------------------------------------------------------------------------------
console.log(1);

const data = new Promise((resolve, reject)=>{
  console.log(2);
  resolve(3);
})

data.then((res)=>{
  console.log(res)
})

console.log(4); //1 2 4 3
-------------------------------------------------------------------------------------------
console.log(1);

const data = new Promise((resolve, reject)=>{
  console.log(2);
  //resolve(3);
})

data.then((res)=>{
  console.log(res)
})

console.log(4); //1 2 4 
If we are not returning anything it will not print anything .
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let a = "true";
setTimeout(()=>{
  a=false;
}, 2000)

while(a){
  console.log("1")
} 

Reason: 1, 1, 1,...... 
Explanation: Event loop will add setTimeout callback in Macrotask queue and will push it to call stack for execution only when the main thread finishes executing.

Here, since 'a' is true and isn't being set to false anywhere in main thread, the while loop will run infinitely, and setTimeout callback will never get a chance to run.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function run(value, time){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(value)
    }, time)
  })
}
async function task(){
  let a = await run(1, 1000); //1value //1 sec
  let b = run(2, 2000); //2value //2 sec
  let c = run(3, 1000);  //3value //execute before b so will not take extra time
  console.log(a + await b+ await c);
}
task()

6 'in 3Sec'

Explanation: In line 10, a setTimeout() timer of 1 sec will be triggered and due to 'await', it will wait for the timer to expire, and after 1 sec, value of a is 1. 

Then since there is no 'await' in line 11 and 12, the 2 timers of 2 sec and 1 sec will be triggered simultaneously. Then in line 14, since b hasn't been resolved, due to await, it will wait for another 2 sec, and since the 2 timers started simultaneously, the other 1 sec timer would already have expired. 

So, after another 2 sec, value of b will be 2, and then immediately after that, value of c will be 3. 

👉 Output : 1 + 2 + 3 = 6
👉 Total time: 1 (line 10) + 2 (await b, in line 14) + 0 (await c, in line 14) = 3 sec
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const fetchData = function(){
  return new Promise((res, reject)=>{
    reject("Error!!")
  })
}

fetchData()
.then(null, (err)=>{
  console.log("First");
  console.log(err);
})
.catch(()=>{
  console.log("Second");
  console.log(err)
})

Explaination : "First" "Error!!"
reject("Error!!") gives string value so it will go to THEN block rather than CATCH block.
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
displayName();
var displayName = function(){
  console.log("jyoti")
} 
function displayName(){
  console.log("dolly")
}
displayName();

//Explaination : dolly jyoti

Normal function will get execute before, because of function Hoisting concept, then function expression wil get execute.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const inc = async(x) => {
  x = x + await 1; //2
  return x;
}

const increment = async(x) =>{ 
  x = x+1; //2+1
  return x; //3
}
inc(1)
.then((x)=>{ //2
  increment(x) //2
  .then((x)=>console.log(x)) //3
})
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const p1 = Promise.resolve("First");
const p2 = Promise.reject("Second");
const p3 = Promise.resolve("Third");
const runPromise = async() =>{
  try{
    const res = await Promise.all([p1,p2,p3]);
    console.log(res);
  }
  catch(err){
    console.log(err)
  }
}
runPromise();

//output : Second

Promise.all() returns array of resolved promises values and if either any of the promise is rejected, then it directly returns the rejected promise value through catch block.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log("start");

async function getData(){
  console.log("jyoti");
  return "Dolly";
}

getData()
.then((res)=> console.log(res));

console.log("end");
//start jyoti end Dolly
//all the console will print first then aync and setTimeout
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const promise = () => Promise.resolve("Success");
function first(){
  promise().then((res)=> console.log(res)); //async
  console.log("First"); //sync
}
async function second(){
  const res = await promise(); 
  console.log(res); //async
  console.log("Second"); //sync
}
first();
second();

// First Sucess success second
// sync(console) run hen async(promise)
//await pause the line of execution
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const person1 = {
  name : "jyoti"
}
const person2 = {
  name : "Dolly"
}
const person = Object.assign(person1, person2);

console.log(person); //{"name" : "Dolly"}
console.log(person.name); //Dolly
console.log(person1.name); //Dolly
console.log(person2.name); //Dolly

//Having same key name so, the value is override and it will be "Dolly"

Explanation : As Object.assign() method will add all the key values of person2 to person1 and return the reference of person1 to person and if same key are there they'll be overwritten.
Basically person1 and person are referring to same object.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const calc=(a)=>{
  return (b)=>{
    if(b) return calc(a+b);
    return a;
  }
}
console.log(calc(1)(2)(3)(4)()) //10 currying
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
const fetchData = function(){
  return new Promise((res)=> res("One"));
}
let isLoading = true;
fetchData()
.then((result)=>{
  console.log(result);
})
.finally(()=>{
         console.log("Two");
          isLoading = false;
})      
console.log(isLoading)  

//true one two
//console value run first
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

const person = {
  name : "jyoti",
  displayName(){
    console.log(this.name) //pointing to the person object
  }
}

const jayesh = Object.create(person)
person.displayName(); //jyoti
console.log(jayesh); //{}
jayesh.displayName(); //jyoti
I believe Object.create() creates a new object from the existing object, and both have the same memory addresses.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------
let p = new Promise((resolve, reject)=>{
   reject(Error("Failed!!"))                    
})

p.catch((error)=>{
  console.log(error); //{}
  console.log(error.message); //failed
}).then((result)=>{
  console.log(result) //undefined //doesn't return anything
})

//Failed!! undefined
Explanation: In line 2, we are rejecting the promise 'p' with the argument as Error("Fails!"), which is an 'Error' object with property 'message' set to 'Fails!'. So, in line 5, the error callback passed to catch() method of promise 'p' receives the above passed Error object as the 'error' parameter, and so 'error.message' (Fails!) is printed. 

Now, as this catch handler is not returning any value so, the chained 'then' handler will be called with undefined as parameter.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* 💡"JavaScript-with-JC" - Guess the Output? */

// 👉 MCQ-1
function MCQ1() {
  const person = {
    name: "Jayesh",
    displayName1: function () {
      console.log("name1", this.name);
    },
    displayName2: () => {
      console.log("name2", this.name);
    },
  };
  person.displayName1();
  person.displayName2();

  // 👍A) name1 Jayesh , name2 Jayesh
  // 💡B) name1 Jayesh , name2 undefined
  // 💖C) name1 Jayesh , name2
  // 😀D) name1 , name2 Jayesh

  /* 
  In window browser answer is C) name1 Jayesh , name2 because arrow function inherits "this" from its outer function where "this" is window.
  and window has by default property name that is used for setting or returning the name of a window and in above case window.name is empty string.
  
  In other compilers answer is B) name1 Jayesh , name2 undefined because arrow function inherits "this" from its outer function where "this" refers to global object.
  */
}
// MCQ1();

// 👉 MCQ-2
function MCQ2() {
  let name = "Jayesh";
  function printName() {
    if (name === "Jayesh") {
      let name = "JC";
      console.log(name);
    }
    console.log(name);
  }
  printName();

  // 👍A) Jayesh     💡B) Jayesh, JC
  // 💖C) JC, JC     😀D) JC, Jayesh

  /* Answer is D) JC, Jayesh because let variables are block scope, name inside if condition will shadow outer name*/
}
// MCQ2();

// 👉 MCQ-3
function MCQ3() {
  var player = "Virat";
  function displayPlayer() {
    if (player === "Virat") {
      var player = "VK";
      console.log(player);
    }
    console.log(player);
  }
  displayPlayer();

  // 👍A) VK, Virat    💡B) VK, VK
  // 💖C) undefined    😀D) VK, undefined

  /* 
   Answer is C) undefined because var variables are functional scope, When displayPlayer fn starts executing, Execution context of
   displayPlayer will be created in callstack and at the memory creation phase var variable player is initialized as undefined. 
   hence if condition will become false and It will print only undefined.
  */
}
// MCQ3();

// 👉 MCQ-4
function MCQ4() {
  const person = {
    name: "Jayesh",
    age: 24,
  };

  const getAge = person.age;
  delete person.age;

  console.log(person);
  console.log(getAge);

  // 👍A) { name: 'Jayesh', age: 24 }, null
  // 💡B) { name: 'Jayesh' }, 24
  // 💖C) { name: 'Jayesh' }, undefined
  // 😀D) { name: 'Jayesh', age: 24 }, 24

  /*
  Answer is B) { name: 'Jayesh' }, 24 because delete keyword deletes property of an object and we are setting getAge as pass by value.
 */
}
// MCQ4();

// 👉 MCQ-5
function MCQ5() {
  // No Strict Mode
  name = "Jayesh"; // window.name ( property of window object )
  console.log(delete name);

  const displayName = (function (name) {
    console.log(delete name); // Local variable of function
    return name;
  })("JC");

  console.log(displayName);

  // 👍A) true, false, JC
  // 💡B) true, true, undefined
  // 💖C) false, false, JC
  // 😀D) false, true, undefined

  /*
  Answer is A) true, false, JC because delete keyword deletes only property of an object. 
  delete keyword can not delete local variables ( declared with var, let, and const ) and functions. 
  delete keyword can delete global variables as they are property of window object.
 */
}
// MCQ5();

// 👉 MCQ-6
function MCQ6() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr[i] = function () {
      return i;
    };
  }

  console.log(arr[0]());
  console.log(arr[4]());

  // 👍A) 0, 4     💡B) 4, 4
  // 💖C) 5, 5     😀D) TypeError

  /*
  Answer is C) 5, 5 because variables declared with var keyword are function-scoped or globally-scoped but not blocked scoped. 
  Inner function will form the closure and points to the updated value of i that is 5. 
  In the case of Let variable, as they are blocked scoped so inner function will hold different values of i from 0 to 4.
 */

  /* 👇 In the case of Let variable */
  const arrBlock = [];

  for (let i = 0; i < 5; i++) {
    arrBlock[i] = function () {
      return i;
    };
  }

  console.log(arrBlock[0]()); // 0
  console.log(arrBlock[4]()); // 4
}
// MCQ6();

// 👉 MCQ-7
function MCQ7() {
  let person = { name: "Jayesh" };
  const personArray = [person];
  person = null;
  console.log(personArray);

  personArray = [];
  console.log(personArray);

  // 👍A) [ { name: "Jayesh" } ], []
  // 💡B) [ { name: "Jayesh" } ] , TyperError
  // 💖C) [ null ], TypeError
  // 😀D) [ {} ], []

  /*
  Answer is B) [ { name: "Jayesh" } ] , TyperError because person = null will only disconnect the person variable from value { name: "Jayesh"} which is stored in memory, personArray[0] will still point to same value { name: "Jayesh"}.
  and personArray = [] at this line TyperError as const variable can't be redeclared and throws Uncaught TypeError: Assignment to constant variable.  
 */
}
// MCQ7();

// 👉 MCQ-8
function MCQ8() {
  const value = { number: 10 };

  const addition = (x = { ...value }) => {
    console.log((x.number += 5));
  };

  addition();
  addition();
  addition(value);
  addition(value);

  // 👍A) 15, 20, 25, 30    💡B) 15, 15, 20, 25
  // 💖C) 15, 15, 15, 15    😀D) 15, 15, 15, 20

  /*
  Answer is D) 15, 15, 15, 20 because when we call addition function 3rd time with passing value object as an argument, then x will take value as pass by reference and will update number property of original object ( value in this case ) to 15.  
  Hence, while calling addition function 4th time will console 15 + 5 => 20.
 */
}
// MCQ8();

// 👉 MCQ-9
function MCQ9() {
  function makePerson() {
    return {
      userName: "Jayesh",
      ref: this,
    };
  }

  const person = makePerson();
  console.log(person.ref.userName);

  // 👍A) Jayesh      💡B) ""
  // 💖C) undefined   😀D) TypeError

  /*
  Answer is C) undefined because "this" keyword in makePerson function will refer to the window object,
  person.ref.userName is same as Window.userName and no property named with userName is present in window object, Hence It will console undefined.
 */

  // 👇 We can get "Jayesh" as an output by doing small change in above question :-
  function makePerson2() {
    return {
      userName: "Jayesh",
      // 👇 Here, We have assigned a function to ref property of an object, and function's "this" will point to the returned object.
      ref: function () {
        return this;
      },
    };
  }

  const person2 = makePerson2();
  console.log(person2.ref().userName); // Jayesh
}
// MCQ9();

// 👉 MCQ-10
function MCQ10() {
  const user = {
    userName: "Jayesh",
    displayName: function () {
      console.log(this.userName);
    },
  };

  setTimeout(user.displayName, 1000);

  // 👍A) Jayesh     💡B) undefined
  // 💖C) ""         😀D) TypeError

  /*
  Answer is B) undefined because setTimeout is using user.displayName as a callback function rather than object method.
  callback function's "this" will refer to the window object and It will console undefined as there is no property such as userName in the window object.   
  */

  // 👇 We can get "Jayesh" as an output by wrapping the user.displayName() inside a function :-

  setTimeout(function () {
    user.displayName(); // Here, displayName is called by user object ( object method ). Hence, "this" will refer to user object.
  }, 1000);
}
// MCQ10();

// 👉 MCQ-11
function MCQ11() {
  const series = { name: "JavaScript-with-JC" };

  function getSatus(postNumber) {
    return `${this.name} 🌟 ${postNumber}`;
  }

  console.log(getSatus.call(series, 50));
  console.log(getSatus.bind(series, 50));

  // 👍A) JavaScript-with-JC 🌟 50, undefined
  // 💡B) JavaScript-with-JC 🌟 50, JavaScript-with-JC 🌟 50
  // 💖C) JavaScript-with-JC 🌟 50, [Function: bound getSatus]
  // 😀D) JavaScript-with-JC 🌟 50, TypeError

  /*
  Answer is C) JavaScript-with-JC 🌟 50, [Function: bound getSatus] because call, apply and bind methods are used for function borrowing in JavaScript.   
  The call method immediately invokes the borrowed function where as bind method does not invoke the borrowed function immediately, bind method returns a copy of borrowed function
  that can be called later on with or without passing new arguments to it.
  */

  // 👇 We can get 'JavaScript-with-JC 🌟 50, JavaScript-with-JC 🌟 50' as an output by calling borrowed function of bind method :-

  console.log(getSatus.call(series, 50)); // JavaScript-with-JC 🌟 50
  console.log(getSatus.bind(series, 50)()); // JavaScript-with-JC 🌟 50
}
// MCQ11();

// 👉 MCQ-12
function MCQ12() {
  var name = "Jayesh";

  function displayName() {
    console.log(this.name);
  }

  const person = {
    name: "JC",
    method(fn) {
      fn();
    },
  };

  person.method(displayName);

  // 👍A) JC           💡B) Jayesh
  // 💖C) undefined    😀D) TypeError

  /*
  Answer is B) Jayesh because displayName function is passed to person object method as a callback function.
  "this" keyword in displayName function will refer to window object and window object has a property "name" with value "Jayesh". Hence, It will console Jayesh as an output.
  */

  // 👇 We can get JC as an output by attaching call method with fn() inside person method :-

  const person2 = {
    name: "JC",
    method(fn) {
      fn.call(this); // borrowing function and passing "this" of person2 object.
    },
  };

  person2.method(displayName); // JC
}
// MCQ12();

// 👉 MCQ-13
function MCQ13() {
  var length = 4;

  function callback() {
    console.log(this.length);
  }

  const object = {
    length: 5,
    method: function () {
      arguments[0]();
    },
  };

  object.method(callback, 2, 3);

  // 👍A) 2     💡B) 3
  // 💖C) 4     😀D) 5

  /*
  Answer is B) 3 because arguments keyword is an array of arguments passed to the function. 
  Here while calling object.method(), we are passing three arguments callback fn(), 2 and 3.
  If we try to console arguments it will look like this 👇

  Arguments(3) [ƒ, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  0: ƒ callback()
  1: 2
  2: 3
  callee: ƒ ()
  length: 3
  Symbol(Symbol.iterator): ƒ values()
  [[Prototype]]: Object

  As we can clearly see, arguments is having length property that is equal to number of arguments passed to function.
  So, arguments[0] is nothing but the first argument passed to function that is callback function in this case.
  As we know, Everything in JavaScript is an object ( arguments is also an object which has length property with value 3 )
  arguments[0]() function's "this" will refer to arguments object. Hence, It will console 3 as an output.
  */
}
// MCQ13();

// 👉 MCQ-14
function MCQ14() {
  var name = "Jayesh";

  function displayName() {
    console.log(this.name);
  }

  const person = {
    name: "JC",
    method: displayName.bind(this),
  };

  person.method();

  // 👍A) Jayesh       💡B) JC
  // 💖C) undefined    😀D) TypeError

  /*
  Answer is A) Jayesh because "this" inside the definition for person object does not refer to person object. 
  "this" will refer to the window object here, and binding displayName function with passing window's this  
  as a context will return a copy of bound function that is stored in method property of person object. 
  So, While calling person.method() will console Jayesh as an output.
  */

  // 👇 We can get JC as an output by wrapping displayName.bind(this) inside a function because "this" inside the normal function of an object refers to the object :-

  const person2 = {
    name: "JC",
    method: function () {
      return displayName.bind(this); // Here, "this" refers to the person2 object
    },
  };

  person2.method()(); // JC
}
// MCQ14();

// 👉 MCQ-15
function MCQ15() {
  function show() {
    console.log(this.name);
  }

  const person1 = { name: "Jc" };
  const person2 = { name: "Jayesh" };

  show = show.bind(person1).bind(person2);
  show();

  // 👍A) Jayesh       💡B) undefined
  // 💖C) JC           😀D) TypeError

  /*
  Answer is C) JC because a function which is bound with bind keyword can not be re-bound with other new context, bind chaining does not exist.
  once the function is bound to a particular object, It will always be bound to that object no matter how many times it's further bounded.
  */
}
// MCQ15();

// 👉 MCQ-16
function MCQ16() {
  let person1 = {
    name: { firstName: "Jayesh" },
    age: 24,
  };
  let person2 = { ...person1 };

  person2.name.firstName = "Virat";
  person2.age = 33;

  console.log(person1.name.firstName);
  console.log(person1.age);

  // 👍A) Jayesh, 33     💡B) Jayesh, 24
  // 💖C) Virat, 33      😀D) Virat, 24

  /*
  Answer is D) Virat, 24 because The spread operator makes deep copies of data if the data is not nested. 
  When we have nested data in an array or object the spread operator will create a deep copy of the top most data 
  and a shallow copy of the nested data. 
  person1 and person2 is pointing to different memory address but person1.name and person2.name is pointing to the same memory address

  We Can do Deep copy of nested objects by using:-
  1) const copyObj = JSON.parse(JSON.stringify(originalObj))
  2) const copyObj = structuredClone(originalObj);
*/
}
// MCQ16();

// 👉 MCQ-17
function MCQ17() {
  for (var i = 0; i < 5; i++) {
    setTimeout(
      (i) => {
        console.log(i);
      },
      1000,
      i
    );
  }

  // 👍A) 0 1 2 3 4      💡B) 5 5 5 5 5
  // 💖C) 4 4 4 4 4      😀D) 0 1 2 3 4 5

  /*
  Answer is A) 0 1 2 3 4 because as we are passing i ( 0 to 4 ) value as an argument to setTimeout callback function
  therefore this will console different values of i from 0 to 4.

  if there was no argument passed to setTimeout callback function then the output would be 5 5 5 5 5 because variables declared 
  with var keyword are function-scoped or globally-scoped but not blocked scoped. Inner function i would point to the updated value of i that is 5.
*/
}
// MCQ17();

// 👉 MCQ-18
function MCQ18() {
  console.log(1);

  async function fetchData() {
    console.log(2);
    let result = await Promise.resolve(3);
    console.log(result);
  }

  fetchData();
  console.log(4);

  // 👍A) 1 2 3 4      💡B) 1 4 2 3
  // 💖C) 1 2 4 3      😀D) 1 3 4 2

  /*
  Answer is C) 1 2 4 3 beacause promise is used to handle the asynchronous result of an operation and 
  callback functions attached to the promises are stored into microtask queue. 
  So, first synchronous code will be executed i.e 1,2,4 and once callstack is empty, event loop pushes the microtask queue's task into callstack
  callstack will start executing the task and It will console 3 at last.
  */
}
// MCQ18();

// 👉 MCQ-19
function MCQ19() {
  console.log("start");

  const promise = new Promise((resolve) => {
    console.log(1);
    resolve(2);
    console.log(3);
  });

  promise.then((result) => {
    console.log(result);
  });

  console.log("end");

  // 👍A) start end 1 3 2      💡B) start 1 3 end 2
  // 💖C) start end 1 2 3      😀D) start 1 end 2 3

  /*
  Answer is B) start 1 3 end 2 beacause The function we pass into the Promise constructor runs synchronously, 
  but anything that depends on its resolution ( resolve or reject ) will be called asynchronously. 
  Even if the promise resolves immediately, any handlers ( callback attached to promise then and catch ) will execute asynchronously. 

  const promise = new Promise((resolve) => {
  console.log(1);  // runs synchronously
  resolve(2); // called asynchronously by then callback
  console.log(3); // runs synchronously
});
*/
}
// MCQ19();

// 👉 MCQ-20
function MCQ20() {
  console.log("First");

  const promise = new Promise((resolve) => {
    console.log("Second");
  });

  promise.then((result) => {
    console.log(result);
  });

  console.log("Third");

  // 👍A) First Second undefined Third      💡B) First Third Second
  // 💖C) First Second Third undefined      😀D) First Second Third

  /*
  Answer is D) First Second Third because as there is no resolve in Promise constructor, So it will not go inside of .then block.
  */
}
// MCQ20();

// 👉 MCQ-21
function MCQ21() {
  const fetchData = function () {
    return new Promise((resolve, reject) => {
      reject();
    });
  };

  fetchData()
    .then(() => {
      console.log("Success 1");
    })
    .catch(() => {
      console.log("Error 1");
    })
    .then(() => {
      console.log("Success 2");
    });

  // 👍A) Error 1 TypeError    💡B) Error 1
  // 💖C) Error 1 Success 2    😀D) undefined

  /*
  Answer is C) Error 1 Success 2 because in promise chaining .then method below .catch method will be called if in .catch method we are not 
  returning rejected promise ( by default implicitly returns a promise that is handled by it's below .then method )
  */
}
// MCQ21();

// 👉 MCQ-22
function MCQ22() {
  function foo() {
    let a = (b = 0);
    a++;
    return a;
  }
  foo();
  console.log(typeof a);
  console.log(typeof b);

  // 👍A) undefined number        💡B) ReferenceError number
  // 💖C) undefined undefined     😀D) number number

  /* 
  Answer is A) undefined number because variable a is declared with let it is blocked scope and will be "not defined" outside function foo().
  The typeof operator returns "undefined" even for “undeclared” (or “not defined”) variables.
  Notice that there was no error thrown when we executed typeof a, even though a is an undeclared variable. 
  This is a special safety guard in the behavior of typeof. 
  and variable b is a just global scope variable hence it will be available outside function foo() also. 
  */
}
// MCQ22();

// 👉 MCQ-23
function MCQ23() {
  console.log("start");

  setTimeout(() => {
    console.log("first");
  }, 0);

  Promise.resolve("second").then((res) => console.log(res));

  console.log("end");

  // 👍A) start end first second       💡B) start first second end
  // 💖C) start end second first       😀D) start first end second

  /* 
  Answer is C) start end second first because callback function attached to Promises added into microtask queue 
  whereas callback function of setTimeout added into callback ( macroTask ) queue. 
  microTask queue has more priority than callback ( macroTask ) queue.
  */
}
// MCQ23();

// 👉 MCQ-24
function MCQ24() {
  const person1 = {
    name: "Jayesh",
    age: 24,
  };

  const person2 = person1;
  person2.name = "Virat";

  console.log(person1.name);
  console.log(person2.name);

  // 👍A) Jayesh Virat  💡B) Virat Virat
  // 💖C) Virat Jayesh  😀D) Jayesh Jayesh

  /* 
  Answer is B) Virat Virat because objects are passed as a reference, person1 and person2 will hold the same memory address
  and altering any property of person2 will modify property of person1 as well.
  */
}
// MCQ24();
