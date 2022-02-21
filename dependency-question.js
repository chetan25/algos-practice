//dependency graph - depth first

function getOrder(inp) {
    var dep = [];
    Object.entries(inp).forEach(function(el) {
        serachDep(inp, parseInt(el[0]), dep);
    });

    return dep;
}

function serachDep(inp, key, dep) {
    if (dep.includes(key)) {
        return;
    }
    if (inp[key].length === 0) {
        dep.push(key);
        return;
    }

    for(var i = 0; i< inp[key].length; i++) {
        if (dep.includes(inp[key][i])) {
            continue;
        }
        serachDep(inp, inp[key][i], dep);
    }
    dep.push(key);
}

console.log(getOrder({
    8: [1,2,3,4],
    0: [7],
    1: [5, 7],
    2: [0],
    3: [1, 2],
    4: [3],
    5: [0],
    6: [1, 7],
    7: [],
}));

//[7, 0, 5, 1, 2, 3, 4, 6, 8]