import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                {/* <h2 ><Link className='logo' to='/'>Logo</Link></h2> */}
                <ul>
                    <li><NavLink className='link' exact to='/' activeClassName="selected">Home</NavLink></li>
                    <li><NavLink className='link' exact activeClassName="selected" to='/our-history'>History</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;