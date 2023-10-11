const mergeSortRec = (arr) => {
  const length = arr.length;

  if (length === 1) {
    return arr;
  }

  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, length);

  return merge(mergeSortRec(left), mergeSortRec(right));
};

function merge(leftarr, rightarr) {
  let result = [];
  let x = leftarr.length;
  let y = rightarr.length;
  let i = 0;
  let j = 0;
  while (i < x && j < y) {
    if (leftarr[i] < rightarr[j]) {
      result.push[i];
      i++;
    } else {
      result.push[j];
      j++;
    }
  }
  while (i < x) {
    result.push[i];
    i++;
  }
  while (j < y) {
    result.push[j];
    j++;
  }
  return result;
}

let arr = [1, 2, 4, 7, 9, -90];

mergeSortRec(arr);
console.log(arr);
