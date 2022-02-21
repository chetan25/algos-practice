
// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
//Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

function find3Sum(inp, sum) {
    var visited = {};
    var op = [];
    inp.sort();

    for(var i=0; i<inp.length; i++) {
        if (visited[inp[i]]) {
            continue;
        }
        get2Sum(i, inp, op, sum - inp[i], visited);
        if (!visited[inp[i]]) {

        }
        visited[inp[i]] = 1;
    }

    return op;
}

function get2Sum(i, inp, op, sum, visited) {
    var hashMap = {};
    var seen = {}
    for(var j=i+1; j<inp.length; j++) {
        if(seen[inp[j]]) {
            continue;
        }
        if (hashMap.hasOwnProperty(inp[j])) {
            seen[hashMap[inp[j]]] = 1;
            seen[inp[j]] = 1;
            op.push([inp[i], inp[j], hashMap[inp[j]]]);
        } else {
            var dif = sum - inp[j];
            hashMap[dif] = inp[j];
        }
    }

}

console.log(find3Sum([-1, 0, 1, 2, -1, -4, 0, 2, -1, 1, -2], 0));
// [[-1, 1, 0], [-1, 2, -1], [-2, 1, 1], [-2, 2, 0], [-4, 2, 2]]


console.log(find3Sum([-1, 0, 1, 2, -1, -4, 0, 2, -1, 1, -2], 3));
// [[-1, 2, 2], [0, 2, 1]]