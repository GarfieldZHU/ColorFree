/** The configurations **/
interface ConfigParam {
  blur: number;

}

interface ConfigMessage {
  enabled: boolean;
  params: Partial<ConfigParam>;
}

export {
  ConfigParam,
  ConfigMessage,
}