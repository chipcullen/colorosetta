import * as React from "react";
import { colorTypes } from '../utils/colorTypes';

type SwatchProps = {
  color: string;
  colorType: colorTypes;
};

const Swatch: React.FC<SwatchProps> = props => {
  const {
    color,
    colorType
  } = props;

  console.log(color);
  console.log(colorType);

  return (
    <div className="swatch-wrapper">
      <div className="swatch" ></div>


      <style dangerouslySetInnerHTML={{__html: `
        .swatch {
          background-color: ${color}
        }
      `}} />
    </div>
  );
};

export { Swatch };
