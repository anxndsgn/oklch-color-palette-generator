import useColor from '../hooks/useColor';

export default function PaletteCard() {
  const { colorArray } = useColor();
  console.log(colorArray);

  return (
    <div className="col-span-5 flex h-24 w-full overflow-hidden rounded-3xl">
      {colorArray.map((color, i) => {
        {
          /* console.log(color); */
        }
        return (
          <div
            className="h-full w-full"
            style={{ backgroundColor: color }}
            key={i}
          ></div>
        );
      })}
    </div>
  );
}
