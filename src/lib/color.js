// /* eslint-disable no-unused-vars */
import { hsl, formatHex } from 'culori';
// import useColor from '../hooks/useColor';

// // check if a color is in-gamut
// const inRGB = inGamut('rgb');

// // get the lightness, chroma, and hue of baseColor
// const { l: baseL, c: baseC, h: baseH } = oklch('#6300ff');

// function generateArray(scale) {
//   return samples(scale).map((value, index) => index);
// }

// // console.log(generateArray(10));

// // 生成亮度数组
// function calLightnessArray(baseL, count) {
//   const step = (1 - baseL) / (count - 1);
//   return Array.from({ length: count }, (_, i) => baseL + step * i);
// }

// // calculate chroma array, the equation is from https://matthewstrom.com/writing/generating-color-palettes/
// function calChromaArray(maxChroma = 0.4, minChroma = 0, scaleValue) {
//   const chromaDifference = maxChroma - minChroma;
//   return (
//     -4 * chromaDifference * Math.pow(scaleValue, 2) +
//     4 * chromaDifference * scaleValue +
//     minChroma
//   );
// }

// 生成色板
export function generateColorPalette(baseColor, lightnessArray, chromaArray) {
  const h = hsl(baseColor).h;

  if (lightnessArray.length !== chromaArray.length) {
    throw new Error('lightnessArray and chromaArray must have the same length');
  }

  return lightnessArray.map((lightness, i) => {
    const color = { mode: 'hsl', h, s: Number(chromaArray[i]), l: lightness };
    return formatHex(color);
  });
}

// export {
//   generateArray,
//   calLightnessArray,
//   calChromaArray,
//   generateColorPalette,
// };
