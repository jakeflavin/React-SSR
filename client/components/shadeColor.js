const buildString = (usePound, r, b, g) => {

  const pString = usePound ? "#" : "";

  const rString = (r).toString(16).padEnd(2,0);
  const bString = (b).toString(16).padEnd(2,0);
  const gString = (g).toString(16).padEnd(2,0);

  return `${pString}${rString}${bString}${gString}`;
};

const shade = (col, amt) => {

  let usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  let num = parseInt(col,16);

  let r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amt;
  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  let g = (num & 0x0000FF) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return buildString(usePound, r, b, g)

};

export const lighten = (hex) => shade(hex, 40);
export const darken = (hex) => shade(hex, -40);
