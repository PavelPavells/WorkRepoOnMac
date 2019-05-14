

function find(a, sum) {
  var n = a.length;
  for(var i = 0; i<n; i++) {
    for(var j = 0; j<n; j++) {
      if(i!=j) {
        if(a[i] + a[j] == sum) {
          console.log("found");
          return;
        }
      }
    }
  }
  console.log("not found");
}

var a = [1, 2, 4, 3, 7];
var sum = 11;

find(a, sum);