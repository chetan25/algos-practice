// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case

function groupAnagrams(inp) {
    var visited = [];
    var op = [];
    for(var i = 0; i<inp.length; i++) {
        var anagram = [];
        if(visited.includes(inp[i])) {
            continue;
        }
        var stringA = [...inp[i]].sort().join('');
        for(var j=i+1; j<inp.length; j++) {
            if (inp[j].length !== inp[i].length) {
                continue;
            }
            var stringB = [...inp[j]].sort().join('');
            if(stringA === stringB) {
                anagram.push(inp[j]);
                visited.push(inp[j]);
            }
        }
        anagram.unshift(inp[i]);
        op.push(anagram);
    }

    return op;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));