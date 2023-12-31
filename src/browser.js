// 浏览器相关

// 检查是否为浏览器环境
const isBrowser = () => ![typeof window, typeof document].includes("undefined")
// isBrowser(); // true (browser)
// isBrowser(); // false (Node)

// 检查浏览器联网状态
const isBrowserOnline = () => {
  return window.navigator.onLine
}
// 监听浏览器联网状态
const watchOnlineStatus = (onlineFn, offlineFn) => {
  window.addEventListener("online", onlineFn)
  window.addEventListener("offline", offlineFn)
}
// 移除浏览器联网状态
const removeOnlineStatus = (onlineFn, offlineFn) => {
  window.removeEventListener("online", onlineFn)
  window.removeEventListener("offline", offlineFn)
}

// 判断手机类型
const getMobileType = () => {
  let u = navigator.userAgent
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1 // g
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    return "Android"
  }
  if (isIOS) {
    return "IOS"
  }
}

// 获取任一元素的任意属性
const getStyle = (elem, prop) => {
  return window.getComputedStyle
    ? window.getComputedStyle(elem, null)[prop]
    : elem.currentStyle[prop]
}

// 判断元素有没有子元素
const hasChildrenEle = (e) => {
  let children = e.childNodes,
    len = children.length
  for (let i = 0; i < len; i++) {
    if (children[i].nodeType === 1) {
      return true
    }
  }
  return false
}

// 带参数跳转到对应页面并打开新窗口
const openNewWindow = (Router,routerName, query) => {
  const routeData = Router.resolve({ name: routerName, query: query })
  const winRef = window.open("url", "_blank")
  winRef.location = routeData.href
}

export default {
  isBrowser,
  getMobileType,
  getStyle,
  hasChildrenEle,
  openNewWindow,
  isBrowserOnline,
  watchOnlineStatus,
  removeOnlineStatus,
}
