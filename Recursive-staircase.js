function stepPerms(steps)
{
    var allowedX = [1,2,3];
    var stepCount = {};
    stepCount[0] = 1;//zero steps 1 way to climb
    //loop for remaining steps
    for (var i=1; i<=steps; i++) {
        var count = 0;
        for(let x of allowedX) {
            if (i-x >= 0) {
                count += stepCount[i-x];//count is additive of previous number of ways
            }
        }
        stepCount[i] = count;
    }
    return stepCount[steps];
}


console.log(stepPerms(5)); //13
//     0: 1,
//     1: 1,
//     2: 2,
//     3: 4,
//     4: 7,
//     5: 13