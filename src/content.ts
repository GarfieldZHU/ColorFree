import { ConfigMessage } from "~/shared/message"
import { buildFilters } from "./utils/contentHelper"

const body = document.getElementsByTagName('body') as any
const bodyStyle = body?.[0]?.style


chrome.runtime.onMessage.addListener((request: ConfigMessage, _sender: chrome.runtime.MessageSender, _sendResponse): void => {
  // Only accepts the request from popup page
  console.log('Config changed: ', request)

  if (bodyStyle) {
    if (request.enabled) {
      bodyStyle.filter = buildFilters(request.params)
    } else {
      bodyStyle.removeProperty('filter')
    }
  }
})

