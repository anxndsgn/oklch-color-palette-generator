import { useContext } from 'react';
import { ColorContext } from '../context/colorContext';

function useColor() {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }

  return context;
}

export default useColor;
