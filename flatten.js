//i/p
// var dict = {
//   key1: 1,
//   key2: {
//     a: 2,
//     b: {
//       c: 3
//     }
//   }
// }

//op
// {'key1': 1, 'key2.a': 2, 'key2.b.c': 3}

function flatten(inp) {
    if(!inp) {
        return inp;
    }
    console.log(typeof '3');
    var op = {};
    for(var [key, value] of Object.entries(inp)) {
        getFlatten(key, value, op);
    }

    return op;
}

function getFlatten(index, data, op) {
    if(typeof data !== 'object') {
        op[index] = data;
    }

    for(var [key, value] of Object.entries(data)) {
        var fKey = index + '.' + key;
        getFlatten(fKey, value, op);
    }
}

var dict = {
    key1: 1,
    key2: {
        a: 2,
        b: {
            c: 3
        }
    }
};
console.log(flatten(dict));