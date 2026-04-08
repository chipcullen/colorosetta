import { translatedColor } from './translatedColor';
import { colorTypes } from './colorTypes';


describe('translatedColor', () => {
  it('Should translate rgb with alpha to all targets', () => {
    expect(translatedColor(`rgb(255 0 0 / 0.5)`, colorTypes.rgb, colorTypes.hex6)).toBe('#ff7f7f');
    expect(translatedColor(`rgb(255 0 0 / 0.5)`, colorTypes.rgb, colorTypes.hex8)).toBe('#ff000080');
    expect(translatedColor(`rgb(255 0 0 / 0.5)`, colorTypes.rgb, colorTypes.hsl)).toBe('hsl(0 100% 50% / 50%)');
    expect(translatedColor(`rgb(255 0 0 / 0.5)`, colorTypes.rgb, colorTypes.lch)).toBeTruthy();
  });

  it('Should translate hsl with alpha to all targets', () => {
    expect(translatedColor(`hsl(0 100% 50% / 0.5)`, colorTypes.hsl, colorTypes.hex6)).toBe('#ff7f7f');
    expect(translatedColor(`hsl(0 100% 50% / 0.5)`, colorTypes.hsl, colorTypes.hex8)).toBeTruthy();
    expect(translatedColor(`hsl(0 100% 50% / 0.5)`, colorTypes.hsl, colorTypes.rgb)).toBe('rgb(255 0 0 / 50%)');
    expect(translatedColor(`hsl(0 100% 50% / 0.5)`, colorTypes.hsl, colorTypes.lch)).toBeTruthy();
  });

  it('Should return correct translated colors', () => {
    expect(translatedColor(`#fff`, colorTypes.hex6, colorTypes.rgb)).toBe(`rgb(255 255 255)`);
    expect(translatedColor(`#fff`, colorTypes.hex6, colorTypes.named)).toBe(`White`);
    expect(translatedColor(`#ff00ff`, colorTypes.hex6, colorTypes.named)).toBe(`Fuchsia`);
    expect(translatedColor(`rgb(255, 0, 0)`, colorTypes.rgb, colorTypes.named)).toBe(`Red`);
    expect(translatedColor(`rgb(255, 0, 0)`, colorTypes.rgb, colorTypes.hsl)).toBe('hsl(0 100% 50%)');
    expect(translatedColor(`hsl(200, 66%, 75%)`, colorTypes.hsl, colorTypes.hex6)).toBe('#95cde9');
    expect(translatedColor(`lch(54.291% 106.837 40.858)`, colorTypes.lch, colorTypes.hex6)).toBe('#ff0000');
    expect(translatedColor(`lch(54.291% 106.837 40.858 / 50%)`, colorTypes.lch, colorTypes.hex8)).toBe('#ff000080');
    expect(translatedColor(`red`, colorTypes.named, colorTypes.hex6)).toBe('#ff0000');
  });

  it('Should translate hex without # prefix', () => {
    expect(translatedColor(`fff`, colorTypes.hex6, colorTypes.rgb)).toBe(`rgb(255 255 255)`);
    expect(translatedColor(`ff0000`, colorTypes.hex6, colorTypes.named)).toBe(`Red`);
    expect(translatedColor(`ff000080`, colorTypes.hex8, colorTypes.rgb)).toBe(`rgb(255 0 0 / 50.2%)`);
  });

  it('Should translate oklch to other formats', () => {
    expect(translatedColor(`oklch(62.8% 0.258 29.234)`, colorTypes.oklch, colorTypes.hex6)).toBe('#ff0000');
    expect(translatedColor(`oklch(100% 0 0)`, colorTypes.oklch, colorTypes.hex6)).toBe('#ffffff');
    expect(translatedColor(`oklch(0% 0 0)`, colorTypes.oklch, colorTypes.hex6)).toBe('#000000');
    expect(translatedColor(`oklch(62.8% 0.258 29.234 / 0.5)`, colorTypes.oklch, colorTypes.rgb)).toBeTruthy();
  });

  it('Should normalize legacy rgba/hsla aliases when same-type', () => {
    expect(translatedColor(`rgba(255 0 0 / 0.5)`, colorTypes.rgb, colorTypes.rgb)).toBe('rgb(255 0 0 / 50%)');
    expect(translatedColor(`rgba(255, 0, 0, 1)`, colorTypes.rgb, colorTypes.rgb)).toBe('rgb(255 0 0)');
    expect(translatedColor(`hsla(0 100% 50% / 0.5)`, colorTypes.hsl, colorTypes.hsl)).toBe('hsl(0 100% 50% / 50%)');
    expect(translatedColor(`hsla(0, 100%, 50%, 1)`, colorTypes.hsl, colorTypes.hsl)).toBe('hsl(0 100% 50%)');
  });

  it('Should translate from oklch to oklch unchanged', () => {
    expect(translatedColor(`oklch(62.8% 0.258 29.234)`, colorTypes.oklch, colorTypes.oklch)).toBe(`oklch(62.8% 0.258 29.234)`);
  });

  it('Should translate display-p3 to other formats', () => {
    expect(translatedColor(`color(display-p3 1 0 0)`, colorTypes.p3, colorTypes.hex6)).toBe('#ff0b0c');
    expect(translatedColor(`color(display-p3 1 1 1)`, colorTypes.p3, colorTypes.rgb)).toBe('rgb(255 255 255)');
    expect(translatedColor(`color(display-p3 0 0 0)`, colorTypes.p3, colorTypes.hex6)).toBe('#000000');
    expect(translatedColor(`color(display-p3 1 0 0 / 0.5)`, colorTypes.p3, colorTypes.rgb)).toBeTruthy();
  });

  it('Should translate from display-p3 to display-p3 unchanged', () => {
    expect(translatedColor(`color(display-p3 1 0 0)`, colorTypes.p3, colorTypes.p3)).toBe(`color(display-p3 1 0 0)`);
  });
});
