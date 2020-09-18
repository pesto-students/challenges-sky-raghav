import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('should reverse the arguments', () => {
    expect(flipArgs(1, 2, 3, 4)).toEqual([4, 3, 2, 1]);
  });
  it('should return empty array in case of no arguments', () => {
    expect(flipArgs()).toEqual([]);
  });
});
