import * as React from 'react'

import {
  Typography,
  Box,
} from '@material-ui/core'

type Child = React.ReactElement | string

interface Props {
  index: number;
  value: string | number;
  dir: string;
  children: Child | Child[];
}

export const TabPanel: React.FC<Props> = (props: Props) => {
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