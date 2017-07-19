/* eslint-disable id-length, func-names, no-param-reassign, no-plusplus, no-return-assign */
export default function memoize(fn) {
  return function (...args) {
    let hash = '';
    let i = args.length;
    let currentArg = null;
    const mem = fn.memoize || (fn.memoize = {});

    while (i--) {
      currentArg = args[i];
      hash += (currentArg === Object(currentArg)) ? JSON.stringify(currentArg) : currentArg;
    }
    return (hash in mem) ? mem[hash] : mem[hash] = fn.apply(this, args);
  };
}
