import axios from 'axios'

export const register = newUser => {
	return axios
		.post('api/auth/signup', newUser, {
			headers: {'Content-Type': 'application/json' }
		})
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
}

export const login = user => {
	return axios
		.post('api/auth/login', user,{
			email: user.email,
			password: user.password
		}, {
			headers: {'Content-Type': 'application/json' }
		})
		.then(res => {
			localStorage.setItem('access_token', res.data.token)
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
}

export const getProfile = () => {
	return axios
		.get('api/auth/user', {
			headers: {'Authorization': 'Bearer ${localStorage.access_token}' }
		})
		.then(res => {
			console.log(res)
			return res.data
		})
		.catch(err => {
			console.log(err)
		})
}