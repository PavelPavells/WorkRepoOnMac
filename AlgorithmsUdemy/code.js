var arr = [1, 2, 3, 10, 11, 15, 100, 10000];
var toFind = 11;
var l = 0, r = arr.length-1;

while(l!=r) {
  var mid = (l+r)/2;
  if(arr[mid] == toFind) {
    console.log(mid);
    break;
  }
  if(arr[mid] < toFind) {
    l = mid+1;
  } else {
    r = mid-1;
  }
}

if(l==r) {
  console.log(l);
}