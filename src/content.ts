const body = document.getElementsByTagName('body') as any
const bodyStyle = body?.[0]?.style

if (bodyStyle) {
  bodyStyle.filter = 'blur(5px)'
}