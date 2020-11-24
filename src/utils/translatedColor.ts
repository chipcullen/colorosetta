import { colorTypes } from './colorTypes';
import { hexToRgb, rgbToRgb } from './toRgb';
import { rgbToHex } from './toHex';
import { rgbToHsl, hex6ToHsl } from './toHsl';

const formatHex6AsHex8 = (hex: string) => {
  // normalizing the presence of a hex value
  const hexstring = hex.indexOf(`#`) === 0 ? hex.slice(1): hex;
  return `#${hexstring.toLowerCase()}ff`;
}

const formatRgb = (rgb:Array<Number>) => {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

const formatRgbAsRgba = (rgb:Array<Number>) => {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
}

const formatHsl = (hsl:Array<Number>) => {
  return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
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
    // RGB
    case startingColorType === colorTypes.rgb:
      switch(true) {
        case targetColorType === colorTypes.rgba:
          return formatRgbAsRgba(rgbToRgb(color));
        case targetColorType === colorTypes.hex6:
          return rgbToHex(color);
        default:
          break;
      }
      break;
    // RGBA
    case startingColorType === colorTypes.rgba:
      switch(true) {
        case targetColorType === colorTypes.rgb:
          return formatRgbAsRgba(rgbToRgb(color));
        case targetColorType === colorTypes.hex6:
          return rgbToHex(color);
        default:
          break;
      }
      break;
  }

  return `none`;
}


export { translatedColor }
