// 测试环境服务器地址
const devFrontendURL = ''
const devBackendURL = ''

// 生产环境服务器地址
const prodFrontendURL = ''
const prodBackendURL = ''

const devBuyIds = {
  buyIdDiscount: 1,
  buyIdNormal: 1,
  buyIdClaim: 1
}

const prodBuyIds = {
  buyIdDiscount: 1,
  buyIdNormal: 1,
  buyIdClaim: 1
}

export const isDevEnv = window.location.host.indexOf('demo') > -1

export const getBuyIds = () => {
  return isDevEnv ? devBuyIds : prodBuyIds
}

export const getBaseApiURL = () => {
  return isDevEnv ? devBackendURL : prodBackendURL
}

export const getBaseShareURL = () => {
  return isDevEnv ? devFrontendURL : prodFrontendURL
}

export const getImageUrl = (pathWithName: string): string => {
  return './imgs/' + pathWithName
};

export const getRandomHint = () => {
  const list = []
  const salt = Math.floor(Math.random() * 5)
  return list[salt]
}
