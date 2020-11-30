import React, { useState, useEffect, ChangeEvent } from "react";

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

enum inputStates {
  empty = `empty`,
  inFocus = `inFocus`,
  inFocusValidValue = `inFocusValidValue`,
  inFocusInvalidValue = `inFocusInvalidValue`,
  onBlurValidValue = `onBlurValidValue`,
  onBlurInvalidValue = `onBlurInvalidValue`,
  outOfFocus = `outOfFocus`,
}

const Input: React.FC<InputProps> = props => {

  const {
    labelText, placeHolder, onChange, colorType, incomingColor, incomingColorType
  } = props;

  const [value, setValue] = useState(incomingColor);
  const [inputState, setInputState] = useState(inputStates.outOfFocus);

  const localChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.currentTarget.value;
    setValue(changedValue);

    if (isValidColor(changedValue, colorType)) {
      setInputState(inputStates.inFocusValidValue);
      onChange(changedValue);
    } else {
      setInputState(inputStates.inFocusInvalidValue);
    }
  }

  const blurHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.currentTarget.value;
    if (isValidColor(changedValue, colorType)) {
      setInputState(inputStates.outOfFocus);
    } else {
      setInputState(inputStates.onBlurInvalidValue);
      // setInputState(inputStates.outOfFocus);
    }
  }

  const translatedIncomingColor = translatedColor(incomingColor, incomingColorType, colorType);

  useEffect(() => {
    console.log(translatedIncomingColor);
    if (inputState === inputStates.onBlurInvalidValue &&
    translatedIncomingColor !== colorTypes.none &&
    translatedIncomingColor !== value) {
      setValue(translatedIncomingColor);
      setInputState(inputStates.outOfFocus);
    }
  // disabling this because we only want to update when
  // translatedIncomingColor changes, but not value or inputState
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translatedIncomingColor]);

  if (inputState === inputStates.outOfFocus &&
    translatedIncomingColor !== colorTypes.none &&
    translatedIncomingColor !== value) {
    setValue(translatedIncomingColor);
  }

  return (
    <label>
      <span className="label-text">
      {labelText}:
      </span>
      <input
        type="text"
        placeholder={placeHolder}
        onChange={localChangeHandler}
        onFocus={() => setInputState(inputStates.inFocus)}
        onBlur={blurHandler}
        value={value}
        name={colorType}
      />
    </label>
  );
};

export { Input };
