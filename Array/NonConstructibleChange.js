const coins = [5, 7, 1, 1, 2, 3, 22];
// Expected Output = 20

//O(n*log(n)) time | O(1) space
function nonConstructibleChange(coins) {
    let change = 0;
    coins.sort((a, b) => a - b)

    for (let i = 0; i < coins.length; i++) {
        if (coins[i] > change + 1) return change + 1;
        change += coins[i];
    }

    return change + 1;
}

const result = nonConstructibleChange(coins)
console.log(result)