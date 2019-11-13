import axios from 'axios'

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer' + ' ' + localStorage.access_token
}

export const addCategory = category => {
	return axios
		.post('http://localhost:8000/api/auth/add_category', category,{
			headers: headers
		})
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
}

export const getCategory = () => {
	return axios
		.get('http://localhost:8000/api/auth/list_category', {
			headers: headers
		})
		.then(res => {
			console.log(res.data)
		})
		.catch(err => {
			console.log(err)
		})
}