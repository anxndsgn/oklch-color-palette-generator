import LightnessChart from './components/LightnessCard';
import ChromaChart from './components/ChromaCard';
import InputCard from './components/InputCard';
import PaletteCard from './components/PaletteCard';

function App() {
  return (
    <div className="mx-auto my-10 flex w-3/5 flex-col items-center gap-4">
      <h1 className="text-center text-2xl font-bold">Color Palette</h1>
      {/* Layout */}
      <div className="grid w-full grid-cols-8 items-start gap-3">
        <InputCard />
        <PaletteCard />
        <LightnessChart />
        <ChromaChart />
      </div>
    </div>
  );
}

export default App;
