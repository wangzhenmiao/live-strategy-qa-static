import request from '@/utils/request'

export function mediaConfig(data){
	return request({
    	// baseURL: process.env.VUE_APP_BASE_API_REAL,
		url: '/api/mediaconfig',
		method: "post",
    	headers: {
      'Content-type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin':'*'
    },
		data
	})
}
