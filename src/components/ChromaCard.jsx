import useColor from '../hooks/useColor';
import { Slider } from './ui/Slider';
import { generateColorPalette } from '../lib/color';

export default function ChromaChart() {
  const { chromaArray, setChromaArray, baseColor, setColorArray } = useColor();

  return (
    <div className="col-span-5 flex h-96 flex-col gap-3 rounded-3xl bg-white p-6">
      <h1 className="text-xl font-bold">Chroma</h1>
      <div className="flex h-full gap-3">
        {chromaArray.map((chroma, i) => {
          return (
            <div className="flex w-full flex-col items-center gap-3" key={i}>
              <input
                type="number"
                className="h-8 w-full rounded-sm bg-neutral-100 text-center text-sm"
                value={chroma}
                step={0.01}
                onChange={(e) => {
                  const newArray = [...chromaArray];
                  newArray[i] = parseFloat(e.target.value);
                  setChromaArray(newArray);
                  setColorArray(
                    generateColorPalette(baseColor, newArray, chromaArray),
                  );
                }}
              />

              <Slider lightness={'chroma'} index={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
