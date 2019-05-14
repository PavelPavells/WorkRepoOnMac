

function findFirst(arr) {
  arr.sort();
  var foundTillNow = -1;
  for(var i = 0; i<arr.length; i++) {
    if(foundTillNow == arr[i] || foundTillNow + 1 == arr[i]) {
      foundTillNow = arr[i];
    } else {
      return foundTillNow + 1;
    }
  }

  return foundTillNow + 1;
}

var arr = [2, 1, 4, 0, 3,7, 9 ,6, 2, 5]

var ans = findFirst(arr);
console.log(ans);