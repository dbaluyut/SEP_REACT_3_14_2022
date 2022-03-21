// types
// number
// boolean
// string
// undefined
// null

// Symbol 
// BigInt

// typof
// function
// object

// let foo2 = function(){
// }
// console.log(typeof foo2);

// let num = 5;
// function foo(input){
//     input = 100;
//     console.log(input)//100
// }
// foo(num);
// console.log(num)// 5

// let obj = {
//     name:'patrick'
// };

// function foo(obj){
//     // obj.name = 'changed';
//     obj = {name:'changed'}
//     console.log(obj)// changed
// }

// foo(obj);
// console.log(obj)// patrick


// var, let, const, 
// function foo(){
//     if(true){
//         (function(){
//             var a =5;
//         })()
//     }
//     console.log(a);
// }
// foo();

// a =5;
// console.log(a)

// prototype 



// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }
//     say(){
//         console.log('hello')
//     }
// }
// Person.prototype.say2 = function(){
//     console.log("hello2")
// }


// const p = new  Person('patrick',20)
// const p2 = new  Person('patrick2',20)
// console.log(p)
// console.log(p.say === p2.say)
// p.say();

// console.log(p.toSdsfdsfdsftring)


// const obj = {
//     name:'patrick',
//     printName:function(){
//         console.log("this",this)
//         console.log(this.name)
//     }
// }

// const obj2 = {
//     name:'patrick1',
//     printName:function(){
//         console.log("this",this)
//         console.log(this.name)
//     }
// }
// const obj3 = {
//     name:'patrick2',
//     printName:function(){
//         console.log("this",this)
//         console.log(this.name)
//     }
// }
// // console.log("test" ,(()=> {})==(()=>{}))
// //console.log("test2", 1 == "1") // coersion

// //console.log(obj.toString == obj2.toString)

// const foo = function(){
//     console.log('foo')
// }
// foo.age  =28;
// console.dir(foo)


// obj.name = 'changed'
// obj.age = 5;
// // obj = {name:'changed'}
// console.log(obj);


// function Person(){

// }

// console.log(typeof Person)

// const arr = [1,2,3];
// console.dir(arr)
// arr.map(()=>{})

// callback function

// function foo(callback){
//     callback()
// }
// function foo2(){
//     console.log("foo2")
// }
// foo(foo2);

// setTimeout(()=>{
// },1000);
// document.addEventListener('click',()=>{
// })
// const arr = [1,2,3];

// imperative
// for(let value in arr){

// }

// for( let index of arr){
//     console.log(index)
// }

// for(let i =0;i<arr.length;i++){

// }


//declaritive 
// arr.map(item=>{

// });
// const array1 = [1, 4, 9, 16];

// pass a function to map
// Array.prototype.map = function(cb){
//     const result = []
//     for(let i =0;i<this.length;i++){
//         const newItem = cb(this[i])
//         result.push(newItem);
//     }   
//     return result;
// }


// const map1 = array1.map(x => {return x * 3});
// console.log(map1)

// console.log([1,2,3].map(()=>5)) // 

// function outer(input){
//     console.log("outer",input)
// }

// function inner(){
//     console.log('inner')
// }

// outer(()=>inner()) 


// callstack


// Array.prototype.forEach = function(cb){
//     for(let i =0;i<this.length;i++){
//        cb(this[i])
//     }   
// }

// const result = [1,2,3].forEach(()=>5);
// console.log(result)
//console.log(map1);
// expected output: Array [2, 8, 18, 32]

// arr.forEach((item)=>{

// })
// arr.filter(()=>{

// })
// arr.reduce(()=>{

// });

// arr.some(()=>{

// });
// arr.every(()=>{
// })
// Array.prototype.filter = function(cb) {
//     const result = []
//     for(let i=0; i<this.length; i++){
//         if(cb(this[i], i, this )){
//             result.push(this[i])
//         }
//     }
//     return result;
// }

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// closure


// function outter(){
//     let a = 5;
//     return  function foo(){
//         console.log(a)
//     }
// }

// let inner = outter()
// inner()
//console.log(inner)

// curring function
// function add(num){
//     return function(num1){
//         return function(num2){
//            return  num + num1 +num2
//         }
//     } 
// }

// const result = add(2)(3)(4);
// console.log(result)

// module pattern with IIFE
// const Controller = (function(){
//     function init(){
//         console.log('init')
//        // dom.addEventListener()
//     }

//     return {init}

// })()
// console.log(Controller)

// Arrow function
// const arrowFn = ()=>{
//     console.log("arrow")
// }

// const normalFn = function(){
//     console.log(this)
//     console.log("normal")
// }
// call vs apply vs bind

// generator | async programing

// function fetchData(cb) {
//     const timer = Math.random() * 10000;
//     setTimeout(() => {
//         const resultData = `resultData,${timer}`;
//         cb(resultData)
//     }, timer)
// }

// fetchData(resultData1 => {
//     messge(resultData1)
//     fetchData(
//         (resultData2) => {
//             messge(resultData2)
//             fetchData((resultData3) => {
//                 messge(resultData3)
//             })
//         }
//     )
// })

// function messge(resultMsg) {
//     console.log("message:", resultMsg)
// }

// function foo() {
//     for (var i = 0; i < 9; i++) {
//         (function (i) {
//             setTimeout(() => {
//                 console.log(i)
//             }, i * 1000)
//         })(i)
//     }
// }
// foo()


// function alertMsg(resultMsg){
//     alert(resultMsg)
// }

