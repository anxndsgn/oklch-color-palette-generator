import { useState } from 'react';
import { isValidHex } from './utils/helper';

function App() {
  const [colors, setColors] = useState('#6300ff');
  return (
    <div className="mx-auto my-10 flex w-1/2 flex-col items-center gap-4">
      <h1 className="text-center text-4xl font-bold">Color Palette</h1>
      <div className="flex w-full items-center gap-4">
        {isValidHex(colors) && (
          <div
            className="h-10 w-10 rounded-md"
            style={{ backgroundColor: colors }}
          ></div>
        )}
        <input
          type="text"
          placeholder={colors}
          className="w-full rounded-md bg-gray-100 p-2"
          onChange={(e) => {
            if (isValidHex(e.target.value)) {
              setColors(e.target.value);
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
