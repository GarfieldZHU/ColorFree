import { ConfigParam } from "~/shared/message"

/**
 * When config changes, build up the filter from the config to apply a new filter to content.
 * @param configs the updated configuration to be applied to content.
 */
const buildFilters = (params: Partial<ConfigParam>): string => {
  let blurExp = ''  // The expression for blur as filter

  if (params?.blur) blurExp = `blur(${params.blur}px)`

  return `${blurExp}`
}


export {
  buildFilters,
}