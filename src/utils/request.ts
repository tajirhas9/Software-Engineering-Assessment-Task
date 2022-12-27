import axios from 'axios'

const baseURL = '/api/collections'
const service = axios.create({
	baseURL: baseURL, // url = base url + request url
	headers: {
		'Content-type': 'application/json',
	},
	timeout: 5000, // request timeout
	// withCredentials: true, // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
	(config) => {
		if (process.env.NODE_ENV === 'development') {
			if (config.method !== 'GET') {
				console.log(`[${config.method}/ Request ${config.baseURL}${config.url}]`)
			} else {
				console.log(`[${config.method}/ Request ${config.url}] ${JSON.stringify(config.data)}`)
			}
		}
		return config
	},
	(error) => {
		Promise.reject(error)
	}
)

// Response interceptors
service.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => {
		if (process.env.NODE_ENV === 'development') {
			if (!error.response.data.message) {
				console.error('Response message not found.')
			}
		}
		return Promise.reject(error)
	}
)

export default service
