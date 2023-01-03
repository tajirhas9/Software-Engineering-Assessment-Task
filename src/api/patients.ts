// import request from '@/utils/request'
import axios from 'axios'
import { getCookie } from 'tiny-cookie'

export const getPatients = async () => {
	const config = {
			headers: {
				Authorization: 'Bearer ' + getCookie('token'),
			}
	}
	let patients
	await axios.get('http://23.94.211.99:8090/api/collections/patients/records', config)
		.then(response => {
			console.log('hsdhdgfjdsbfjs')
			console.log(response)
			patients = response
			})
		.catch((e) => console.log(e))
	
	console.log(patients)
	return patients
}
