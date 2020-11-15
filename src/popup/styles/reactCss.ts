import { CSSProperties } from 'react'
import reactCSS from 'reactcss'

const pickerStyles = reactCSS({
  'default': {
    color: {
      width: '36px',
      height: '14px',
      borderRadius: '2px',
      background: 'rgba(255, 255, 255, 1)',
    } as CSSProperties,
    swatch: {
      padding: '5px',
      background: '#fff',
      borderRadius: '1px',
      boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
      display: 'inline-block',
      cursor: 'pointer',
    } as CSSProperties,
    popover: {
      position: 'absolute',
      zIndex: 2,
    }  as CSSProperties,
    cover: {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    } as CSSProperties,
  },
})


export {
  pickerStyles,
}