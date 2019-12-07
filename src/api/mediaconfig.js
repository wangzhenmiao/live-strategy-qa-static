import request from '@/utils/request'

export function getDetail(params) {
  return request({
    url: '/mediaconfig',
    method: 'post',
    params
  })
}
export function mediaStore(data){
	return request({
		url:'/mediastore',
		method:"post",
		data
	})
}
