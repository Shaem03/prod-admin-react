import React from 'react';
import { getProfile } from './UserFunction'


class Profile extends React.Component {

	constructor(){
		super()
		this.state = {
			name:'',
			email: '',
		}
	}

	componentDidMount() {
		getProfile().then(res => {
			this.setState({
				name: res.name,
				email: res.email
			})
		})
	}


  render() {
    return (
    	<div className="container">
    		<div className="jumbotron mt-5">	
    			<div className="col-sm-4 mx-auto">
    				<h1 className="text-center">PROFILE</h1>
    			</div>
    			<table className="table col-md-4 mx-auto">
    				<tbody>
    					<tr>
    						<td>Name</td>
    						<td>{this.state.name}</td>
    					</tr>
    					<tr>
    						<td>Email</td>
    						<td>{this.state.email}</td>
    					</tr>
    				</tbody>

    			</table>
    		</div>
    	</div>
    );
  }

}

export default Profile;