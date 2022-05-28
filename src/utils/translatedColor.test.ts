import { translatedColor } from './translatedColor';
import { ColorTypes } from './colorTypes';


describe('translatedColor', () => {
  it('Should return correct translated colors', () => {
    expect(translatedColor(`#fff`, ColorTypes.hex6, ColorTypes.rgb)).toBe(`rgb(255, 255, 255)`);
    expect(translatedColor(`#fff`, ColorTypes.hex6, ColorTypes.rgba)).toBe(`rgba(255, 255, 255, 1)`);
    expect(translatedColor(`#fff`, ColorTypes.hex6, ColorTypes.named)).toBe(`White`);
    expect(translatedColor(`#ff00ff`, ColorTypes.hex6, ColorTypes.named)).toBe(`Fuchsia`);
    expect(translatedColor(`rgb(255, 0, 0)`, ColorTypes.rgb, ColorTypes.named)).toBe(`Red`);
    expect(translatedColor(`rgb(255, 0, 0)`, ColorTypes.rgb, ColorTypes.hsl)).toBe('hsl(0, 100%, 50%)');
    expect(translatedColor(`hsl(200, 66%, 75%)`, ColorTypes.hsl, ColorTypes.hex6)).toBe('#95cde9');
    expect(translatedColor(`lch(54.291% 106.837 40.858)`, ColorTypes.lch, ColorTypes.hex6)).toBe('#ff0000');
    expect(translatedColor(`lch(54.291% 106.837 40.858 / 50%)`, ColorTypes.lch, ColorTypes.hex8)).toBe('#ff000080');
    expect(translatedColor(`red`, ColorTypes.named, ColorTypes.hex6)).toBe('#ff0000');
  });
});
