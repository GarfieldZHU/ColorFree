import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Typography,
} from '@material-ui/core'

import { Emoji } from '@popup/components/Emoji'
import { effectLayoutStyles } from '../styles/reactCss'
import { BlurSlider } from '../components/BlurSlider'

const useStyles = makeStyles(effectLayoutStyles)

export const EffectTab: React.FC<{}> = () =>  {
  const classes = useStyles()

  return <>
    <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
      <ListItem>
        <Typography gutterBottom className={classes.text}>Blur: </Typography>
        <BlurSlider value={50} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Emoji symbol='🚧' label='building' />
        </ListItemIcon>
        <ListItemText id="switch-list-label-bluetooth" primary="Comming..." />
        <ListItemSecondaryAction>
        </ListItemSecondaryAction>
      </ListItem>
    </List>

  </>
}