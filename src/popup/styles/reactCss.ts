import { CSSProperties } from 'react'
import reactCSS from 'reactcss'
import { Theme, createStyles } from '@material-ui/core/styles'

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

const accordionStyles = (theme: Theme) => createStyles({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    fontWeight: 'bold',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  switchRoot: {
    width: 38,
    height: 22,
    padding: 0,
    margin: 0,
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 20,
    height: 20,
  },
  track: {
    borderRadius: 22 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
})

const effectLayoutStyles = (theme: Theme) =>
  createStyles({
    root: {
      width: 300 + theme.spacing(3) * 2,
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    text: {
      paddingRight: '50px',
    }
  })


const sliderStyles = (theme: Theme) =>
createStyles({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
})


export {
  effectLayoutStyles,
  accordionStyles,
  pickerStyles,
  sliderStyles,
}