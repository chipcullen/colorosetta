import React, { useState, useEffect } from "react";


type InputProps = {
  labelText: string;
  placeHolder: string;
  // value?: any;
  defaultValue?: any;
  onChange: Function;
  colorType: string;
};

const Input: React.FC<InputProps> = props => {
  const {
    labelText, placeHolder, defaultValue, onChange
  } = props;

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
      onChange(value);
  }, [onChange, value]);

  return (
    <label>
      {labelText}:
      <input
        type="text"
        placeholder={placeHolder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </label>
  );
};

export { Input };
