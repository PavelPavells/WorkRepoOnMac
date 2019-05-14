
var arr = [1, 1, 1, 0, 0];
var n = arr.length;
var zeroCount = 0;
var oneCount = 0;
for(var i = 0; i<n; i++) {
  if(arr[i] == 0) {
    zeroCount = zeroCount + 1;
  } else {
    oneCount = oneCount + 1;
  }
}

for(var i = 0; i<zeroCount; i++) {
  arr[i] = 0;
}

for(var i = 0; i<oneCount; i++) {
  arr[zeroCount + i] = 1;
}

console.log(arr);