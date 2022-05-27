import * as React from "react";
import { colorTypes } from '../utils/colorTypes';
import { toRgba } from '../utils/toRgba';
import { formatColor } from '../utils/formatColor';

type SwatchProps = {
  color: string;
  colorType: colorTypes;
};

const Swatch: React.FC<SwatchProps> = props => {
  const {
    color,
    colorType
  } = props;

  if (colorType === colorTypes.lch) {
    // react doesn't support lch colors, so we have to use dangerouslySetInnerHTML
    const rgbaFallback = formatColor(toRgba(color, colorType), colorTypes.rgba);
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
        <div className="swatch" style={{ backgroundColor: color}}></div>
      </div>
    );
  }
};

export { Swatch };
