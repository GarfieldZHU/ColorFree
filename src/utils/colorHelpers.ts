import { RGBColor } from "react-color";

const rgb2Css = (color: RGBColor | string): string => {
  const rgb = color as RGBColor
  if (!isNaN(rgb?.r) && !isNaN(rgb?.g) && !isNaN(rgb?.b)) {
    if (typeof rgb?.a === 'undefined') {
      return `rgb(${ rgb.r }, ${ rgb.g }, ${ rgb.b })`
    }
    return `rgba(${ rgb.r }, ${ rgb.g }, ${ rgb.b }, ${ rgb.a })`
  }
  return color as string
}


export {
  rgb2Css,
}