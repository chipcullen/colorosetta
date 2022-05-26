import { rgb_array_to_LCH } from './w3conversions';

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
  lch.push(parseFloat(rgbaArray[3]));
  console.log(lch)

  return lch;
}

export { rgbaToLch }
