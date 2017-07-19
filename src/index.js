/* eslint-disable one-var, one-var-declaration-per-line, no-plusplus, no-continue */
function smaller(arr) {
  const l = arr.length, res = new Array(l);
  let i = l - 1, j = 1, max = arr[l - 1], min = arr[l - 1];
  res[l - 1] = 0;
  for (;i >= 0; i--) {
    const a = arr[i], next = i + 1;
    let sum = 0;
    if (a > max) {
      res[i] = l - next;
      max = a;
      continue;
    } else if (a < min) {
      res[i] = 0;
      min = a;
      continue;
    } else if (a === arr[next]) {
      res[i] = res[next];
      continue;
    }
    for (j = next; j < l; j++) {
      const b = arr[j];
      if (a === b) {
        sum = res[j] + sum;
        break;
      } else if (a > b) {
        sum++;
      }
    }
    res[i] = sum;
  }
  return res;
}

export default smaller;
