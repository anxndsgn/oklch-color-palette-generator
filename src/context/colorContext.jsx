import { createContext, useState } from 'react';
import { samples, hsl } from 'culori';
import { generateColorPalette } from '../lib/color';

const ColorContext = createContext();

function ColorProvider({ children }) {
  const [baseColor, setBaseColor] = useState('#6300ff');

  const [scale, setScale] = useState(10);

  const [lightnessArray, setLightnessArray] = useState(samples(scale));

  const [chromaArray, setChromaArray] = useState(
    samples(scale).map(() => {
      return hsl(baseColor).s;
    }),
  );

  const [colorArray, setColorArray] = useState(
    generateColorPalette(baseColor, lightnessArray, chromaArray),
  );

  const colorContextValue = {
    scale,
    setScale,
    baseColor,
    setBaseColor,
    lightnessArray,
    setLightnessArray,
    chromaArray,
    setChromaArray,
    colorArray,
    setColorArray,
  };
  return (
    <ColorContext.Provider value={colorContextValue}>
      {children}
    </ColorContext.Provider>
  );
}

export { ColorContext, ColorProvider };
