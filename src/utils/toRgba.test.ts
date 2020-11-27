import { colorTypes } from './colorTypes';

import { hex8ToRgba, hslaToRgba, rgbaToRgba, toRgba } from "./toRgba";

describe("Hex8 to RGBA conversion", () => {
  it("correct rgba for black", () => {
    expect(hex8ToRgba("#00000000")[0]).toBe(0);
    expect(hex8ToRgba("#00000000")[1]).toBe(0);
    expect(hex8ToRgba("#00000000")[2]).toBe(0);
    expect(hex8ToRgba("#00000000")[3]).toBe(0);

    expect(hex8ToRgba("00000000")[0]).toBe(0);
    expect(hex8ToRgba("00000000")[1]).toBe(0);
    expect(hex8ToRgba("00000000")[2]).toBe(0);
    expect(hex8ToRgba("00000000")[3]).toBe(0);

    expect(hex8ToRgba("#0000")[0]).toBe(0);
    expect(hex8ToRgba("#0000")[1]).toBe(0);
    expect(hex8ToRgba("#0000")[2]).toBe(0);
    expect(hex8ToRgba("#0000")[3]).toBe(0);

    expect(hex8ToRgba("0000")[0]).toBe(0);
    expect(hex8ToRgba("0000")[1]).toBe(0);
    expect(hex8ToRgba("0000")[2]).toBe(0);
    expect(hex8ToRgba("0000")[3]).toBe(0);
  });

  it("correct rgba for white", () => {
    expect(hex8ToRgba("#ffffff00")[0]).toBe(255);
    expect(hex8ToRgba("#ffffff00")[1]).toBe(255);
    expect(hex8ToRgba("#ffffff00")[2]).toBe(255);
    expect(hex8ToRgba("#ffffff00")[3]).toBe(0);

    expect(hex8ToRgba("ffffff00")[0]).toBe(255);
    expect(hex8ToRgba("ffffff00")[1]).toBe(255);
    expect(hex8ToRgba("ffffff00")[2]).toBe(255);
    expect(hex8ToRgba("ffffff00")[3]).toBe(0);

    expect(hex8ToRgba("#fff0")[0]).toBe(255);
    expect(hex8ToRgba("#fff0")[1]).toBe(255);
    expect(hex8ToRgba("#fff0")[2]).toBe(255);
    expect(hex8ToRgba("#fff0")[3]).toBe(0);

    expect(hex8ToRgba("fff0")[0]).toBe(255);
    expect(hex8ToRgba("fff0")[1]).toBe(255);
    expect(hex8ToRgba("fff0")[2]).toBe(255);
    expect(hex8ToRgba("fff0")[3]).toBe(0);
  });

  it("correct rgba for hotpink", () => {
    expect(hex8ToRgba("#ff69b400")[0]).toBe(255);
    expect(hex8ToRgba("#ff69b400")[1]).toBe(105);
    expect(hex8ToRgba("#ff69b400")[2]).toBe(180);
    expect(hex8ToRgba("#ff69b400")[3]).toBe(0);
  });
});

describe("HSLa to RGBa conversion", () => {
  it("correct rgb for black", () => {
    expect(hslaToRgba("hsla(0, 0%, 0%, 1)")[0]).toBe(0);
    expect(hslaToRgba("hsla(0, 0%, 0%, 1)")[1]).toBe(0);
    expect(hslaToRgba("hsla(0, 0%, 0%, 1)")[2]).toBe(0);
    expect(hslaToRgba("hsla(0, 0%, 0%, 1)")[3]).toBe(1);
  });

  it("correct rgba for white", () => {
    expect(hslaToRgba("hsla(0, 0%, 100%, 1)")[0]).toBe(255);
    expect(hslaToRgba("hsla(0, 0%, 100%, 1)")[1]).toBe(255);
    expect(hslaToRgba("hsla(0, 0%, 100%, 1)")[2]).toBe(255);
    expect(hslaToRgba("hsla(0, 0%, 100%, 1)")[3]).toBe(1);
  });
});

describe("rgba to RGBA conversion", () => {
  it("correct rgb for black", () => {
    expect(rgbaToRgba("rgba(0, 0, 0, 1)")[0]).toBe(0);
    expect(rgbaToRgba("rgba(0, 0, 0, 1)")[1]).toBe(0);
    expect(rgbaToRgba("rgba(0, 0, 0, 1)")[2]).toBe(0);
    expect(rgbaToRgba("rgba(0, 0, 0, 1)")[3]).toBe(1);
  });

  it("correct rgba for white", () => {
    expect(rgbaToRgba("rgba(255, 255, 255, 1)")[0]).toBe(255);
    expect(rgbaToRgba("rgba(255, 255, 255, 1)")[1]).toBe(255);
    expect(rgbaToRgba("rgba(255, 255, 255, 1)")[2]).toBe(255);
    expect(rgbaToRgba("rgba(255, 255, 255, 1)")[3]).toBe(1);
  });
});

// integration
describe("To RGBA conversion", () => {
  it("correct rgba for black", () => {
    expect(toRgba("hsla(0, 0%, 0%, 1)", colorTypes.hsla)).toEqual([0, 0, 0, 1]);
    expect(toRgba("rgba(0, 0, 0, 1)", colorTypes.rgba)).toEqual([0, 0, 0, 1]);
    expect(toRgba("#000000ff", colorTypes.hex8)).toEqual([0, 0, 0, 1]);
    expect(toRgba("#00000000", colorTypes.hex8)).toEqual([0, 0, 0, 0]);
  });

  it("correct rgba for white", () => {
      expect(toRgba("hsla(0, 0%, 100%, 1)", colorTypes.hsla)).toEqual([255, 255, 255, 1]);
      expect(toRgba("rgba(255, 255, 255, 1)", colorTypes.rgba)).toEqual([255, 255, 255, 1]);
      expect(toRgba("#ffffffff", colorTypes.hex8)).toEqual([255, 255, 255, 1]);
      expect(toRgba("#ffffff00", colorTypes.hex8)).toEqual([255, 255, 255, 0]);
  });

  it("get rgba for colors without alpha channels", () => {
      expect(toRgba("hsl(0, 0%, 100%)", colorTypes.hsl)).toEqual([255, 255, 255, 1]);
      expect(toRgba("rgb(255, 255, 255)", colorTypes.rgb)).toEqual([255, 255, 255, 1]);
      expect(toRgba("#ffffff", colorTypes.hex6)).toEqual([255, 255, 255, 1]);
  });
});
