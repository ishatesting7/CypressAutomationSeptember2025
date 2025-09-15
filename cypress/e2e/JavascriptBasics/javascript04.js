function addElementAtIndex(arr, index, value) {
    arr.splice(index, 0, value);
    console.log(arr);
}

function removeElementAtIndex(arr, index) {
    arr.splice(index, 1);
    console.log(arr);

}

function clearArray(arr) {
    arr.splice(0, arr.length);
}

let arr11 = [10,12];

addElementAtIndex(arr11, 2, 25); // to add value at specific index

removeElementAtIndex(arr11, 10); // to remove value at specific index

clearArray(arr11); // to clear the array

console.log(arr11);