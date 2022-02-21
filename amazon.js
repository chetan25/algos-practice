function serialize() {
  // could be input nodes with attribute name as name='a.b.c'
  /* expected output
    {
     a: {
       b: {
         c: 'test'
       },
       e: {
         d: 'test'
       }
     }
   } */
  var inp = [
    ["a", "b", "c"],
    ["a", "e", "d"],
  ];
  var value = "test";

  var op = {};
  for (let j = 0; j < inp.length; j++) {
    var temp = op;
    for (let i = 0; i < inp[j].length; i++) {
      if (!temp.hasOwnProperty(inp[j][i])) {
        if (i === inp[j].length - 1) {
          temp[inp[j][i]] = "test";
        } else {
          temp[inp[j][i]] = {};
        }
      }
      temp = temp[inp[j][i]];
    }
  }
  console.log(op);
}

serialize();
