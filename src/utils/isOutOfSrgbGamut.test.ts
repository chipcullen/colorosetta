import { isOutOfSrgbGamut } from './isOutOfSrgbGamut';

describe('isOutOfSrgbGamut()', () => {
  it('returns false for in-gamut lch', () => {
    expect(isOutOfSrgbGamut("lch(48% 85 35.088)")).toBe(false);
  });
  it('returns true for out-of-gamut lch', () => {
    expect(isOutOfSrgbGamut("lch(48% 85 125.088)")).toBe(true);
  });
  it('returns true for out-of-gamut oklch', () => {
    expect(isOutOfSrgbGamut("oklch(62.8% 0.258 29.234)")).toBe(true);
  });
  it('returns false for in-gamut oklch', () => {
    expect(isOutOfSrgbGamut("oklch(50% 0.1 29.234)")).toBe(false);
  });
});
