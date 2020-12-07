import * as React from 'react';
import './App.css';
import { useQueryString } from "./utils/useQueryString";
import { colorTypes } from './utils/colorTypes';
import { typeOfColor } from './utils/typeOfColor';
import { Swatch } from './components/Swatch';
import { Input } from './components/Input';
import { DEFAULT_COLOR } from './constants';


const App: React.FC = () => {
  const [colorQp, setColorQp] = useQueryString("color", DEFAULT_COLOR);

  const onInputChange = (value: string) => {
    setColorQp(value);
  }

  const incomingColor = colorQp ? colorQp.toString() : ``;
  const incomingColorType = typeOfColor(incomingColor);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ColoRosetta</h1>
        <p>A utility to translate colors</p>
      </header>

      <Swatch color={incomingColor} />

      <section className="inputs">

        <Input
          labelText="hex6"
          colorType={colorTypes.hex6}
          placeHolder="#ffffff"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="hex8"
          colorType={colorTypes.hex8}
          placeHolder="#ffffffff"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="rgb"
          colorType={colorTypes.rgb}
          placeHolder="rgb(255, 0, 0)"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="rgba"
          colorType={colorTypes.rgba}
          placeHolder="rgba(255, 0, 0, 1)"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="hsl"
          colorType={colorTypes.hsl}
          placeHolder="hsl(100, 100%, 50%)"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="hsla"
          colorType={colorTypes.hsla}
          placeHolder="hsla(100, 100%, 50%, 1)"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="named"
          colorType={colorTypes.named}
          placeHolder="RebeccaPurple"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="picker"
          colorType={colorTypes.picker}
          placeHolder=""
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />
      </section>


    </div>
  );
}

export default App;
