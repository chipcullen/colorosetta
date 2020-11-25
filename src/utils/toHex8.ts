const rgbaToHex8 = (rgba: string) => {

  let sep = rgba.indexOf(",") > -1 ? "," : " ";

  // Turn "rgba(r,g,b,a)" into [r,g,b,a]
  const rgbaArray: Array<string> = rgba
    .substr(5)
    .split(")")[0]
    .split(sep);

  let r = (+rgbaArray[0]).toString(16);
  let g = (+rgbaArray[1]).toString(16);
  let b = (+rgbaArray[2]).toString(16);
  let a = Math.round((+rgbaArray[3]) * 255).toString(16);

  if (r.length === 1)
    r = "0" + r;
  if (g.length === 1)
    g = "0" + g;
  if (b.length === 1)
    b = "0" + b;
  if (a.length === 1)
    a = "0" + a;

  return "#" + r + g + b + a;
}


export { rgbaToHex8 };
