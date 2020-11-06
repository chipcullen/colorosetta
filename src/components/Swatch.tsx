import * as React from "react";

type SwatchProps = {
  color: string;
};

const Swatch: React.FC<SwatchProps> = props => {
  const {
    color
  } = props;


  return (
    <div className="swatch" style={{ backgroundColor: color}}></div>
  );
};

export { Swatch };
