export const getURLParameter = (url: string, paramName: string) => {
  if (!url) return ''
  const urlParams = url.split("?")[1] || ''
  const paramArray = urlParams?.split("&") || []
  for (let i = 0; i < paramArray.length; i++) {
    const arr = paramArray[i].split("=")
    if (arr[0] === paramName) {
      return arr[1];
    }
  }
};
