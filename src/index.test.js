/* eslint-disable no-unused-vars */
import { expect } from 'chai';
import smaller from './index';

describe('multiply', () => {
  describe('Some simple multiplications', () => {
    it('should return length of smaller numbers in array after array value', () => {
      expect(smaller([5, 4, 3, 2, 1])).to.be.eql([4, 3, 2, 1, 0]);
      expect(smaller([1, 2, 3])).to.be.eql([0, 0, 0]);
      expect(smaller([1, 2, 0])).to.be.eql([1, 1, 0]);
      expect(smaller([1, 2, 1])).to.be.eql([0, 1, 0]);
      expect(smaller([1, 1, -1, 0, 0])).to.be.eql([3, 3, 0, 0, 0]);
      expect(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])).to.be.eql([4, 1, 5, 5, 0, 0, 0, 0, 0]);
    });
  });
});
