import { rgbaToHex8 } from './toHex8';

describe('rgbaToHex8', () => {
  it('should return correct hex8 value', () => {
    expect(rgbaToHex8(`rgba(255, 255, 255, 1)`)).toBe(`#ffffffff`);
    expect(rgbaToHex8(`rgba(0, 0, 0, 1)`)).toBe(`#000000ff`);
    expect(rgbaToHex8(`rgba(0, 0, 0, .5)`)).toBe(`#00000080`);
  });
});
