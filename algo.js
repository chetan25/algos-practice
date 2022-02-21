//getProduct of array element except itself
function getProduct(inp) {
    var product = 1;
    var len = inp.length;
    for(var i=0; i< len; i++) {
        product = product * inp[i];
    }
    var result = [];
    for(var j=0; j< len; j++) {
        result.push(product/ inp[j]);
    }

    return result;
}

//given list of number, return if twp number add upto Certain given Sum
function hasSum(inp, sum) {
    var hasMap = {};
    for (var i=0; i<inp.length; i++) {
        var diff = sum - inp[i];
        if (hasMap[diff]) {
            return true;
        }
        hasMap[inp[i]] = diff;
    }

    return false;
}


//inp chat
// regx 'ra.' - any single char
// '.*' - zero or more preceding char
function check(inp, regx) {
    var indexA = regx.indexOf('.*');
    if (indexA === 0) {
        var str = regx.slice(2, regx.length);
        var txt = '';
        var index = inp.indexOf(str);

        return (index + 1 === inp.length -1) && (index > 0);
    } else {
        if (regx[0] === '.') {
            var strB = regx.slice(1, regx.length);
            var ind = inp.indexOf(strB);

            return ind - 1 === 0 && ind + 1 === inp.length-1;
        }
        var strC = regx.slice(0, regx.length-1);
        var indC = inp.indexOf(strC);

        return indC === inp.length -1;
    }
}

console.log(check('ray', '.ay'));
console.log(check('rays', '.ay'));
console.log(check('chat', '.*at'));
console.log(check('chats', '.*at'));



//AAAABBBCCDAA - IP
//4A3B2C1D2A - OP
function getLength(inp) {
    var count = 1;
    var op = '';
    for(var i=0; i< inp.length - 1; i++) {
        if(inp[i] === inp[i+1]) {
            count++;
        } else {
            op = op + count + inp[i];
            count = 1;
        }
    }

    op = op + count + inp[i];

    console.log(op);
}

getLength('AAAABBBCCDAAX');

//Given an array of integers and an integer k, find out whether
//there are two distinct indices i and
//j in the array such that nums[i] = nums[j] and the
//absolute difference between i and j is at most k.

function findIndices(arr, k) {
    var hashMap = {};
    for (var i=0; i<arr.length; i++) {
        if(hashMap.hasOwnProperty(arr[i])) {
            if(i - hashMap[arr[i]] <= k) {
                return true;
            }
        } else {
            hashMap[arr[i]] = i;
        }
    }

    return false;
}

console.log(findIndices([1,5,4,3,6,1,4], 4)); //true -> index 2 and 6 so 6-2 <= 4



// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.


function isBadVersion(version) {
    var badV = [5,6,7,8,9,10];

    return badV.includes(version);
}

function dertermineBad(versions) {
    if(versions.length == 1) {
        return versions[0];
    }

    var mid = parseInt(versions.length/2);
    var vers;
    if (isBadVersion(versions[mid])) {
        //all version after it are bad, so we shift to left half
        var end = mid + 1 < versions.length ? mid +1 : mid;
        vers = versions.slice(0, end);
    } else {
        //all versions before are good, we move right
        vers = versions.slice(mid+1);
    }
    return dertermineBad(vers);
}

console.log(dertermineBad([1,2,3,4,5,6,7,8,9,10,11]), 'result');


// Implement pow(x, n).

function power(x, n) {
    var index = n >= 0 ? n : n * -1;
    var res = product(x, index);
    if (n >= 0) {
        return res;
    } else {
        return 1/res;
    }
}

function product(x, index) {
    if (index===0) {
        return 1;
    }
    if (index === 1) {
        return x;
    }
    return x * power(x, index-1);
}

console.log(power(2,-2));

// SQRT
// Implement int sqrt(int x).
// Compute and return the square root of x.

function  mySqrt(x) {
    if(x === 0) {
        return 0;
    }
    if (x===1) {
        return 1;
    }

    return getSqrt(x, 1, 1);
}

function getSqrt(v, inc, ind) {
    if(v === Math.round(Math.pow(ind, 2))) {
        return ind;
    }
    if (v > Math.round(Math.pow(ind, 2)) && v >= Math.round(Math.pow(ind+inc, 2))) {
        return getSqrt(v, 1, ind+inc);
    }
    if (v > Math.round(Math.pow(ind, 2)) && v < Math.round(Math.pow(ind+inc, 2))) {
        return getSqrt(v, 0.1, ind+0.1);
    }
}

console.log(mySqrt(4));



// You are given two non-empty linked lists representing
//two non-negative integers. The digits are stored in reverse order
//and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

function getSumList(inpA, inpB) {
    var co = 0;
    var op = {};
    var cur = op;
    while(inpA || inpB) {
        var val1 = inpA ? inpA.val : 0;
        var val2 = inpB ? inpB.val : 0;
        cur.val = (val1 + val2 + co) % 10;
        console.log(cur);
        co =  Math.floor((val1 + val2 + co) / 10);
        cur.next = {};
        cur = cur.next;
        inpA = inpA.next;
        inpB = inpB.next;
    }

    console.log(JSON.stringify(op));
}

getSumList(
    {
        val: 2,
        next: {
            val: 4,
            next: {
                val: 3,
                next: null
            }
        }
    },
    {
        val: 5,
        next: {
            val: 6,
            next: {
                val: 4,
                next: null
            }
        }
    }
);