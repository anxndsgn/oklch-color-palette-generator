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

  const updateScale = (newScale) => {
    setScale(newScale);
    setLightnessArray(samples(newScale));
    setChromaArray(
      samples(newScale).map(() => {
        return hsl(baseColor).s;
      }),
    );
    setColorArray(generateColorPalette(baseColor, lightnessArray, chromaArray));
  };

  const [colorArray, setColorArray] = useState(
    generateColorPalette(baseColor, lightnessArray, chromaArray),
  );

  const colorContextValue = {
    scale,
    updateScale,
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
