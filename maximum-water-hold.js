function Execute(inputArray)
{
    var qty = 0;
    // Trim away the leading and trailing 0s from input array
    var arr = inputArray;
    var start = arr[0];
    var end = GetMyClosing(0, arr);
    for(var i =1; i< arr.length-1; i++)
    {
        if(arr[i]==end)
        {
            start = arr[i];
            end = GetMyClosing(i, arr);
        }
        else
        {
            qty += (start<end?start:end)- arr[i];
        }
        if (end == 0)
            break;
    }

    return qty;
}

function GetMyClosing(index,  arr)
{
    var myClosing = 0;
    for(var i =index+1; i<arr.length;i++)
    {
        if (arr[i] >= arr[index])
            return arr[i];

        if (arr[i] > myClosing)
            myClosing = arr[i];
    }
    return myClosing;
}


console.log(Execute([0,1,0,2,1,0,1,3,2,1,2,1])); //6
console.log(Execute([0,0,0,1,1,0,0])); //0


// Given n non-negative integers a1, a2, ..., an , 
// where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the 
// line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, 
// such that the container contains the most water

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    
};
