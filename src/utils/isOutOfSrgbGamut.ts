import Color from 'colorjs.io';

const isOutOfSrgbGamut = (color: string): boolean => {
  try {
    return !new Color(color).inGamut('srgb');
  } catch {
    return false;
  }
};

export { isOutOfSrgbGamut };
