import { colorTypes } from './colorTypes';
import { hexToRgb, rgbToRgb, hslToRgb } from './toRgb';
import { rgbaToRgba, hex8ToRgba } from './toRgba';
import { rgbToHex, hslToHex, rgbArrayToHex } from './toHex';
import { rgbaToHex8 } from './toHex8';
import { rgbToHsl, hex6ToHsl, hslToHsl, rgbArrayToHsl } from './toHsl';
import { rgbaToHsla, hex8ToHsla } from './toHsla';
import { calculateOverlay } from './calculateOverlay';

const formatHex6AsHex8 = (hex: string) => {
  // normalizing the presence of a hex value
  const hexstring = hex.indexOf(`#`) === 0 ? hex.slice(1): hex;
  return `#${hexstring.toLowerCase()}ff`;
}

const formatRgb = (rgb:Array<Number>) => {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

const formatRgba = (rgba:Array<Number>) => {
  return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
}

const formatRgbAsRgba = (rgb:Array<Number>) => {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
}

const formatHsl = (hsl:Array<Number>) => {
  return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
}

const formatHsla = (hsla:Array<Number>) => {
  return `hsla(${hsla[0]}, ${hsla[1]}%, ${hsla[2]}%, ${hsla[3]})`;
}

const formatHslAsHsla = (hsl:Array<Number>) => {
  return `hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, 1)`;
}

const translatedColor = (
  color: string,
  startingColorType: colorTypes,
  targetColorType: colorTypes): string => {

  switch(true) {
    // Hex 6
    case startingColorType === colorTypes.hex6:
      switch(true) {
        case targetColorType === colorTypes.hex8:
          return formatHex6AsHex8(color);
        case targetColorType === colorTypes.rgb:
          return formatRgb(hexToRgb(color));
        case targetColorType === colorTypes.rgba:
          return formatRgbAsRgba(hexToRgb(color));
        case targetColorType === colorTypes.hsl:
          return formatHsl(hex6ToHsl(color));
        case targetColorType === colorTypes.hsla:
          return formatHslAsHsla(hex6ToHsl(color));
        default:
          break;
      }
      break;
    // Hex 8
    case startingColorType === colorTypes.hex8:
      const hex8AsRgbaArray = hex8ToRgba(color);
      const hex8Overlay = calculateOverlay(hex8AsRgbaArray, [255, 255, 255]);
      switch(true) {
        case targetColorType === colorTypes.hex6:
          return rgbArrayToHex(hex8Overlay);
        case targetColorType === colorTypes.rgb:
          return formatRgb(hex8Overlay);
        case targetColorType === colorTypes.rgba:
          return formatRgba(hex8AsRgbaArray);
        case targetColorType === colorTypes.hsl:
          return formatHsl(rgbArrayToHsl(hex8Overlay));
        case targetColorType === colorTypes.hsla:
          return formatHsla(hex8ToHsla(color));
        default:
          break;
      }
      break;
    // RGB
    case startingColorType === colorTypes.rgb:
      switch(true) {
        case targetColorType === colorTypes.hex6:
          return rgbToHex(color);
        case targetColorType === colorTypes.hex8:
          return formatHex6AsHex8(rgbToHex(color));
        case targetColorType === colorTypes.rgba:
          return formatRgbAsRgba(rgbToRgb(color));
        case targetColorType === colorTypes.hsl:
          return formatHsl(rgbToHsl(color));
        case targetColorType === colorTypes.hsla:
          return formatHslAsHsla(rgbToHsl(color));
        default:
          break;
      }
      break;
    // RGBA
    case startingColorType === colorTypes.rgba:
      const rgbaAsRgbaArray = rgbaToRgba(color);
      const rgbaOverlay = calculateOverlay(rgbaAsRgbaArray, [255, 255, 255]);
      switch(true) {
        case targetColorType === colorTypes.hex6:
          return rgbArrayToHex(rgbaOverlay);
        case targetColorType === colorTypes.hex8:
          return rgbaToHex8(color);
        case targetColorType === colorTypes.rgb:
          return formatRgb(rgbaOverlay);
        case targetColorType === colorTypes.hsl:
          return formatHsl(rgbArrayToHsl(rgbaOverlay));
        case targetColorType === colorTypes.hsla:
          return formatHsla(rgbaToHsla(color));
        default:
          break;
      }
      break;
    // HSL
    case startingColorType === colorTypes.hsl:
      switch(true) {
        case targetColorType === colorTypes.hex6:
          return hslToHex(color);
        case targetColorType === colorTypes.hex8:
          return formatHex6AsHex8(hslToHex(color));
        case targetColorType === colorTypes.rgb:
          return formatRgb(hslToRgb(color));
        case targetColorType === colorTypes.rgba:
          return formatRgbAsRgba(hslToRgb(color));
        case targetColorType === colorTypes.hsla:
          return formatHslAsHsla(hslToHsl(color));
        default:
          break;
      }
      break;
  }

  return `none`;
}


export { translatedColor }
