import { colorTypes } from './colorTypes';
import { hexToRgb, rgbToRgb, hslToRgb, namedToRgb } from './toRgb';
import { rgbaToRgba, hex8ToRgba, hslaToRgba, lchToRgba } from './toRgba';
import { rgbToHex, hslToHex, rgbArrayToHex } from './toHex';
import { rgbaArrayToHex8, rgbaToHex8, hslaToHex8 } from './toHex8';
import { rgbToHsl, hex6ToHsl, hslToHsl, rgbArrayToHsl } from './toHsl';
import { rgbaArrayToHsla, rgbaToHsla, hex8ToHsla } from './toHsla';
import { hex6ToLch, hex8ToLch, hslToLch, hslaToLch, rgbaToLch, rgbToLch } from './toLch';
import { rgbToNamed, rgbaToNamed } from './toNamed';
import { calculateOverlay } from './calculateOverlay';
import { rgb_array_to_LCH } from './w3conversions';
import { formatColor, formatHex6AsHex8 } from './formatColor';

const translatedColor = (
  color: string,
  startingColorType: colorTypes,
  targetColorType: colorTypes): string => {

  switch(true) {
    // Hex 6
    case startingColorType === colorTypes.hex6:
    case startingColorType === colorTypes.picker:
      switch(true) {
        // because pickers use hex 6, we need to include these both
        // in their own case
        case targetColorType === colorTypes.hex6:
        case targetColorType === colorTypes.picker:
          return color;
        case targetColorType === colorTypes.hex8:
          return formatHex6AsHex8(color);
        case targetColorType === colorTypes.rgb:
          return formatColor(hexToRgb(color), colorTypes.rgb);
        case targetColorType === colorTypes.rgba:
          return formatColor(hexToRgb(color), colorTypes.rgba);
        case targetColorType === colorTypes.hsl:
          return formatColor(hex6ToHsl(color), colorTypes.hsl);
        case targetColorType === colorTypes.hsla:
          return formatColor(hex6ToHsl(color), colorTypes.hsla);
        case targetColorType === colorTypes.lch:
          return formatColor(hex6ToLch(color), colorTypes.lch);
        case targetColorType === colorTypes.named:
          return rgbToNamed(hexToRgb(color));
        default:
          break;
      }
      break;
    // Hex 8
    case startingColorType === colorTypes.hex8:
      const hex8AsRgbaArray = hex8ToRgba(color);
      const hex8Overlay = calculateOverlay(hex8AsRgbaArray);
      switch(true) {
        case targetColorType === colorTypes.hex6:
        case targetColorType === colorTypes.picker:
          return rgbArrayToHex(hex8Overlay);
        case targetColorType === colorTypes.rgb:
          return formatColor(hex8Overlay, colorTypes.rgb);
        case targetColorType === colorTypes.rgba:
          return formatColor(hex8AsRgbaArray, colorTypes.rgba);
        case targetColorType === colorTypes.hsl:
          return formatColor(rgbArrayToHsl(hex8Overlay), colorTypes.hsl);
        case targetColorType === colorTypes.hsla:
          return formatColor(hex8ToHsla(color), colorTypes.hsla);
        case targetColorType === colorTypes.lch:
          return formatColor(hex8ToLch(color), colorTypes.lch);
        case targetColorType === colorTypes.named:
          return rgbaToNamed(hex8AsRgbaArray);
        default:
          break;
      }
      break;
    // RGB
    case startingColorType === colorTypes.rgb:
      switch(true) {
        case targetColorType === colorTypes.hex6:
        case targetColorType === colorTypes.picker:
          return rgbToHex(color);
        case targetColorType === colorTypes.hex8:
          return formatHex6AsHex8(rgbToHex(color));
        case targetColorType === colorTypes.rgba:
          return formatColor(rgbToRgb(color), colorTypes.rgba);
        case targetColorType === colorTypes.hsl:
          return formatColor(rgbToHsl(color), colorTypes.hsl);
        case targetColorType === colorTypes.hsla:
          return formatColor(rgbToHsl(color), colorTypes.hsla);
        case targetColorType === colorTypes.lch:
          return formatColor(rgbToLch(color), colorTypes.lch);
        case targetColorType === colorTypes.named:
          return rgbToNamed(rgbToRgb(color));
        default:
          break;
      }
      break;
    // RGBA
    case startingColorType === colorTypes.rgba:
      const rgbaAsRgbaArray = rgbaToRgba(color);
      const rgbaOverlay = calculateOverlay(rgbaAsRgbaArray);
      switch(true) {
        case targetColorType === colorTypes.hex6:
        case targetColorType === colorTypes.picker:
          return rgbArrayToHex(rgbaOverlay);
        case targetColorType === colorTypes.hex8:
          return rgbaToHex8(color);
        case targetColorType === colorTypes.rgb:
          return formatColor(rgbaOverlay, colorTypes.rgb);
        case targetColorType === colorTypes.hsl:
          return formatColor(rgbArrayToHsl(rgbaOverlay), colorTypes.hsl);
        case targetColorType === colorTypes.hsla:
          return formatColor(rgbaToHsla(color), colorTypes.hsla);
        case targetColorType === colorTypes.lch:
          return formatColor(rgbaToLch(color), colorTypes.lch);
        case targetColorType === colorTypes.named:
          return rgbaToNamed(rgbaAsRgbaArray);
        default:
          break;
      }
      break;
    // HSL
    case startingColorType === colorTypes.hsl:
      switch(true) {
        case targetColorType === colorTypes.hex6:
        case targetColorType === colorTypes.picker:
          return hslToHex(color);
        case targetColorType === colorTypes.hex8:
          return formatHex6AsHex8(hslToHex(color));
        case targetColorType === colorTypes.rgb:
          return formatColor(hslToRgb(color), colorTypes.rgb);
        case targetColorType === colorTypes.rgba:
          return formatColor(hslToRgb(color), colorTypes.rgba);
        case targetColorType === colorTypes.hsla:
          return formatColor(hslToHsl(color), colorTypes.hsla);
        case targetColorType === colorTypes.lch:
          return formatColor(hslToLch(color), colorTypes.lch);
        case targetColorType === colorTypes.named:
          return rgbToNamed(hslToRgb(color));
        default:
          break;
      }
      break;
    // HSLA
    case startingColorType === colorTypes.hsla:
      const hslaAsRgbaArray = hslaToRgba(color);
      const hslaOverlay = calculateOverlay(hslaAsRgbaArray)
      switch(true) {
        case targetColorType === colorTypes.hex6:
        case targetColorType === colorTypes.picker:
          return rgbArrayToHex(hslaOverlay);
        case targetColorType === colorTypes.hex8:
          return hslaToHex8(color);
        case targetColorType === colorTypes.rgb:
          return formatColor(hslaOverlay, colorTypes.rgb);
        case targetColorType === colorTypes.rgba:
          return formatColor(hslaAsRgbaArray, colorTypes.rgba);
        case targetColorType === colorTypes.hsl:
          return formatColor(rgbArrayToHsl(hslaOverlay), colorTypes.hsl);
        case targetColorType === colorTypes.lch:
          return formatColor(hslaToLch(color), colorTypes.lch);
        case targetColorType === colorTypes.named:
          return rgbaToNamed(hslaAsRgbaArray);
        default:
          break;
      }
      break;
    // LCH
    case startingColorType === colorTypes.lch:
      const lchAsRgbaArray = lchToRgba(color);
      const lchOverlay = calculateOverlay(lchAsRgbaArray)
      switch(true) {
        case targetColorType === colorTypes.hex6:
        case targetColorType === colorTypes.picker:
          return rgbArrayToHex(lchOverlay);
        case targetColorType === colorTypes.hex8:
          return rgbaArrayToHex8(lchAsRgbaArray);
        case targetColorType === colorTypes.rgb:
          return formatColor(lchOverlay, colorTypes.rgb);
        case targetColorType === colorTypes.rgba:
          return formatColor(lchAsRgbaArray, colorTypes.rgba);
        case targetColorType === colorTypes.hsl:
          return formatColor(rgbArrayToHsl(lchOverlay), colorTypes.hsl);
        case targetColorType === colorTypes.hsla:
          return formatColor(rgbaArrayToHsla(lchAsRgbaArray), colorTypes.hsla);
        case targetColorType === colorTypes.named:
          return rgbaToNamed(lchAsRgbaArray);
        default:
          break;
      }
      break;
    // Named
    case startingColorType === colorTypes.named:
      const namedAsRgbArray = namedToRgb(color);
      switch(true) {
        case targetColorType === colorTypes.hex6:
        case targetColorType === colorTypes.picker:
          return rgbArrayToHex(namedAsRgbArray);
        case targetColorType === colorTypes.hex8:
          return formatHex6AsHex8(rgbArrayToHex(namedAsRgbArray));
        case targetColorType === colorTypes.rgb:
          return formatColor(namedAsRgbArray, colorTypes.rgb);
        case targetColorType === colorTypes.rgba:
          return formatColor(namedAsRgbArray, colorTypes.rgba);
        case targetColorType === colorTypes.hsl:
          return formatColor(rgbArrayToHsl(namedAsRgbArray), colorTypes.hsl);
        case targetColorType === colorTypes.hsla:
          return formatColor(rgbArrayToHsl(namedAsRgbArray), colorTypes.hsla);
        case targetColorType === colorTypes.lch:
          return formatColor(rgb_array_to_LCH(namedAsRgbArray), colorTypes.lch);
        default:
          break;
      }
      break;
  }

  return `none`;
}


export { translatedColor }
