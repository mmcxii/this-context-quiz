import React, { Component } from 'react';
import Nav from './Nav';

import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <i className='header__logo fab fa-js-square' />
                <h1 className='header__title'>Which This is This?</h1>
                <Nav />
            </header>
        );
    }
}

export default Header;
