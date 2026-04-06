import { isValidColor, isValidHex6, isValidHex8, isValidRgb, isValidRgba, isValidHsl, isValidHsla, isValidLch, isValidOklch, isValidP3 } from './isValidColor';
import { colorTypes } from './colorTypes';


describe('isValidHex6', () => {
  it('return true on valid hex6 values', () => {
    expect(isValidHex6('#fff')).toBe(true);
    expect(isValidHex6('#ffffff')).toBe(true);
    expect(isValidHex6('fff')).toBe(true);
    expect(isValidHex6('ffffff')).toBe(true);
    expect(isValidHex6('123123')).toBe(true);
    expect(isValidHex6('#123123')).toBe(true);
  });

  it('return false on invalid hex6 values', () => {
    expect(isValidHex6('#red')).toBe(false);
    expect(isValidHex6('red')).toBe(false);
    expect(isValidHex6('ffff')).toBe(false);
  });
});


describe('isValidHex8', () => {
  it('return true on valid hex8 values', () => {
    expect(isValidHex8('#ffff')).toBe(true);
    expect(isValidHex8('#ffffffff')).toBe(true);
    expect(isValidHex8('ffff')).toBe(true);
    expect(isValidHex8('ffffffff')).toBe(true);
    expect(isValidHex8('123123ff')).toBe(true);
    expect(isValidHex8('#123123ff')).toBe(true);
  });

  it('return false on invalid hex8 values', () => {
    expect(isValidHex8('#red1')).toBe(false);
    expect(isValidHex8('red1')).toBe(false);
  });
});

describe('isValidRgb', () => {
  it('return true on valid rgb values', () => {
    expect(isValidRgb('rgb(100%, 100%, 100%)')).toBe(true);
    expect(isValidRgb('rgb(255, 255, 255)')).toBe(true);
    expect(isValidRgb('rgb(255,255,255)')).toBe(true);
  });

  it('return true on valid modern syntax rgb values', () => {
    expect(isValidRgb('rgb(255 255 255)')).toBe(true);
    expect(isValidRgb('rgb(0 0 0)')).toBe(true);
    expect(isValidRgb('rgb(100% 100% 100%)')).toBe(true);
  });

  it('return false on invalid rgb values', () => {
    expect(isValidRgb('rgb (255, 255, 255)')).toBe(false);
    expect(isValidRgb('not-rgb(255, 255, 255)')).toBe(false);
  });
});

describe('isValidRgba', () => {
  it('return true on valid rgba values', () => {
    expect(isValidRgba('rgba(100%, 100%, 100%, 1)')).toBe(true);
    expect(isValidRgba('rgba(255, 255, 255, 0.5)')).toBe(true);
    expect(isValidRgba('rgba(255,255,255,0.5)')).toBe(true);
  });

  it('return true on valid modern syntax rgba values', () => {
    expect(isValidRgba('rgba(255 255 255 / 0.5)')).toBe(true);
    expect(isValidRgba('rgba(0 0 0 / 1)')).toBe(true);
    expect(isValidRgba('rgba(100% 100% 100% / 0.5)')).toBe(true);
  });

  it('return false on invalid rgba values', () => {
    expect(isValidRgba('rgb(100%, 100%, 100%)')).toBe(false);
    expect(isValidRgba('hsl(100, 100%, 100%)')).toBe(false);
  });
});

describe('isValidHsl', () => {
  it('return true on valid hsl values', () => {
    expect(isValidHsl('hsl(100, 100%, 100%)')).toBe(true);
    expect(isValidHsl('hsl(100,100%,100%)')).toBe(true);
  });

  it('return true on valid modern syntax hsl values', () => {
    expect(isValidHsl('hsl(100 100% 100%)')).toBe(true);
    expect(isValidHsl('hsl(0 0% 0%)')).toBe(true);
  });

  it('return false on invalid hsl values', () => {
    expect(isValidHsl('hsl(100%, 100%, 100%)')).toBe(false);
    expect(isValidHsl('hsl(100%, 255, 100%)')).toBe(false);
  });
});

describe('isValidHsla', () => {
  it('return true on valid hsla values', () => {
    expect(isValidHsla('hsla(100, 100%, 100%, 0.5)')).toBe(true);
    expect(isValidHsla('hsla(100,100%,100%, 1)')).toBe(true);
  });

  it('return true on valid modern syntax hsla values', () => {
    expect(isValidHsla('hsla(100 100% 100% / 0.5)')).toBe(true);
    expect(isValidHsla('hsla(0 0% 0% / 1)')).toBe(true);
  });

  it('return false on invalid hsla values', () => {
    expect(isValidHsla('hsla(100%, 100%, 100%)')).toBe(false);
    expect(isValidHsla('hsla (100%, 255, 100%, 1)')).toBe(false);
  });
});

describe('isValidLch', () => {
  it('return true on valid lch values', () => {
    expect(isValidLch('lch(100% 100 100 / 0.5)')).toBe(true);
    expect(isValidLch('lch(100% 100 100 / 1)')).toBe(true);
    expect(isValidLch('lch(50.5% 100 100 / 0.3)')).toBe(true);
    expect(isValidLch('lch(99% 100 100 / 50.5%)')).toBe(true);
    expect(isValidLch('lch(99% 100 100 / 50%)')).toBe(true);
    expect(isValidLch('lch(99% 100 100)')).toBe(true);

  });

  it('return false on invalid lch values', () => {
    expect(isValidLch('rgb(255, 0, 0)')).toBe(false);
    expect(isValidLch('not-lch(99 100 100)')).toBe(false);
  });
});

describe('isValidOklch', () => {
  it('returns true on valid oklch values', () => {
    expect(isValidOklch('oklch(62.8% 0.258 29.234)')).toBe(true);
    expect(isValidOklch('oklch(50% 0.1 180)')).toBe(true);
    expect(isValidOklch('oklch(62.8% 0.258 29.234 / 0.5)')).toBe(true);
  });

  it('returns false on invalid oklch values', () => {
    expect(isValidOklch('oklch(62.8% 0.258)')).toBe(false);
    expect(isValidOklch('lch(62.8% 0.258 29.234)')).toBe(false);
    expect(isValidOklch('rgb(255 0 0)')).toBe(false);
  });
});

describe('isValidP3', () => {
  it('returns true on valid display-p3 values', () => {
    expect(isValidP3('color(display-p3 1 0 0)')).toBe(true);
    expect(isValidP3('color(display-p3 0.5 0.5 0.5)')).toBe(true);
    expect(isValidP3('color(display-p3 1 0 0 / 0.5)')).toBe(true);
  });

  it('returns false on invalid display-p3 values', () => {
    expect(isValidP3('color(srgb 1 0 0)')).toBe(false);
    expect(isValidP3('rgb(255 0 0)')).toBe(false);
    expect(isValidP3('display-p3(1 0 0)')).toBe(false);
  });
});

// bringing it all together now
describe('isValidColor', () => {
  it('return true for valid colors', () => {
    expect(isValidColor('purple', colorTypes.named)).toBe(true);
    expect(isValidColor('#ffffff', colorTypes.hex6)).toBe(true);
    expect(isValidColor('#ffffffff', colorTypes.hex8)).toBe(true);
    expect(isValidColor('hsla(100, 100%, 100%, 0.5)', colorTypes.hsla)).toBe(true);
    expect(isValidColor('hsl(100, 100%, 100%)', colorTypes.hsl)).toBe(true);
    expect(isValidColor('rgba(100, 100, 100, 0.5)', colorTypes.rgba)).toBe(true);
    expect(isValidColor('rgb(100, 100, 100)', colorTypes.rgb)).toBe(true);
  });

    it('return false for invalid colors', () => {
    expect(isValidColor('purplee', colorTypes.named)).toBe(false);
    expect(isValidColor('#ffffff', colorTypes.hex8)).toBe(false);
    expect(isValidColor('#fffffff', colorTypes.hex6)).toBe(false);
    expect(isValidColor('hsla(100, 100%, 100%, 0.5)', colorTypes.rgba)).toBe(false);
    expect(isValidColor('rgb(100, 100, 100)', colorTypes.hsl)).toBe(false);
    expect(isValidColor('rgb(100, 100, 100)', colorTypes.rgba)).toBe(false);
  });
});
