import { formatHex, oklch } from 'culori';

const baseColor = '#6300ff';

const getHue = (color) => {
  const { h } = oklch(color);
  return h;
};

// get light scale array from 100 to 0
const getLightArr = (scale, sample = 'linear', padding = 5) => {
  const arr = [];
  if (sample === 'linear') {
    const step = (100 - padding * 2) / scale;
    for (let i = 0; i < scale; i++) {
      arr.push(Math.floor(padding + i * step));
    }
  } else if (sample === 'exponential') {
  } else if (sample === 'cubic') {
  }
  return arr;
};

const ChromaArr = () => {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push(-0.8 * Math.pow(i / 100, 2) + (0.8 * i) / 100);
  }
  return arr;
};

console.log(getLightArr(11));

// const computeChroma = (light) => {
//   const chroma = 1 - light / 100;

//   const computedChroma = -0.8 * Math.pow(chroma, 2) + 0.8 * chroma;

//   return computedChroma;
// };

// function findClosestNumber(arr, target) {
//   return arr.reduce((closest, num) => {
//     return Math.abs(num - target) < Math.abs(closest - target) ? num : closest;
//   }, arr[0]);
// }

// export const createTonalPalette = (baseColor) => {
//   const baseColorOkLch = oklch(baseColor);

//   const baseColorC = baseColorOkLch.c;
//   const baseColorH = baseColorOkLch.h;

//   const colorArr = lightArr.map((lightness, i) => {
//     return {
//       mode: 'oklch',
//       l: lightness / 100,
//       c: computeChroma(lightness),
//       h: baseColorH,
//     };
//   });

//   return colorArr.map((color) => formatHex(color));
// };

// console.log(createTonalPalette(baseColor));
