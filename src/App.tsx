import * as React from 'react';
import './App.css';
import { useQueryString } from "./utils/useQueryString";
import { colorTypes } from './utils/colorTypes';
import { toRgba } from './utils/toRgba';
import { typeOfColor } from './utils/typeOfColor';
import { Swatch } from './components/Swatch';
import { Input } from './components/Input';


const App: React.FC = () => {

  const defaultRgba = `rgba(255, 0, 0, 1)`;
  const [colorQp, setColorQp] = useQueryString("color", defaultRgba);

  const onInputChange = (value: string) => {
    setColorQp(value);
  }

  const incomingColor = colorQp ? colorQp.toString() : ``;
  const incomingColorType = typeOfColor(incomingColor);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ColouRosetta</h1>
        <p>A utility to translate colors</p>
      </header>

      <Swatch color={incomingColor} />

      <section className="inputs">

        <Input
          labelText="hex6 1"
          colorType={colorTypes.hex6}
          placeHolder="#ffffff"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="hex8 1"
          colorType={colorTypes.hex8}
          placeHolder="#ffffffff"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="rgb 1"
          colorType={colorTypes.rgb}
          placeHolder="hsl(120, 100%, 50%)"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="rgba 1"
          colorType={colorTypes.rgba}
          placeHolder="#ffffff"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="hsl 1"
          colorType={colorTypes.hsl}
          placeHolder="#ffffff"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="hsla 1"
          colorType={colorTypes.hsla}
          placeHolder="#ffffff"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />



        {
        // @todo
        // rgb
        // rgba
        // hex
        // hex8
        // named
}
      </section>
    </div>
  );
}

export default App;
