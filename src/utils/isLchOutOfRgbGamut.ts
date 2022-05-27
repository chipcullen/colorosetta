import { isLCH_within_sRGB } from './w3conversions';

const isLchOutOfRgbGamut = (lch: string): boolean => {
  const sep = lch.indexOf(",") > -1 ? "," : " ";

  const lchArray: Array<string> = lch
    .substr(4)
    .split(")")[0]
    .split(sep);

  const l = lchArray[0].replace("%","");
  const c = lchArray[1];
  const h = lchArray[2];

  return !isLCH_within_sRGB(+l, +c, +h);
}

export { isLchOutOfRgbGamut }
