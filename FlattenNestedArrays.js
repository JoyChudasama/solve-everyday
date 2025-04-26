// Flatten Nested Arrays
// Write a recursive function that takes a deeply nested array of integers and returns a flat version (all values in a single array).

function flattenArray(array) {
    const result = [];
    flattenArrayHelper(array, result);
    return result;
}

function flattenArrayHelper(arr, flatArray) {
    
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            flattenArrayHelper(elem, flatArray);  
        } else {
          flatArray.push(elem);     
        }
      }
}


console.log(flattenArray([1, 2, 3, [4, [5, 6], [7, 8], 9], 10]))