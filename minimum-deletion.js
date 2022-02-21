// // Minimum Deletions to Make Character

// A string s is called good if there are no two different characters in s that have the same frequency.

// Given a string s, return the minimum number of characters you need to delete to make s good.

// The frequency of a character in a string is the number of times it appears in the string. 
//For example, in the string "aab", the frequency of 'a' is 2, while the frequency 
//of 'b' is 1.

var minDeletions = function(s) {
    var countMap = {};
    
    for(let i =0; i <s.length; i++) {
       if (countMap[s[i]]) {
           countMap[s[i]] += 1;
       } else {
           countMap[s[i]] = 1;
       }    
    }
    var counts = Object.values(countMap);
    counts.sort((a, b) => b - a);
    var change = 0;
    for (let i = 0; i < counts.length; i++) {
        if (counts[i] > 0) {
            for(let j = 0; j < counts.length; j++) {
                if (counts[j] > 0 && i !== j && counts[i] == counts[j]) {
                    change++;
                    counts[j] = counts[j] - 1;
                }
            }
        }   
    }
    
    return change;
};