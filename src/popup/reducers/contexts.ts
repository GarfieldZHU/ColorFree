import * as React from 'react'

import { ConfigAction, ConfigState } from './configReducer'

export const ConfigContext = React.createContext<[ConfigState, React.Dispatch<ConfigAction>]>([
  {} as ConfigState,
  {} as React.Dispatch<ConfigAction>,
])