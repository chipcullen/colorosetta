import * as React from "react";
import Color from 'colorjs.io';
import { colorTypes } from '../utils/colorTypes';

type SwatchProps = {
  color: string;
  colorType: colorTypes;
};

const Swatch: React.FC<SwatchProps> = props => {
  const { color, colorType } = props;

  if (colorType === colorTypes.lch) {
    let rgbaFallback = 'rgba(0 0 0 / 1)';
    try {
      const c = new Color(color).to('srgb');
      const [r, g, b] = c.coords.map((v: number) => Math.round(v * 255));
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

            @supports(color: lch(100% 0 0)) {
              .lch-warning { display: none}
            }
          `}} />
        </div>
        <small className="lch-warning">
          ℹ️ Your browser doesn't support lch colors; showing rgba approximation
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
