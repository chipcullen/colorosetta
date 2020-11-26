import { calculateOverlay } from "./calculateOverlay";

describe("Calculate Overlay", () => {
  // not sure if this is acurate
  it("returns a value for white at 80%", () => {
    expect(calculateOverlay([255, 255, 255, 0.8])).toEqual([
      255,
      255,
      255
    ]);
  });

  it("returns the correct value for black at 50% alpha", () => {
    expect(calculateOverlay([0, 0, 0, 0.5])).toEqual([
      127,
      127,
      127
    ]);
  });

  it("returns the correct value for red at 50% alpha", () => {
    expect(calculateOverlay([255, 0, 0, 0.5])).toEqual([
      255,
      127,
      127
    ]);
  });

  it("returns the correct value for a blue at 20% alpha", () => {
    expect(calculateOverlay([0, 0, 255, 0.2])).toEqual([
      204,
      204,
      255
    ]);
  });
});
