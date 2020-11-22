/**
 * The configurations for the color free
 */

enum EnumConfigAction {
  OVERALL_SWITCH = 0,

  SET_BLUR = 11,
}

interface ConfigParam {
  blur: number;
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

const reducer = (state: ConfigState, action: ConfigAction): ConfigState => {
  switch (action.type) {
    case EnumConfigAction.OVERALL_SWITCH:
      return {
        ...state,
        enabled: !state.enabled
      }
    case EnumConfigAction.SET_BLUR:
      return {
        ...state,
        params: {
          ...state.params,
          blur: action.payload?.blur ?? 0
        }
      }
  }
}



export {
  ConfigAction,
  ConfigState,
  EnumConfigAction,
  initState,
  reducer,
}