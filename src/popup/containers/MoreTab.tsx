import * as React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { Emoji } from '@popup/components/Emoji'
import {
  EnumConfigAction,
  initState,
  reducer
} from '@popup/reducers/configReducer'
import { accordionStyles as useStyles } from '@popup/styles/reactCss'


export function MoreTab() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const [config, dispatch] = React.useReducer(reducer, initState)

  const changeHandler = (panel: string) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel: false)
  }

  return <div className={classes.root}>
    <Accordion expanded={expanded === 'general'} >
      <AccordionSummary
        aria-controls="general-content"
        id="general-header"
      >
        <Typography className={classes.heading}>Enable all</Typography>
        <Typography className={classes.secondaryHeading}>
          <Switch
            classes={{
              root: classes.switchRoot,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            checked={config.enabled}
            onChange={() => dispatch({ type: EnumConfigAction.OVERALL_SWITCH })}
            color="primary"
            name='overallSwitch'
            inputProps={{ 'aria-label': 'general switch' }}
          />
        </Typography>
      </AccordionSummary>
    </Accordion>
    <Accordion expanded={expanded === 'color'} onChange={changeHandler('color')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="color-content"
        id="color-header"
      >
        <Typography className={classes.heading}>Color</Typography>
        <Typography className={classes.secondaryHeading}>
          Manage color settings
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Emoji symbol='🚧'  label='building' /> Comming...
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'effects'} onChange={changeHandler('effects')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="effects-content"
        id="effects-header"
      >
        <Typography className={classes.heading}>Effects</Typography>
        <Typography className={classes.secondaryHeading}>
          Manage effects settings
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Emoji symbol='🚧'  label='building' /> Comming...
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion expanded={expanded === 'stats'} onChange={changeHandler('stats')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="stats-content"
        id="stats-header"
      >
        <Typography className={classes.heading}>User data</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Emoji symbol='🚧'  label='building' /> Comming...
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
}