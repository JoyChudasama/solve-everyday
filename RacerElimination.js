// Racer Elimination by Slowest Speed

// You are managing a multi-lap racing event where each racer's time to finish each lap is recorded. Your task is to simulate the race and determine the order in which racers are eliminated based on their lap times.

// Rules:
//      You are given a 2D array laps, where each subarray represents one lap.
//      Each element in a lap is a string formatted as: "name time", where:
//      name is the racer's unique name (string with no spaces),
//      time is the time (positive integer) the racer took to finish the lap.
//      All racers participate in the first lap.

// In each lap:
//      Consider only racers who have not yet been eliminated.
//      Determine the maximum lap time among these racers (i.e., the slowest).
//      Eliminate all racers who took that maximum time.
//      If multiple racers are eliminated in the same lap, sort them alphabetically by name before adding them to the result.
//      Repeat this process for each lap or until all racers have been eliminated.
//      Return a list of all eliminated racers in the order they were eliminated.

// O(n*m) time where n is the number of laps and m is the number of racers
// O(n*m) space
function eliminateSlowRacer(laps) {

    const res = new Set()
    const result = []

    for (let i = 0; i < laps.length; i++) {
        let maxTime = Number.NEGATIVE_INFINITY;
        const currLap = [];

        for (let j = 0; j < laps[i].length; j++) {
            const [name, timeStr] = laps[i][j].split(' ');
            const time = parseInt(timeStr, 10);

            if (res.has(name)) continue;

            currLap.push({ name, time: time });
            if (time > maxTime) maxTime = time;
        }

        const toEliminate = currLap
            .filter(r => r.time === maxTime)
            .map(r => r.name)
            .sort();

        for (const name of toEliminate) {
            res.add(name);
            result.push(name);
        }
    }

    return result;
}

console.log(eliminateSlowRacer([
    ["larry 150", "sam 160", "john 155", 'kat 100'],
    ["sam 140", "larry 110", "john 255", 'kat 200'],
    ["larry 140", "sam 140", "john 125", 'kat 140'],
]));
