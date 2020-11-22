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
import { effectLayoutStyles } from '@popup/styles/reactCss'
import { BlurSlider } from '@popup/components/BlurSlider'
import { ConfigContext } from '@popup/reducers/contexts'
import { EnumConfigAction } from '@popup/reducers/configReducer'


const useStyles = makeStyles(effectLayoutStyles)

export const EffectTab: React.FC<{}> = () =>  {
  const classes = useStyles()
  const [config, dispatch] = React.useContext(ConfigContext)
  const changeHandler = React.useCallback((_e, value) => dispatch({
    type: EnumConfigAction.SET_BLUR,
    payload: { blur: value },
  }), [])

  return <>
    <List subheader={<ListSubheader>Settings</ListSubheader>} className={classes.root}>
      <ListItem>
        <Typography gutterBottom className={classes.text}>Blur: </Typography>
        <BlurSlider value={config?.params?.blur ?? 0} onChange={changeHandler} />
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