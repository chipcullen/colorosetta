import Color from 'colorjs.io';

const isLchOutOfRgbGamut = (lch: string): boolean => {
  try {
    const color = new Color(lch);
    return !color.inGamut('srgb');
  } catch {
    return false;
  }
};

export { isLchOutOfRgbGamut };
