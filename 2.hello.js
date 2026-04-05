//node-v 
// to check in terminal

// 1console.log("Hello World"); 
// console.log("Welcome to JavaScript");

//ls
// it will show FileSystemDirectoryEntry
//  node 2.hello

2 const hello=(hname) => {
    console.log(`Hello ${hname}`);
}

hello("gooms");
// DOMS - TREE LIKE STRUCTURE


// const hello=(hname) => {
//     console.log(`Hello ${hname}`);
// }

//hello("gooms");
// console.log(window);

//for window and document we have to use in browser
// Global object 

3 setTimeout(() => {
    console.log("This is a timeout function");
    clearInterval(intfunc);
},2000);
//every five seconds the program will be running


4 setInterval(() => {
    console.log("This is a interval function");
},3000);
// it will be in loop

//Windows no longer present in node js
//Global object is present in node js

console.log(__dirname); //which directory it is theere
console.log(__filename); //which file it is there



