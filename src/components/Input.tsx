import React, { useState, ChangeEvent } from "react";

// import { ColorContext } from '../utils/ColorContext';
import { colorTypes } from '../utils/colorTypes';
import { isValidColor } from '../utils/isValidColor';
// import { typeOfColor } from '../utils/typeOfColor';
import { translatedColor } from '../utils/translatedColor';

type InputProps = {
  labelText: string;
  placeHolder: string;
  onChange: Function;
  colorType: colorTypes;
  incomingColor: string;
  incomingColorType: colorTypes;
};

const Input: React.FC<InputProps> = props => {

  const {
    labelText, placeHolder, onChange, colorType, incomingColor, incomingColorType
  } = props;

  const [value, setValue] = useState(incomingColor);
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

  // const incomingColorType = typeOfColor(color);
  const translatedIncomingColor = translatedColor(incomingColor, incomingColorType, colorType);


  if (!focus &&
    translatedIncomingColor !== colorTypes.none &&
    translatedIncomingColor !== value) {
    setValue(translatedIncomingColor);
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
