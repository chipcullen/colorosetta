import Color from 'colorjs.io';
import { colorTypes } from './colorTypes';
import { calculateOverlay } from './calculateOverlay';
import { rgbToNamed, rgbaToNamed } from './toNamed';

const translatedColor = (
  color: string,
  startingColorType: colorTypes,
  targetColorType: colorTypes
): string => {
  if (startingColorType === targetColorType) {
    return color;
  }

  let parsed: Color;
  try {
    parsed = new Color(color);
  } catch {
    return 'none';
  }

  // For alpha-bearing types, flatten to RGB on white before converting
  // to formats that don't carry alpha (hex6, rgb, hsl, named)
  const hasAlpha = parsed.alpha < 1;
  const needsOverlay =
    hasAlpha &&
    [colorTypes.hex6, colorTypes.picker, colorTypes.rgb, colorTypes.hsl, colorTypes.named].includes(targetColorType);

  const srgb = parsed.toGamut({space: 'srgb'}).to('srgb');
  const [r, g, b] = srgb.coords.map((v: number) => Math.round(v * 255));
  const a = parsed.alpha;

  const overlaid = needsOverlay ? calculateOverlay([r, g, b, a]) : null;

  switch (targetColorType) {
    case colorTypes.hex6:
    case colorTypes.picker: {
      const [or, og, ob] = overlaid ?? [r, g, b];
      return `#${[or, og, ob].map(v => v.toString(16).padStart(2, '0')).join('')}`;
    }

    case colorTypes.hex8: {
      const alpha255 = Math.round(a * 255);
      return `#${[r, g, b, alpha255].map(v => v.toString(16).padStart(2, '0')).join('')}`;
    }

    case colorTypes.rgb: {
      const [or, og, ob] = overlaid ?? [r, g, b];
      return `rgb(${or} ${og} ${ob})`;
    }

    case colorTypes.rgba:
      return `rgba(${r} ${g} ${b} / ${a})`;

    case colorTypes.hsl: {
      const [or, og, ob] = overlaid ?? [r, g, b];
      const flat = new Color(`srgb`, [or / 255, og / 255, ob / 255]);
      const hsl = flat.to('hsl');
      const [h, s, l] = hsl.coords.map((v: number | null) => Math.round(v ?? 0));
      return `hsl(${h} ${s}% ${l}%)`;
    }

    case colorTypes.hsla: {
      const hsl = srgb.to('hsl');
      const [h, s, l] = hsl.coords.map((v: number | null) => Math.round(v ?? 0));
      return `hsla(${h} ${s}% ${l}% / ${a})`;
    }

    case colorTypes.lch: {
      const lch = parsed.to('lch');
      const [l, c, h] = lch.coords.map((v: number | null) => +((v ?? 0).toFixed(2)));
      const alphaStr = a < 1 ? ` / ${a}` : '';
      return `lch(${l}% ${c} ${h}${alphaStr})`;
    }

    case colorTypes.oklch: {
      const oklch = parsed.to('oklch');
      const coords = oklch.coords;
      const l = +((coords[0] ?? 0) * 100).toFixed(2);
      const c = +((coords[1] ?? 0).toFixed(2));
      const h = +((coords[2] ?? 0).toFixed(2));
      const alphaStr = a < 1 ? ` / ${a}` : '';
      return `oklch(${l}% ${c} ${h}${alphaStr})`;
    }

    case colorTypes.p3: {
      const p3 = parsed.to('p3');
      const [pr, pg, pb] = p3.coords.map((v: number | null) => +((v ?? 0).toFixed(2)));
      const alphaStr = a < 1 ? ` / ${a}` : '';
      return `color(display-p3 ${pr} ${pg} ${pb}${alphaStr})`;
    }

    case colorTypes.named: {
      const [or, og, ob] = overlaid ?? [r, g, b];
      if (a === 1) return rgbToNamed([or, og, ob]);
      return rgbaToNamed([r, g, b, a]);
    }

    default:
      return 'none';
  }
};

export { translatedColor };
