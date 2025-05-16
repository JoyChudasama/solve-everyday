### 1. Choice
What options are available at this step?
→ Example: choosing a number, a direction, or a letter.

### 2. Constraint
What makes a choice valid or invalid?
→ Example: “no repeats,” “adjacent cells only,” or “must be increasing.”

### 3. Goal (Base Case)
When is the solution complete?
→ Example: built a path, filled the array, found a target.

### 4. Backtrack Step
Undo the current choice before the next iteration.
→ Restore the state to try a different path.

### A General Template
```
function backtrack(path, choices) {
    if (goal achieved) {
        result.push([...path]);
        return;
    }

    for (let choice of choices) {
        if (invalid(choice)) continue;

        // make a choice
        path.push(choice);

        // explore
        backtrack(path, updatedChoices);

        // undo the choice (backtrack)
        path.pop();
    }
}
```

### Strategy to apply

Ask yourself:

| Question                                     | Helps Decide                           |
| -------------------------------------------- | -------------------------------------- |
| What am I trying to **build** or **select**? | Result/Path                            |
| What are the **choices** at each step?       | For-loop over input                    |
| What **constraints** must I check?           | Skip invalid choices                   |
| When is a solution **complete**?             | Base case                              |
| How do I **undo** a move?                    | Backtrack step (`pop`, `unmark`, etc.) |
