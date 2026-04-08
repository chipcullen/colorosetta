import Color from "colorjs.io";
import { colorTypes } from "./colorTypes";
import { lowerCaseNamedColors } from "./namedColors";

const canParseColor = (color: string): boolean => {
  try {
    new Color(color);
    return true;
  } catch {
    return false;
  }
};

const isValidHex6 = (color: string): boolean => {
  // https://stackoverflow.com/a/8027444/1173898
  return /^(#)?[0-9A-F]{3}$/i.test(color) || /^(#)?[0-9A-F]{6}$/i.test(color);
};

const isValidHex8 = (color: string): boolean => {
  // https://stackoverflow.com/a/8027444/1173898
  return /^(#)?[0-9A-F]{4}$/i.test(color) || /^(#)?[0-9A-F]{8}$/i.test(color);
};

// accepts either modern rgb/rgba syntax
const isValidRgb = (color: string): boolean => {
  return (
    (color.startsWith("rgb(") || color.startsWith("rgba(")) &&
    canParseColor(color)
  );
};

// accepts either modern hsl/hsla syntax
const isValidHsl = (color: string): boolean => {
  return (
    (color.startsWith("hsl(") || color.startsWith("hsla(")) &&
    canParseColor(color)
  );
};

const isValidLch = (color: string): boolean => {
  return color.startsWith("lch(") && canParseColor(color);
};

const isValidOklch = (color: string): boolean => {
  return color.startsWith("oklch(") && canParseColor(color);
};

const isValidP3 = (color: string): boolean => {
  return color.startsWith("color(display-p3") && canParseColor(color);
};

const isValidColor = (color: string, colorType: colorTypes): boolean => {
  switch (colorType) {
    case colorTypes.hex6:
    case colorTypes.picker:
      return isValidHex6(color);
    case colorTypes.hex8:
      return isValidHex8(color);
    case colorTypes.rgb:
      return isValidRgb(color);
    case colorTypes.hsl:
      return isValidHsl(color);
    case colorTypes.lch:
      return isValidLch(color);
    case colorTypes.oklch:
      return isValidOklch(color);
    case colorTypes.p3:
      return isValidP3(color);
    case colorTypes.named:
      return lowerCaseNamedColors.includes(color.toLowerCase());
    default:
      return false;
  }
};

export {
  isValidColor,
  isValidHex6,
  isValidHex8,
  isValidRgb,
  isValidHsl,
  isValidLch,
  isValidOklch,
  isValidP3,
};
