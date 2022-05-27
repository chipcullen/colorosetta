import { colorStringToArray } from './colorStringToArray';

describe('colorStringToArray()', () => {
  it('colorStringToArray returns correct value', () => {
    expect(colorStringToArray('rgb(255, 0, 0)')).toEqual(['255', '0', '0']);
    expect(colorStringToArray('rgba(255, 0, 0, 1)', false, 5)).toEqual(['255', '0', '0', '1']);
    expect(colorStringToArray('rgba(255, 0, 0, 1)', true, 5)).toEqual([255, 0, 0, 1]);
  });
});
