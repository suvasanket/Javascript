let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let start = 0;
let end = arr.length - 1;
let n = 3;
function binarysearch(arr, start, end, n) {
  if (start > end) return false;
  let mid = Math.floor((end + start) / 2);
  if (arr[mid] === n) return true;
  if (arr[mid] > n) return binarysearch(arr, start, mid - 1, n);
  else return binarysearch(arr, mid + 1, end, n);
}

console.log(binarysearch(arr, start, end, n));
