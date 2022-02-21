
//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
//
//Examples:
//
//s = "leetcode"
//return 0.
//
//s = "loveleetcode",
//return 2.

function getNonRepeatingChar(inp) {
    var hashMap = {};
    for(var i= 0; i<inp.length; i++) {
        if(hashMap.hasOwnProperty(inp[i])) {
            hashMap[inp[i]].count++;
        } else {
            hashMap[inp[i]] = {
                count: 1,
                index: i
            }
        }
    }

    var index = -1;
    Object.entries(hashMap).forEach((function(el) {
        if(index === -1) {
            if (el[1].count === 1) {
                index = el[1].index;
            }
        }
    }));

    return index;
}

console.log(getNonRepeatingChar('leetcodel'));//3