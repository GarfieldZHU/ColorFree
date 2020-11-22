/**
 * The configurations for the color free
 */

import { ConfigParam } from "~/shared/message"

enum EnumConfigAction {
  OVERALL_SWITCH = 0,

  SET_BLUR = 11,
}

interface ConfigState {
  enabled: boolean;
  params: ConfigParam;
}

interface ConfigAction {
  type: EnumConfigAction;
  payload?: ConfigParam;
}

const initState: ConfigState = {
  enabled: true,

  params: {
    blur: 0,
  }
}

const sendConfigChange = (state: ConfigState, changes: Partial<ConfigParam>) => {
  chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    const activeTab = tabs[0]
    chrome.tabs.sendMessage(activeTab?.id ?? -1, {
      enabled: state.enabled,
      params: changes,
    })
  })

}

const reducer = (state: ConfigState, action: ConfigAction): ConfigState => {
  let newState = state
  switch (action.type) {
    case EnumConfigAction.OVERALL_SWITCH:
      newState = {
        ...state,
        enabled: !state.enabled
      }
      // When enable the config, send all configuration to page to apply.
      // When disable the config, send no configuration to avoid an update.
      sendConfigChange(newState, newState.enabled ? newState.params : {})
      break
    case EnumConfigAction.SET_BLUR:
      newState = {
        ...state,
        params: {
          ...state.params,
          blur: action.payload?.blur ?? 0
        }
      }
      sendConfigChange(newState, { blur: action.payload?.blur ?? 0 })
      console.log('message sent: blur = ', action.payload?.blur)
      break
  }
  return newState
}



export {
  ConfigAction,
  ConfigState,
  EnumConfigAction,
  initState,
  reducer,
}