//merge-sort -O(nlogn)


function sort(inp) {
    if(inp.length < 2) {
        return inp;
    }
    var mid = Math.floor(inp.length/2);
    var left = inp.slice(0, mid);
    var right = inp.slice(mid);

    return merge(sort(left), sort(right));
}

function merge(left, right) {
    var res = [];
    var lf = 0;
    var rt = 0;
    while(lf < left.length && rt < right.length) {
        if (left[lf] < right[rt]) {
            res.push(left[lf]);
            lf++;
        } else {
            res.push(right[rt]);
            rt++;
        }
    }
    //we need to merge the rest;
    return res.concat(left.slice(lf), right.slice(rt));
}

console.log(sort([7,5,2,4,3,9]));


// sort two merged array O(n)
function mergeSortArray(firstArray, secondArray) {
  var length = firstArray.length +  secondArray.length;
  var result = [];
  for(var i=0; i < length; i++) {
    if (firstArray[0] <= secondArray[0]) {
      result.push(firstArray[0]);
      firstArray.shift();
    } else {
      result.push(secondArray[0]);
      secondArray.shift();
    }
  }
  
  return result;
}

// console.log(mergeSortArray([1,3,5], [5,6,7]));


//sort a unsorted array Bubble sort O(n^2)
function SortArray(unsortedArray) {
   var temp;
   for (var i = 0; i < unsortedArray.length; i++) {
      for (var j = i + 1; j < unsortedArray.length; j++) {
          if (unsortedArray[i] > unsortedArray[j]) {
            temp = unsortedArray[j];
            unsortedArray[j] = unsortedArray[i];
            unsortedArray[i] = temp;
          }
      }  
   }
  return unsortedArray;
}

// console.log(SortArray([1,7,5]));


//remove dupes
function removeDupes(dupedArray) {
   var data = [dupedArray[0]];
   for(var i=0; i<dupedArray.length; i++) {
     var shift = 1;
     for(var j=0; j<data.length; j++) {
         if (data[j] == dupedArray[i]) {
           shift = shift -1;
           break;
         } 
      } 
      if(shift > 0) {
        data.push(dupedArray[i]);
      }
   }
  
  return data;
}

// console.log(removeDupes([2,3,5,3,4,4,2]));

//check for palindrome O(n)
function isPalindrome(inputString) {
    let reverseString = '';
    for (let data of inputString) {
        console.log(data);
        reverseString = data +  reverseString
    }
    console.log(reverseString);

    return reverseString == inputString;
}

console.log(isPalindrome('poopw'))


function maxCharacter(inputString) {
    const charSet = {};
    charSet[inputString[0]] = 0;
    for (let data of inputString) {
        if (charSet.hasOwnProperty(data)) {
            charSet[data] += 1;
        } else {
            charSet[data] = 1;
        }
    }
    return charSet;
}

console.log(maxCharacter('pooptest word'));


