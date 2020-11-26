import { rgbToNamed, rgbaToNamed } from './toNamed';

describe('rgbToNamed', () => {
  it('should return names for matching rgb', () => {
    expect(rgbToNamed([255, 255, 255])).toBe('White');
    expect(rgbToNamed([0, 0, 0])).toBe('Black');
    expect(rgbToNamed([255, 0, 0])).toBe('Red');
    expect(rgbToNamed([255, 0, 255])).toBe('Fuchsia');
  });

    it('should return empty string for anything else', () => {
    expect(rgbToNamed([255, 255, 254])).toBe('');
    expect(rgbToNamed([0, 0, 1])).toBe('');
    expect(rgbToNamed([254, 0, 0])).toBe('');
    expect(rgbToNamed([255, 0, 254])).toBe('');
  });
});
