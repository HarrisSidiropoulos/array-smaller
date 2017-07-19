/* eslint-disable one-var, one-var-declaration-per-line, no-plusplus, no-continue, no-param-reassign, no-unused-vars */
function Node(v, s) {
  this.dup = 1;
  this.val = v;
  this.sum = s;
  this.right = null;
  this.left = null;
}

function insert(num, node, ans, i, preSum) {
  if (node === null) {
    node = new Node(num, 0);
    ans[i] = preSum;
  } else if (node.val === num) {
    node.dup++;
    ans[i] = preSum + node.sum;
  } else if (node.val > num) {
    node.sum++;
    node.left = insert(num, node.left, ans, i, preSum);
  } else {
    node.right = insert(num, node.right, ans, i, preSum + node.dup + node.sum);
  }

  return node;
}

function smaller(arr) {
  const ans = [];
  let node = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    node = insert(arr[i], node, ans, i, 0);
  }
  return ans;
}

export default smaller;
