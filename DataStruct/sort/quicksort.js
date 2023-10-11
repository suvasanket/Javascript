function sort(ar, lowindex, highindex) {
  if (lowindex >= highindex) {
    return;
  }
  let pivot = ar[highindex];
  let lp = lowindex;
  let hp = highindex;

  while (lp < hp) {
    while (ar[lp] <= pivot && lp < hp) {
      lp++;
    }
    while (ar[hp] >= pivot && lp < hp) {
      hp--;
    }
    swap(ar, lp, hp);
  }
  swap(ar, lp, highindex);
  sort(ar, lowindex, lp - 1);
  sort(ar, lp + 1, highindex);
}

function swap(ar, index1, index2) {
  let temp = ar[index1];
  ar[index1] = ar[index2];
  ar[index2] = temp;
}

let array = [1, 2, 3, 4, 5, 0, 6, -29];
console.log(array);
sort(array, 0, array.length - 1);
console.log(array);
