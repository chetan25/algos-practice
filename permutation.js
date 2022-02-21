//Given a collection of distinct numbers, return all possible permutations.
//
//For example,
//[1,2,3] have the following permutations:
//[
//[1,2,3],
//[1,3,2],
//[2,1,3],
//[2,3,1],
//[3,1,2],
//[3,2,1]
//]

function perm(arr) {
    var op = {};
    for(var i = 0; i<arr.length; i++) {
        var firstElement = arr.shift();
        var res = getPerm(arr, firstElement);
        op[i] = res;
        arr.push(firstElement);
    }

//   return op;
    console.log(op);
}

function getPerm(arr, el) {
    if(arr.length === 2) {
        var com1 = [el, arr[0], arr[1]];
        var com2 = [el, arr[1], arr[0]];

        return [com1, com2]
    }
    var res = [];
    for(var i = 0; i<arr.length; i++) {
        var fe = arr.shift();
        var op = getPerm(arr, fe);
        res.push(op[0]);
        res.push(op[1]);
        arr.push(fe);
    }

    return res.map(function(v) {
        v.unshift(el);
        return v;
    });
}

perm([1,2,3]);

   //
   // 0: [[1, 2, 3], [1, 3, 2]],
   //  1: [[2, 3, 1], [2, 1, 3]],
   //  2: [[3, 1, 2], [3, 2, 1]]