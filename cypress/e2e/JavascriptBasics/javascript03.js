//Handle Array Structures in JavaScript
//Array is a collection of multiple values in a single variable
//Arrays are of two types: 1. Single Dimensional Array 2. Multi Dimensional Array

//Single Dimensional Array
let arr = [10,20,30,40,50,"Demo",true,12.33];
console.log(arr);
console.log(arr[0]);
console.log(arr[5]);
console.log(arr.length); //length of the array
console.log(arr[arr.length-1]); //to get the last value of the array

//Loop through the array
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}


//Array Methods
arr.push(60);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(5);
console.log(arr);
arr.splice(2,0,25); //to add value at specific index
console.log(arr);
arr.splice(4,1); //to remove value at specific index
console.log(arr);
let newArr = arr.slice(2,5); //to get a subset of the array
console.log(newArr);
let index = arr.indexOf(30); //to get the index of a specific value
console.log(index);
let isPresent = arr.includes(100); //to check if a value is present in the array or not
console.log(isPresent);


console.log('================================');


let arr11 = [10,12];

arr11.splice(2,0,25); //to add value at specific index

arr11.splice(10,1); //to remove value at specific index

arr11.splice();

console.log(arr11);


console.log('================================');


//Multi Dimensional Array
let arr1 = [[10,20,30],[40,50,60],[70,80,90]];
console.log(arr1);
console.log(arr1[0]); //-----> 10,20,30
console.log(arr1[1][2]); //------> 60
console.log(arr1.length); //length of the main array
console.log(arr1[0].length); //length of the first inner array

//Loop through the multi dimensional array
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr1[i].length; j++){
        console.log(arr1[i][j]);
    }
}

//able to traverse through forEach loop
