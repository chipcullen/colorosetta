import { rgb_array_to_LCH } from './w3conversions';

import { hexToRgb, hslToRgb } from './toRgb';
import { hex8ToRgba, hslaToRgba } from './toRgba';

const hex6ToLch = (hex6: string): Array<number> => {
  const hex6asRgbArray = hexToRgb(hex6);
  return rgb_array_to_LCH(hex6asRgbArray);
}

const hex8ToLch = (hex8: string): Array<number> => {
  const hex8asRgbArray = hex8ToRgba(hex8);
  let lch: Array<number> = rgb_array_to_LCH(hex8asRgbArray);
  // taking on the alpha value
  lch.push(hex8asRgbArray[3] * 100);
  return lch;
}

const hslToLch = (hsl: string): Array<number> => {
  const hslAsRgbArray = hslToRgb(hsl);
  return rgb_array_to_LCH(hslAsRgbArray);
}

const hslaToLch = (hsla: string): Array<number> => {
  const hslaAsRgbArray = hslaToRgba(hsla);
  let lch: Array<number> = rgb_array_to_LCH(hslaAsRgbArray);
  // taking on the alpha value
  lch.push(hslaAsRgbArray[3] * 100);
  return lch;
}

const rgbToLch = (rgb: string): Array<number> => {
  let sep = rgb.indexOf(",") > -1 ? "," : " ";

  // Turn "rgb(r,g,b,a)" into [r,g,b,a]
  const rgbArray: Array<string> = rgb
    .substr(4)
    .split(")")[0]
    .split(sep);

  const rgbNumberArray = [parseInt(rgbArray[0]), parseInt(rgbArray[1]), parseInt(rgbArray[2])]

  let lch: Array<number> = rgb_array_to_LCH(rgbNumberArray);

  return lch;
}


const rgbaToLch = (rgba: string): Array<number> => {
  let sep = rgba.indexOf(",") > -1 ? "," : " ";

  // Turn "rgb(r,g,b,a)" into [r,g,b,a]
  const rgbaArray: Array<string> = rgba
    .substr(5)
    .split(")")[0]
    .split(sep);

  const rgbNumberArray = [parseInt(rgbaArray[0]), parseInt(rgbaArray[1]), parseInt(rgbaArray[2])]

  let lch: Array<number> = rgb_array_to_LCH(rgbNumberArray);

  // taking on the alpha value
  lch.push(parseFloat(rgbaArray[3]) * 100);

  return lch;
}

export { hex6ToLch, hex8ToLch, hslToLch, hslaToLch, rgbaToLch, rgbToLch }
