import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './App.css';

class NavbarProd extends React.Component {

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
                        <button className='button_login'> Login </button>
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
                    <a href="/add-category" className="nav-link">
                        Add Category
                    </a> 
                </li>
                <li className="nav-item">
                    <a href="/category-list" className="nav-link">
                        Category List
                    </a> 
                </li>
                <li className="nav-item">
                    <a href="/" onClick= {this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a> 
                </li>
            </ul>
    )

    return (
    	// <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        //     <div id="navbar1" className="collapse navbar-collapse justify-content0md-center">
        //         <ul className="navbar-nav">
        //             <li className="nav-item ">
        //                 <Link to="/" className="nav-link">
        //                     Home
        //                 </Link> 
        //             </li>
        //         </ul>
        //         {localStorage.access_token ? userLink : loginRegLink}
        //     </div>
        // </nav>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/"> 
                <img src="./cartLogo.jpg" alt="logo" height='50px'/> 
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            {localStorage.access_token ? userLink : loginRegLink}
        </Navbar>
            
    );
  }

}

export default withRouter(NavbarProd);