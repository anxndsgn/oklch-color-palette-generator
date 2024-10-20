import useColor from '../hooks/useColor';
import { Slider } from './ui/Slider';
import { generateColorPalette } from '../lib/color';

export default function LightnessChart() {
  const {
    lightnessArray,
    setLightnessArray,
    chromaArray,
    baseColor,
    setColorArray,
  } = useColor();

  return (
    <div className="col-span-5 flex h-96 flex-col gap-3 rounded-3xl bg-white p-6">
      <h1 className="text-xl font-bold">Lightness</h1>
      <div className="flex h-full gap-3">
        {lightnessArray.map((lightness, i) => {
          return (
            <div className="flex w-full flex-col items-center gap-3" key={i}>
              <input
                type="number"
                className="h-8 w-full rounded-sm bg-neutral-100 text-center text-sm"
                value={lightness}
                step={0.01}
                onChange={(e) => {
                  const newArray = [...lightnessArray];
                  newArray[i] = parseFloat(e.target.value);
                  setLightnessArray(newArray);
                  setColorArray(
                    generateColorPalette(baseColor, newArray, chromaArray),
                  );
                }}
              />

              <Slider type={'lightness'} index={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
