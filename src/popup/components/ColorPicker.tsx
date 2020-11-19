import * as React from 'react'
import { ColorResult, HSLColor, RGBColor, SketchPicker } from 'react-color'

import { pickerStyles } from '@popup/styles/reactCss'
import { rgb2Css } from '~/utils/colorHelpers'

interface Props {
  selected?: RGBColor | HSLColor | string;
  showPicker?: boolean;
}

export const ColorPicker: React.FC<Props> = ({ selected = { r: 0, g: 255, b: 184, a: 1}, showPicker = false }: Props) => {
  const [state, setState] = React.useState({ selected, showPicker })

  const clickHandler = React.useCallback(() => {
    setState(prev => ({
      ...prev,
      showPicker: true,
    }))
  }, [])

  const closeHandler = React.useCallback(() => {
    setState(prev => ({
      ...prev,
      showPicker: false,
    }))
  }, [])

  const changeHandler = React.useCallback((color: ColorResult) => {
    const curr = color?.rgb || color?.hsl || color?.hex;
    if (!!curr) {
      setState(prev => ({ ...prev, selected: curr }))
    }

  }, [])

  const selectedRgb = state.selected as RGBColor
  const backgroundStyle = selectedRgb
    ? {
        ...pickerStyles.color,
        background: rgb2Css(selectedRgb),
      }
    : pickerStyles.color

  return <div className='color-free__picker_div'>
    <div style={ pickerStyles.swatch } onClick={ clickHandler }>
      <div style={ backgroundStyle }
      />
    </div>
    { state.showPicker
      ? <div style={ pickerStyles.popover }>
          <div style={ pickerStyles.cover } onClick={ closeHandler }/>
          <SketchPicker color={ state.selected } onChange={ changeHandler } />
        </div>
      : null
    }
  </div>
}