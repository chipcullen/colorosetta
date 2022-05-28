import { isLchOutOfRgbGamut } from './isLchOutOfRgbGamut';

describe('isLchOutOfRgbGamut()', () => {
  it('isLchOutOfRgbGamut returns correct value', () => {
    expect(isLchOutOfRgbGamut("lch(48% 85 35.088)")).toBe(false);
    expect(isLchOutOfRgbGamut("lch(48% 85 125.088)")).toBe(true);
  });
});
