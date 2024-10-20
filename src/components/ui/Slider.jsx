import * as SliderPrimitive from '@radix-ui/react-slider';
import useColor from '../../hooks/useColor';
import { generateColorPalette } from '../../lib/color';

function Slider({ index, type }) {
  const {
    setLightnessArray,
    setColorArray,
    lightnessArray,
    chromaArray,
    setChromaArray,
    baseColor,
    colorArray,
  } = useColor();

  const lightness = lightnessArray[index];

  const chroma = chromaArray[index];

  let value;

  type === 'lightness' ? (value = lightness) : (value = chroma);

  return (
    <SliderPrimitive.Root
      className={'relative flex h-full w-2 flex-col items-center'}
      orientation="vertical"
      min={0}
      max={1}
      step={0.01}
      defaultValue={[value]}
      value={[value]}
      onValueChange={(value) => {
        type === 'lightness'
          ? setLightnessArray((prev) => {
              const newArray = [...prev];
              newArray[index] = value[0];
              console.log(newArray);
              return newArray;
            })
          : setChromaArray((prev) => {
              const newArray = [...prev];
              newArray[index] = value[0];
              console.log(newArray);
              return newArray;
            });

        setColorArray(
          generateColorPalette(baseColor, lightnessArray, chromaArray),
        );
      }}
    >
      <SliderPrimitive.Track className="relative w-2 flex-grow rounded-full bg-neutral-200">
        <SliderPrimitive.Range
          className={`absolute w-full rounded-full`}
          style={{ backgroundColor: baseColor }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className="ring-offset-background focus-visible:ring-ring block h-5 w-5 rounded-full border-2 border-neutral-100 shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        style={{ backgroundColor: baseColor }}
      />
    </SliderPrimitive.Root>
  );
}

// Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
