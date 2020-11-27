import { rgbaToHsla, hex8ToHsla } from './toHsla';


describe('rgbaToHsla', () => {
  it('should return correct value from RGBA', () => {
    expect(rgbaToHsla(`rgba(255, 255, 255, 1)`)).toMatchObject([0, 0, 100, 1]);
    expect(rgbaToHsla(`rgba(0, 0, 0, 1)`)).toMatchObject([0, 0, 0, 1]);
  });
});

describe('hex8ToHsla', () => {
  it('should return correct value from Hex8', () => {
    expect(hex8ToHsla(`#ffff`)).toMatchObject([0, 0, 100, 1]);
    expect(hex8ToHsla(`#000000ff`)).toMatchObject([0, 0, 0, 1]);
  });
});
