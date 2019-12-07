import Mock from 'mockjs'

const data = Mock.mock({
  'detail': {
    "systemType":"iOS",
    "appId":"11",
    "phoneDetail":"(iPhone 6; iOS 12.3.1; zh_CN; iPhone7,2; S1)",
    "momoid":"123456",
    "checkField":"comm_parms",
    "targetValue":"1"
}
})

export default [
  {
    url: '/mediaconfig',
    type: 'post',
    response: config => {
      const detail = data.detail
      return {
        code: 20000,
        data: {
          detail: detail
        }
      }
    }
  }
]
