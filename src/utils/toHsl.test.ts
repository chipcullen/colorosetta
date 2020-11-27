import { rgbToHsl, hex6ToHsl, hslToHsl } from './toHsl';

describe('hslToHsl', () => {
  it('should return correct value from HSL', () => {
    expect(hslToHsl(`hsl(120, 50%, 50%)`)).toMatchObject([120, 50, 50]);
  });
});

describe('rgbToHsl', () => {
  it('should return correct value from RGB', () => {
    expect(rgbToHsl(`rgb(255, 255, 255)`)).toMatchObject([0, 0, 100]);
    expect(rgbToHsl(`rgb(0, 0, 0)`)).toMatchObject([0, 0, 0]);
  });
});

describe('hex6ToHsl', () => {
  it('should return correct value from Hex6', () => {
    expect(hex6ToHsl(`#fff`)).toMatchObject([0, 0, 100]);
    expect(hex6ToHsl(`#000000`)).toMatchObject([0, 0, 0]);
  });
});
