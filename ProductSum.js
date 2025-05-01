// Product Sum

// Write a function that takes in a "special" array and returns its product sum.
// A "special" array is a non-empty array that contains either integers or other
// "special" arrays. The product sum of a "special" array is the sum of its
// elements, where "special" arrays inside it are summed themselves and then
// multiplied by their level of depth.

// Example:
// array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// output = 12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)


function productSum(array, multiplier = 1) {
    let currentSum = 0;

    for (let element of array) {
        if (Array.isArray(element)) {
            currentSum += productSum(element, multiplier + 1);
        } else {
            currentSum += element;
        }
    }

    return currentSum * multiplier;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
