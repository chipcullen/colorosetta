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

describe('rgbaToNamed', () => {
  it('should return names for matching rgba', () => {
    expect(rgbaToNamed([255, 255, 255, 1])).toBe('White');
    expect(rgbaToNamed([0, 0, 0, 1])).toBe('Black');
    expect(rgbaToNamed([255, 0, 0, 1])).toBe('Red');
    expect(rgbaToNamed([255, 0, 255, 1])).toBe('Fuchsia');
  });

    it('should return empty string for anything else', () => {
    expect(rgbaToNamed([255, 255, 254, 1])).toBe('');
    expect(rgbaToNamed([0, 0, 1, 1])).toBe('');
    expect(rgbaToNamed([255, 0, 0, 0])).toBe('');
    expect(rgbaToNamed([255, 0, 255, 0.99])).toBe('');
  });
});
