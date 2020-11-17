/**
 * The configurations for the color free
 */

enum EnumConfigAction {
  OVERALL_SWITCH = 0,

}

interface ConfigState {
  enabled: boolean;
}

interface ConfigParam {
  // TODO
}

interface ConfigAction {
  type: EnumConfigAction;
  payload?: ConfigParam;
}



const initState: ConfigState = {
  enabled: true,
}

const reducer = (state: ConfigState, action: ConfigAction): ConfigState => {
  switch (action.type) {
    case EnumConfigAction.OVERALL_SWITCH:
      return {
        ...state,
        enabled: !state.enabled
      }
  }
}



export {
  ConfigAction,
  EnumConfigAction,
  initState,
  reducer,
}