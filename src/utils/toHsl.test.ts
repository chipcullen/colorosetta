import { rgbToHsl, hex6ToHsl, hslToHsl } from './toHsl';

describe('hslToHsl', () => {
  it('should return correct value from HSL', () => {
    expect(hslToHsl(`hsl(120, 50%, 50%)`)).toMatchObject([120, 50, 50])
  });
});
