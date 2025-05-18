// Generate Paranthesis 

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

// Template
// Choice: either push ( or )
// Constraints: valid paranthesis where opening === closing 
// Goal: populate res with curr string when s.length === n*2
// Backtrack: not doing anything as s+'(' or s+')' passes the new string and does not modify the s(original string)

function generateParenthesis(n) {

    const res = [];

    const dfs = (opening, closing, s) => {
        if (s.length === n * 2) {
            res.push(s);
            return
        }

        if (opening < n) dfs(opening + 1, closing, s + '(');
        if (closing < opening) dfs(opening, closing + 1, s + ')');
    }

    dfs(0, 0, '');
    return res;
}

console.log(generateParenthesis(2))