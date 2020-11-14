
export interface A11yProps {
  id: string;
  'aria-controls': string;
  tabIndex?: number;
}

export function withA11yProps(index: number): A11yProps {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
    tabIndex: index,
  }
}