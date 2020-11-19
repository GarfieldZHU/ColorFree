import * as React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Slider} from '@material-ui/core'
import { sliderStyles } from '../styles/reactCss'

interface Props {
  value: number;
  onChange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
}

const useStyles = makeStyles(sliderStyles)

// Inject styles to Slider
const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider)

/**
 * The slider component for color-free to adjust the blur effect.
 * *** The slider thumb will blur with the parameter as a preview ***
 * @param props: the property list of the component
 */
export const BlurSlider: React.FC<Props> = ({ value, onChange }: Props) => {
  const classes= useStyles()

  return <div className={classes.root}>
    <PrettoSlider
      className='color-free__blur-slider'
      valueLabelDisplay="auto"
      aria-label="blur-slider"
      defaultValue={value}
      onChange={onChange}
    />
  </div>
}