function smaller(arr) {
  return arr.map((a, i) => arr.slice(i).filter(b => a > b).length);
}

export default smaller;
