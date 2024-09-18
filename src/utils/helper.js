export const isValidHex = (hex) => {
  return /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(hex);
};
