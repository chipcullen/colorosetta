import * as React from 'react';
import './App.css';
import { useQueryString } from "./utils/useQueryString";
import { ColorTypes } from './utils/colorTypes';
import { typeOfColor } from './utils/typeOfColor';
import { colorFavicon } from './utils/colorFavicon';
import { Swatch } from './components/Swatch';
import { Input } from './components/Input';
import { Footer } from './components/Footer';
import { DEFAULT_COLOR } from './constants';


const App: React.FC = () => {
  const [colorQp, setColorQp] = useQueryString("color", DEFAULT_COLOR);

  const onInputChange = (value: string) => {
    setColorQp(value);
  }

  const incomingColor = colorQp ? colorQp.toString() : ``;
  const incomingColorType = typeOfColor(incomingColor);
  colorFavicon(incomingColor, incomingColorType);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ColoRosetta</h1>
        <p>A utility to translate colors <a href="https://marketplace.visualstudio.com/items?itemName=chipcullen.colorosetta">(now as a VS Code Extension!)</a></p>
      </header>

      <Swatch color={incomingColor} colorType={incomingColorType} />

      <section className="inputs">

        <Input
          labelText="hex6"
          colorType={ColorTypes.hex6}
          placeHolder="#ffffff"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="hex8"
          colorType={ColorTypes.hex8}
          placeHolder="#ffffffff"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="rgb"
          colorType={ColorTypes.rgb}
          placeHolder="rgb(255, 0, 0)"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="rgba"
          colorType={ColorTypes.rgba}
          placeHolder="rgba(255, 0, 0, 1)"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="hsl"
          colorType={ColorTypes.hsl}
          placeHolder="hsl(100, 100%, 50%)"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="hsla"
          colorType={ColorTypes.hsla}
          placeHolder="hsla(100, 100%, 50%, 1)"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="named"
          colorType={ColorTypes.named}
          placeHolder="RebeccaPurple"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />

        <Input
          labelText="picker"
          colorType={ColorTypes.picker}
          placeHolder=""
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />
      </section>
      <section className="lch-input">
        <Input
          labelText="lch"
          colorType={ColorTypes.lch}
          placeHolder="lch(54.291% 106.837 40.858 / 1)"
          onChange={onInputChange}
          incomingColor={incomingColor}
          incomingColorType={incomingColorType}
        />
      </section>
      <Footer />
    </div>
  );
}

export default App;
