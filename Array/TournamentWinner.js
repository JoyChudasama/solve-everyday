const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
];
const results = [0, 0, 1]
// Expected Output = Python

// Solution 1 - O(n) time | O(k) space - k is the number of teams
function tournamentWinner(competitions, results) {

    const scoreBoard = {};
    let winner = { score: 0, name: '' };

    for (let i = 0; i < competitions.length; i++) {
        const homeTeam = competitions[i][0]
        const awayTeam = competitions[i][1]

        if (results[i] === 1) { scoreBoard[homeTeam] = (scoreBoard[homeTeam] || 0) + 3; }
        if (results[i] === 0) { scoreBoard[awayTeam] = (scoreBoard[awayTeam] || 0) + 3; }

        if (scoreBoard[homeTeam] >= winner.score) { winner = { score: scoreBoard[homeTeam], name: homeTeam } }
        if (scoreBoard[awayTeam] >= winner.score) { winner = { score: scoreBoard[awayTeam], name: awayTeam } }
    }

    return winner.name;
}


const result = tournamentWinner(competitions, results)
console.log(result)