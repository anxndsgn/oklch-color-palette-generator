import { isValidHex } from '../lib/utils';
import useColor from '../hooks/useColor';
import { HexColorPicker } from 'react-colorful';
import { generateColorPalette } from '../lib/color';
import { hsl } from 'culori';

export default function InputCard() {
  const {
    baseColor,
    setBaseColor,
    setChromaArray,
    setColorArray,
    lightnessArray,
    chromaArray,
    scale,
    updateScale,
  } = useColor();
  return (
    <form
      className="col-span-3 row-span-4 flex flex-col items-center gap-4 rounded-3xl bg-white p-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="w-full text-left text-sm font-semibold">
        Input Color
      </label>
      <div className="flex w-full gap-3">
        {isValidHex(baseColor) && (
          <div
            className="aspect-square h-10 w-10 rounded-full"
            style={{ backgroundColor: baseColor }}
          ></div>
        )}
        <input
          type="text"
          value={baseColor}
          className={`flex h-10 w-full rounded-xl bg-neutral-100 px-3 py-2 text-sm ring-[#6300ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          onChange={(e) => {
            if (isValidHex(e.target.value)) {
              setBaseColor(e.target.value);
            }
          }}
        />
      </div>
      <HexColorPicker
        color={baseColor}
        onChange={(color) => {
          setBaseColor(color);
          setChromaArray((prev) => {
            return prev.map(() => {
              return hsl(color).s.toFixed(2);
            });
          });
          setColorArray(
            generateColorPalette(baseColor, lightnessArray, chromaArray),
          );
        }}
      />
      <label className="w-full text-left text-sm font-semibold">
        Color Scale
      </label>
      <input
        type="number"
        value={scale}
        className={`flex h-10 w-full rounded-xl bg-neutral-100 px-3 py-2 text-sm ring-[#6300ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
        onChange={(e) => {
          updateScale(e.target.value);
        }}
      />
    </form>
  );
}
