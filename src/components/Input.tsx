import React, { useState, useEffect, ChangeEvent } from "react";

import { colorTypes } from "../utils/colorTypes";
import { isOutOfSrgbGamut } from "../utils/isOutOfSrgbGamut";
import { isValidColor } from "../utils/isValidColor";
import { translatedColor } from "../utils/translatedColor";

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
  inFocusValidValueOutOfGamut = `inFocusValidValueOutOfGamut`,
  inFocusInvalidValue = `inFocusInvalidValue`,
  onBlurValidValue = `onBlurValidValue`,
  onBlurInvalidValue = `onBlurInvalidValue`,
  outOfFocus = `outOfFocus`,
  outOfFocusOutOfGamut = `outOfFocusOutOfGamut`,
}

const Input: React.FC<InputProps> = (props) => {
  const {
    labelText,
    placeHolder,
    onChange,
    colorType,
    incomingColor,
    incomingColorType,
  } = props;

  const getOutOfFocusState = (colorValue: string) => {
    if ([colorTypes.lch, colorTypes.oklch, colorTypes.p3].includes(colorType) && isOutOfSrgbGamut(colorValue)) {
      return inputStates.outOfFocusOutOfGamut;
    }
    return inputStates.outOfFocus;
  };

  const initInputState = () => getOutOfFocusState(incomingColor);

  const [value, setValue] = useState(incomingColor);
  const [inputState, setInputState] = useState(initInputState());

  const localChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.currentTarget.value;
    setValue(changedValue);

    if (isValidColor(changedValue, colorType)) {
      if ([colorTypes.lch, colorTypes.oklch, colorTypes.p3].includes(colorType) && isOutOfSrgbGamut(changedValue)) {
        setInputState(inputStates.inFocusValidValueOutOfGamut);
      } else {
        setInputState(inputStates.inFocusValidValue);
      }
      onChange(changedValue);
    } else {
      setInputState(inputStates.inFocusInvalidValue);
    }
  };

  const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const changedValue = e.currentTarget.value;
    if (isValidColor(changedValue, colorType)) {
      setInputState(getOutOfFocusState(changedValue));
    } else {
      setInputState(inputStates.onBlurInvalidValue);
    }
  };

  const translatedIncomingColor = translatedColor(
    incomingColor,
    incomingColorType,
    colorType,
  );

  useEffect(() => {
    if (
      inputState === inputStates.onBlurInvalidValue &&
      translatedIncomingColor !== colorTypes.none &&
      translatedIncomingColor !== value
    ) {
      setValue(translatedIncomingColor);
      setInputState(getOutOfFocusState(translatedIncomingColor));
    }
    // disabling this because we only want to update when
    // translatedIncomingColor changes, but not value or inputState
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [translatedIncomingColor]);

  if (
    (inputState === inputStates.outOfFocus || inputState === inputStates.outOfFocusOutOfGamut) &&
    translatedIncomingColor !== colorTypes.none &&
    translatedIncomingColor !== value
  ) {
    setValue(translatedIncomingColor);
    setInputState(getOutOfFocusState(translatedIncomingColor));
  }

  const showGamutWarning =
    inputState === inputStates.inFocusValidValueOutOfGamut ||
    inputState === inputStates.outOfFocusOutOfGamut;

  if (colorType === colorTypes.picker) {
    return (
      <div className="input-wrapper">
        <label>
          <span className="label-text">{labelText}:</span>
          <div className="color-input-wrapper">
            <input
              type="color"
              placeholder={placeHolder}
              onChange={localChangeHandler}
              onFocus={() => setInputState(inputStates.inFocus)}
              onBlur={blurHandler}
              value={value}
              name={colorType}
            />
          </div>
        </label>
      </div>
    );
  } else {
    return (
      <div className="input-wrapper">
        <label>
          <span className="label-text">{labelText}:</span>
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
        {showGamutWarning && (
          <small className="gamut-warning">
            ⚠️ This value is outside the sRGB gamut; translated values are
            approximated
          </small>
        )}
      </div>
    );
  }
};

export { Input };
