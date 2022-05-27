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
    expect(translatedColor(`hsl(200, 66%, 75%)`, colorTypes.hsl, colorTypes.hex6)).toBe('#95cde9');
    expect(translatedColor(`lch(54.291% 106.837 40.858)`, colorTypes.lch, colorTypes.hex6)).toBe('#ff0000');
    expect(translatedColor(`lch(54.291% 106.837 40.858 / 50%)`, colorTypes.lch, colorTypes.hex8)).toBe('#ff000080');
    expect(translatedColor(`red`, colorTypes.named, colorTypes.hex6)).toBe('#ff0000');
  });
});
