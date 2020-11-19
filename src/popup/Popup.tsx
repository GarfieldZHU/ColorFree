import * as React from 'react'
import SwipeableViews from 'react-swipeable-views'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { ColorTab } from '@popup/containers/ColorTab'
import { EffectTab } from '@popup/containers/EffectTab'
import { MoreTab } from '@popup/containers/MoreTab'
import { TabPanel } from '@popup/containers/TabPanel'
import { withA11yProps } from '~/utils/a11yHelpers'

import './Popup.scss'

enum EnumTab {
  Color = 0,
  Effect = 1,
  More = 2,
}


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 480,
  },
}))

export const Popup: React.FC<{}> = () => {
  const [tab, setTab] = React.useState(EnumTab.Color)
  const classes = useStyles()
  const theme = useTheme()

  // Notify chrome on mounted
  React.useEffect(() => {
    chrome.runtime.sendMessage({ popupMounted: true })
  }, [])

  const changeHandler = React.useCallback((_event: any, newValue: number) => setTab(newValue), [])

  return <div className={`popupContainer ${classes.root}`}>
    <AppBar position="static" color="default">
      <Tabs
        value={tab}
        onChange={changeHandler}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="color-free menu"
      >
        <Tab label="Color" {...withA11yProps(0)} />
        <Tab label="Effect" {...withA11yProps(1)} />
        <Tab label="More" {...withA11yProps(2)} />
      </Tabs>
    </AppBar>
    <SwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={tab}
      onChangeIndex={changeHandler}
    >
      <TabPanel value={tab} index={0} dir={theme.direction}>
        <ColorTab />
      </TabPanel>
      <TabPanel value={tab} index={1} dir={theme.direction}>
        <EffectTab />
      </TabPanel>
      <TabPanel value={tab} index={2} dir={theme.direction}>
        <MoreTab />
      </TabPanel>
    </SwipeableViews>
  </div>
}
