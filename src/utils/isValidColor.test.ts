import { isValidColor, isValidHex6, isValidHex8, isValidRgb, isValidRgba, isValidHsl, isValidHsla } from './isValidColor';
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

  it('return false on invalid rgb values', () => {
    // expect(isValidRgb('rgb(200%, 200%, 200%)')).toBe(false);
    expect(isValidRgb('rgb(100%, 255, 100%)')).toBe(false);
    expect(isValidRgb('rgb (255, 255, 255)')).toBe(false);
    // expect(isValidRgb('rgb(355, 355, 355)')).toBe(false);
    expect(isValidRgb('rgb(255,255,255,255)')).toBe(false);
  });
});

describe('isValidRgba', () => {
  it('return true on valid rgba values', () => {
    expect(isValidRgba('rgba(100%, 100%, 100%, 1)')).toBe(true);
    expect(isValidRgba('rgba(255, 255, 255, 0.5)')).toBe(true);
    expect(isValidRgba('rgba(255,255,255,0.5)')).toBe(true);
  });

  it('return false on invalid rgba values', () => {
    // expect(isValidRgba('rgb(200%, 200%, 200%)')).toBe(false);
    expect(isValidRgba('rgb(100%, 100%, 100%)')).toBe(false);
    expect(isValidRgba('rgba(255, 255, 255)')).toBe(false);
    // expect(isValidRgba('rgb(355, 355, 355)')).toBe(false);
    expect(isValidRgba('rgba(255,255,255,1.)')).toBe(false);
  });
});

describe('isValidHsl', () => {
  it('return true on valid hsl values', () => {
    expect(isValidHsl('hsl(100, 100%, 100%)')).toBe(true);
    expect(isValidHsl('hsl(100,100%,100%)')).toBe(true);
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

  it('return false on invalid hsla values', () => {
    expect(isValidHsla('hsla(100%, 100%, 100%)')).toBe(false);
    expect(isValidHsla('hsla (100%, 255, 100%, 1)')).toBe(false);
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
    expect(isValidColor('hsl(100, 100%, 100)', colorTypes.hsl)).toBe(false);
    expect(isValidColor('rgba(100, 100%, 100, 0.5)', colorTypes.rgba)).toBe(false);
    expect(isValidColor('rgb(100, 100, 100)', colorTypes.rgba)).toBe(false);
  });
});
