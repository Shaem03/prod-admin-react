import React from 'react';
import { login } from './UserFunction'

class Login extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			email: '',
			password: '',
			errors: {}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit(e){
		e.preventDefault()

		const user = {
			email: this.state.email,
			password: this.state.password
		}

		login(user).then(res => {
			if(res.data.access_token){
				this.props.history.push('/profile')
			}
		})
	}


  render() {
    return (
    	<div className="container">
    		<div className="row">
    			<div className="col-md-6 mt-5 mx-auto">
    				<form noValidate onSubmit={this.onSubmit}>
    					<h1 className="h3 mb-3 font-weight-normal">
    						Please Signin
    					</h1>
    					<div className="form-group">
    						<label htmlFor="email">Email</label>
    						<input type="email"
    						className="form-control"
    						name="email"
    						placeholder= "Enter Email"
    						value={this.state.email}
    						onChange={this.onChange} />
    					</div>
    					<div className="form-group">
    						<label htmlFor="password">Password</label>
    						<input type="password"
    						className="form-control"
    						name="password"
    						placeholder= "Password"
    						value={this.state.passwordl}
    						onChange={this.onChange} />
    					</div>
    					<button type="submit" className="btn">Sign In</button>
    				</form>
    			</div>
    		</div>
    	</div>
    );
  }

}

export default Login;