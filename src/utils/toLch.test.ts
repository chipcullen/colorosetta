import { hex6ToLch, hex8ToLch, hslToLch, hslaToLch, rgbaToLch, rgbToLch } from './toLch';

describe('rgbaToLch()', () => {
  it('hex6ToLch returns correct value', () => {
    expect(hex6ToLch("#ff0000")).toEqual([54.291, 106.837, 40.858]);
  });
  it('hex8ToLch returns correct value', () => {
    expect(hex8ToLch("#ff0000ff")).toEqual([54.291, 106.837, 40.858, 100]);
  });
  it('hslToLch returns correct value', () => {
    expect(hslToLch("hsl(0, 100%, 50%)")).toEqual([54.291, 106.837, 40.858]);
  });
  it('hslaToLch returns correct value', () => {
    expect(hslaToLch("hsla(0, 100%, 50%, 1)")).toEqual([54.291, 106.837, 40.858, 100]);
  });
  it('rgbToLch returns correct value', () => {
    expect(rgbToLch("rgb(255, 0, 0)")).toEqual([54.291, 106.837, 40.858]);
  });
  it('rgbaToLch returns correct value', () => {
    expect(rgbaToLch("rgba(255, 0, 0, 1)")).toEqual([54.291, 106.837, 40.858, 100]);
  });
});
