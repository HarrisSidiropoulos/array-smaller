/* eslint-disable one-var, one-var-declaration-per-line, no-console */
import { expect } from 'chai';
import memoize from './memoize';
import smaller from './index';

const getArray = memoize(() => {
  const l = 100000;
  const a = new Array(l);
  let i = 0;
  for (i = 0; i < l; i += 1) { a[i] = Math.floor(Math.random() * l); }
  return a;
});

describe('smaller', () => {
  describe('Some simple tests', () => {
    it('should return length of smaller numbers in array after array value', () => {
      expect(smaller([5, 4, 3, 2, 1])).to.be.eql([4, 3, 2, 1, 0]);
      expect(smaller([1, 2, 3])).to.be.eql([0, 0, 0]);
      expect(smaller([1, 2, 0])).to.be.eql([1, 1, 0]);
      expect(smaller([1, 2, 1])).to.be.eql([0, 1, 0]);
      expect(smaller([1, 1, 1, 2, 1])).to.be.eql([0, 0, 0, 1, 0]);
      expect(smaller([-1, -1, -1, 2, 1])).to.be.eql([0, 0, 0, 1, 0]);
      expect(smaller([9, -1, -1, -1, 2, 1])).to.be.eql([5, 0, 0, 0, 1, 0]);
      expect(smaller([1, 1, -1, 0, 0])).to.be.eql([3, 3, 0, 0, 0]);
      expect(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])).to.be.eql([4, 1, 5, 5, 0, 0, 0, 0, 0]);
      expect(smaller([5, 4, 7, 9, 2, 4, 4, 7, 6])).to.be.eql([4, 1, 4, 5, 0, 0, 0, 1, 0]);
      expect(smaller([5, 8, 7, 9, 2, 4, 4, 5, 6])).to.be.eql([3, 6, 5, 5, 0, 0, 0, 0, 0]);
      expect(smaller([1, 8, 7, 9, 2, 4, 4, 5, 6])).to.be.eql([0, 6, 5, 5, 0, 0, 0, 0, 0]);
    });
  });
  describe('Large Arrays', () => {
    it('should run very fast', () => {
      const a = getArray();
      const start = new Date().getTime();
      smaller(a);
      const end = new Date().getTime() - start;
      expect(end).to.be.below(12000);
    });
  });
});
