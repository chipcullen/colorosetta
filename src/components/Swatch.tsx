import * as React from "react";

type SwatchProps = {
  color: string;
};

const Swatch: React.FC<SwatchProps> = props => {
  const {
    color
  } = props;


  return (
    <div className="swatch-wrapper">
      <div className="swatch" style={{ backgroundColor: color}}></div>
    </div>
  );
};

export { Swatch };
