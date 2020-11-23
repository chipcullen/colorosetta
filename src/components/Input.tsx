import React, { useState, useContext, ChangeEvent } from "react";

import { ColorContext } from '../utils/ColorContext';
import { colorTypes } from '../utils/colorTypes';
import { isValidColor } from '../utils/isValidColor';

type InputProps = {
  labelText: string;
  placeHolder: string;
  onChange: Function;
  colorType: colorTypes;
};

const Input: React.FC<InputProps> = props => {

  const {
    labelText, placeHolder, onChange, colorType
  } = props;

  const color = useContext(ColorContext);
  const [value, setValue] = useState(color);
  const [focus, setFocus] = useState(false);

  const localChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.currentTarget.value;
    setValue(changedValue);

    if (isValidColor(changedValue, colorType)) {
      // console.log('valid color');
      onChange(changedValue);
    } else {
      // console.log('not valid color');
    }
  }

  // if this input is not in focus, and the color context is different
  // set value
  if (!focus && color !== value) {
    setValue(color);
  }

  return (
    <label>
      {labelText}:
      <input
        type="text"
        placeholder={placeHolder}
        onChange={localChangeHandler}
        onFocus={(e) => setFocus(true)}
        onBlur={(e) => setFocus(false)}
        value={value}
        name={colorType}
      />
    </label>
  );
};

export { Input };
