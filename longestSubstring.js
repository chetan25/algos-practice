function longestString(inp, maxLen) {
  var op = [''];
  for(var i=0; i<inp.length; i++) {
    var map = {};
    map[inp[i]] = 1;
    var res = inp[i];
    for(var j=i+1; j<inp.length; j++) {
        if (!map.hasOwnProperty(inp[j]) && Object.keys(map).length < maxLen) {
           map[inp[j]] = 1;
           res += inp[j];
           continue;
        }
        if (map.hasOwnProperty(inp[j])) {
           map[inp[j]] = map[inp[j]] + 1;
           res += inp[j];
           continue;
        }
        if(Object.keys(map).length >= maxLen) {
          if(op[0].length < res.length) {
            op[0] = res;
          }
          break;
        }
    }   
  }
  
  console.log(op);
//   return op;
}

longestString('abcba', 2);