// Generate All Subsets (Power Set)
// Given an array of unique integers, return all possible subsets (the power set). Order doesn’t matter. No duplicates.
// powerSet([1, 2, 3]) -> [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

function generatePowerSet(arr) {
    const powerSet = [];
    generatePowerSetHelper(arr, 0, [], powerSet)
    return powerSet;
}

function generatePowerSetHelper(arr, index, current, powerSet) {

    if (index === arr.length) {
        powerSet.push([...current]);
        return;
    }

    current.push(arr[index]);
    generatePowerSetHelper(arr, index + 1, current, powerSet);

    current.pop();
    generatePowerSetHelper(arr, index + 1, current, powerSet);
}

console.log(generatePowerSet([1, 2, 3]))