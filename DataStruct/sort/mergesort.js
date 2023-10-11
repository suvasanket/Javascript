function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const length = arr.length;
  let mid = Math.floor(length / 2);
  let leftarr = arr.slice(0, mid);
  let rightarr = arr.slice(mid, length);
  return merge(mergesort(leftarr), mergesort(rightarr));
}

function merge(leftarr, rightarr) {
  let result = [];
  let ll = leftarr.length;
  let rl = rightarr.length;
  let i = 0;
  let j = 0;
  while (i < ll && j < rl) {
    if (leftarr[i] < rightarr[j]) {
      result.push[i];
      i++;
    } else {
      result.push[j];
      j++;
    }
  }
  while (i < ll) {
    result.push[i];
    i++;
  }
  while (j < rl) {
    result.push[j];
    j++;
  }
  return result;
}

let arr = [1, 2, 4, 7, 9, -90];

mergesort(arr);
console.log(arr);
