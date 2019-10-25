import React from 'react';
import {Link, withRouter} from 'react-router-dom'


class Navbar extends React.Component {

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('access_token')
        this.props.history.push('/')
    }


  render() {
    const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link> 
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link> 
                </li>
            </ul>
    )

    const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link> 
                </li>
                <li className="nav-item">
                    <a href="/" onClick= {this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a> 
                </li>
            </ul>
    )

    return (
    	<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
    		<button className="navbar-toggle"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls= "navbar1"
                aria-expanded = "false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon">  </span>
    		</button>
            <div id="navbar1" className="collapse navbar-collapse justify-content0md-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link> 
                    </li>
                </ul>
                {localStorage.access_token ? userLink : loginRegLink}
            </div>
    	</nav>
    );
  }

}

export default withRouter(Navbar);