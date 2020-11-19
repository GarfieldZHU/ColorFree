import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'

import { Emoji } from '@popup/components/Emoji'
import { effectLayoutStyles } from '../styles/reactCss'

const useStyles = makeStyles(effectLayoutStyles)

export function EffectTab() {
  const classes = useStyles()

  return <>
    <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
      <ListItem>
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText id="effects-list-label-blur" primary="Blur" />
        <ListItemSecondaryAction>

        </ListItemSecondaryAction>
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