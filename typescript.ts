//Type Aliases:
// type detail={
//     readonly _id:string
//     name:string,
//     email:string,
//     contact:number,

// }

// const obj=(pt:detail):string=>{
//     return ""


// }
//bad behaviour
//obj({_id:"userDeatails",name:"jyoti",email:"",contact:867463,state:""}) //error
const data ={_id:"userDeatails",name:"jyoti",email:"",contact:867463,state:""}
obj(data)
type detail={
    readonly _id:string
    name:string,
    email:string,
    contact:number,
    credentials?:string //optional
    
}
let informatoin:detail = {
    _id:"userDeatails",name:"jyoti",email:"",contact:867463
}

// let informatoin:detail = {
//     _id:"userDeatails",name:"jyoti",email:"",contact:867463,credentials:""
// }
// informatoin._id="" //error
informatoin.name="riya"
console.log(informatoin)

type cardNumber ={
    cardNumber :number
}
type cardDate={
    cardDate:number
}
type cardDetails =cardNumber & cardNumber & {cvv : number}


//Array

const array :string[]=["",""]

const arr:number[]=[1,2,3,4,5]
arr[2]="" //error will not assign string to it


const arr: Array<number>=[1,2,3,4]


type user={
    name:string,
    isAvtive:boolean
}

const details : user[]=[{name:"",isAvtive:false},{name:"",isAvtive:false}]

//type user={
//    name:string,
//    isActive:boolean
//}


const details : user[]=[]

details.push({name:"",isActive:false})

let value:number | string = 24
value =""

const data= (getData:string|number)=>{
    // getData.toLowerCase() //error
    if(typeof(getData)==="string"){
        getData.toLocaleLowerCase()
    }
}
data("thor")
data(45667)
let data1 :(number | string)[]=[1,2,3,""]


//Tuples :order of the data matters in array

let tdata :[number,boolean,string]
tdata=[1234,true,""] //in the same order as mention

tdata=[1234,"",false] //error order not match

//enum

const enum data{
    name="jyoti",
    city="varanasi"
}
const detail = data.name

//interface

interface user{
    email:string,
    readonly dbID : number,
    // startTrail:()=>string,
    startTrail():string,
    getCoupon(coupon:string):number
    
}
//re-open the interface inorder add some additional properties
interface user{
    googleId:number
}
const jyoti:user={email:"jyoti",dbID:3455,startTrail:()=>{
    return "trail started"
},
getCoupon:(couponName:"jyoticoupon123")=>{
    return 1234
},
googleId:3746746

}
//classes

class user{
    email:string
    name:string 
    // state:string //error
    state:string=""

    constructor(email:string,name:string){
        this.email=email
        this.name=name
    }
}
const jyotiDetails = new user("jyoti123@gmail.com","jyoti")
jyotiDetails.state="varanasi"


//interface 
interface TakePhoto{
    cameraMode:string,
    filter:string
}
interface story{
    createStory():void
}
class instagram implements TakePhoto,story{
    constructor( public cameraMode:string , public filter:string)
    {}
    createStory():void{
        console.log("story created!")
    }
}


//abstract 

abstract class detail {
    constructor(
        public email :string,
        public name : string
    ){}
}

// let user = new detail ("jyoti@.gmail.com","jyoti")//error can't create new object from abstract class

class userDetails extends detail{

}

let user = new userDetails("jyoti@.gmail.com","jyoti")
