import * as React from 'react';
import './App.css';
import { ColorProvider } from './utils/ColorContext';
import { useQueryString } from "./utils/useQueryString";
import { colorTypes } from './utils/colorTypes';

import { Swatch } from './components/Swatch';
import { Input } from './components/Input';


const App: React.FC = () => {

  const [color, setColor] = useQueryString("color");


  // if (color === undefined) {
  //   // console.log('color is undefined');
  //   setColor("#fff");
  //   // passedColor = "#fff";
  // }

  const onInputChange = (value: string) => {
    setColor(value);
  }

  return (
    //@ts-ignore
    <ColorProvider value={color}>
      <div className="App">
        <header className="App-header">
          <h1>ColouRosetta</h1>
          <p>A utility to translate colors</p>
        </header>

        <Swatch color="rgba(255, 0, 0, .4)" />

        <section className="inputs">
          <Input
            labelText="rgb 1"
            colorType={colorTypes.rgb}
            placeHolder="hsl(120, 100%, 50%)"
            onChange={onInputChange}
          />

          <Input
            labelText="named 2"
            colorType={colorTypes.named}
            placeHolder="red"
            onChange={onInputChange}
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
    </ColorProvider>
  );
}

export default App;
