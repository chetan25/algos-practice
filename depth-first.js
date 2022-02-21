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


function dfs(tree, value) {
    // queue
    var stack = []
    //push root element to queue
    stack.push(tree[0])

    //while queue is empty
    while (stack.length !== 0) {
        //remove the last element from queue
        var node = stack.pop()

        if (node.value === value) {
            return node
        }
        //since we always traverse left to rigth
        //we push right first and then left
        if (node.right) {
            //push the right child
            stack.push(tree[node.right])
        }
        if (node.left) {
            //push the left child
            stack.push(tree[node.left])
        }
    }
    return null
}

console.log(dfs(inp, 0));