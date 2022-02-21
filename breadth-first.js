var inp = [
    {value: 6, left: 1, right: 2},
    {value: 5, left: 3, right: 4},
    {value: 7, left: null, right: 5},
    {value: 3, left: 6, right: null},
    {value: 4, left: null, right: null},
    {value: 9, left: 7, right: 8},
    {value: 2, left: 9, right: null},
    {value: 8, left: null, right: null},
    {value: 10, left: null, right: null},
    {value: 1, left: null, right: null}
];


function bfs(tree, value) {
    //our queue
    var queue = [];
    //push first node of the tree
    queue.push(tree[0]);
    //repeat queue is empty
    while (queue.length !== 0) {
        //remove the first element from the queue
        var node = queue.shift();

        if (node.value === value) {
            return node
        }
        //since we need to traverse left to right
        if (node.left) {
            //push left node
            queue.push(tree[node.left])
        }
        if (node.right) {
            //push right node
            queue.push(tree[node.right])
        }
    }
    return null
}

console.log(dfs(inp, 0));