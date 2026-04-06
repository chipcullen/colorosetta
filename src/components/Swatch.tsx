import * as React from "react";
import Color from 'colorjs.io';
import { colorTypes } from '../utils/colorTypes';

type SwatchProps = {
  color: string;
  colorType: colorTypes;
};

const Swatch: React.FC<SwatchProps> = props => {
  const { color, colorType } = props;

  const supportsCheck: Partial<Record<colorTypes, string>> = {
    [colorTypes.lch]: 'color: lch(100% 0 0)',
    [colorTypes.oklch]: 'color: oklch(1 0 0)',
    [colorTypes.p3]: 'color: color(display-p3 0 0 0)',
  };

  if (colorType in supportsCheck) {
    let rgbaFallback = 'rgba(0 0 0 / 1)';
    try {
      const c = new Color(color).toGamut({space: 'srgb'}).to('srgb');
      const [r, g, b] = c.coords.map((v: number) => Math.min(255, Math.max(0, Math.round(v * 255))));
      rgbaFallback = `rgba(${r} ${g} ${b} / ${c.alpha})`;
    } catch { /* use default */ }

    return (
      <>
        <div className="swatch-wrapper">
          <div className="swatch"></div>
          <style dangerouslySetInnerHTML={{__html: `
            .swatch {
              background-color: ${rgbaFallback};
              background-color: ${color};
            }

            @supports(${supportsCheck[colorType]}) {
              .lch-warning { display: none}
            }
          `}} />
        </div>
        <small className="lch-warning">
          ℹ️ Your browser doesn't support this color format; showing rgba approximation
        </small>
      </>
    );
  } else {
    return (
      <div className="swatch-wrapper">
        <div className="swatch" style={{ backgroundColor: color }}></div>
      </div>
    );
  }
};

export { Swatch };
