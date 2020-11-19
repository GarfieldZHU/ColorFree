import * as React from 'react'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

type Child = React.ReactElement | string

interface Props {
  index: number;
  value: string | number;
  dir: string;
  children: Child | Child[];
}

export function TabPanel(props: Props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}