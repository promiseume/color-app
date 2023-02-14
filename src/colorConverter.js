import chroma from "chroma-js";
import seedColor from "./seedColor.js";
const levels =[50,100,200,300,400,500,600,700,800,900];

function ChangeColorChange(palette) {
    let newPalette = {
      paletteName: palette.paletteName,
      id: palette.id,
      emoji: palette.emoji,
      colors: { }
    };
    for(let level of levels){
        newPalette.colors[level] = [];
    }
    for(let color of palette.colors){
        let scale = generateColor(color.color, 10).reverse();
        for (let i in scale) {
          newPalette.colors[levels[i]].push({
            name: `${color.name} ${levels[i]}`,
            id: color.name.toLowerCase().replace(/ /g, "-"),
            hex: scale[i],
            rgb: chroma(scale[i]).css(),
            rgba: chroma(scale[i])
              .css()
              .replace("rgb", "rgba")
              .replace(")", ",1.0)")
          });
    }
}
return newPalette;
}
function getRange(hexColor) {
    const endColor = "#fff";
    return [
      chroma(hexColor)
        .darken(1.4)
        .hex(),
      hexColor,
      endColor
    ];
  }
  function generateColor(hexColor, numberOfColors){
    return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
  }
  export { ChangeColorChange };