import { translatedColor } from './translatedColor';
import { colorTypes } from './colorTypes';


describe('translatedColor', () => {
  it('Should return correct translated colors', () => {
    expect(translatedColor(`#fff`, colorTypes.hex6, colorTypes.rgb)).toBe(`rgb(255, 255, 255)`);
    expect(translatedColor(`#fff`, colorTypes.hex6, colorTypes.rgba)).toBe(`rgba(255, 255, 255, 1)`);
    expect(translatedColor(`#fff`, colorTypes.hex6, colorTypes.named)).toBe(`White`);
    expect(translatedColor(`#ff00ff`, colorTypes.hex6, colorTypes.named)).toBe(`Fuchsia`);
    expect(translatedColor(`rgb(255, 0, 0)`, colorTypes.rgb, colorTypes.named)).toBe(`Red`);
    expect(translatedColor(`rgb(255, 0, 0)`, colorTypes.rgb, colorTypes.hsl)).toBe('hsl(0, 100%, 50%)');

    // Note: we cannot test starting with named colors, as the translation requires
    // DOM that jest doesn't have
  });
});
