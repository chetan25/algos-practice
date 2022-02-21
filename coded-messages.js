const hasMap = {
  1: 'a',
  2: 'b',
  3: 'c',
  4: 'd',
  5: 'e',
  12: 'g',
  23: 'v',
  14: 'l'
}

function getCount(inp, index) {
  if (index >= inp.length) {
     return '';
  }
  if (index == inp.length -1) {
    return hasMap[inp[index]];
  }
  var res1 = '';
  res1 = hasMap[inp[index]] + getCount(inp, index +1);
   var res2 = '';
   if (index + 1 <= inp.length) {
    var key = inp[index] + inp[index+1];
    if (hasMap[key]) {
      res2 = hasMap[key] + getCount(inp, index +2);
      }
   }

  var op = [];
  op.push(res1, res2);

  return op;
}

function getMessages(inp) {
  var res2 = [];
  var res1 = [];
  res1 = getCount(inp, 1);
  var key = inp[0] + inp[1];
  if (hasMap[key]) {
    res2 = getCount(inp, 2);
  }


  console.log(res1, 'res1');
  console.log(res2, 'res2');
}

/* getMessages('412'); */
getMessages('2314');
