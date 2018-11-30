import React, { Component } from 'react';
import './topnavigation.css'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';

class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Navbar className="flexible-navbar" light expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong className="headerTitle">Talk Temple</strong>
                </NavbarBrand>
                <NavbarToggler onClick = { this.onClick } />
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>


                        <NavItem>
                        </NavItem>
                        <NavItem>
                        </NavItem>
                    </NavbarNav>
                    <NavbarNav right>
                        <NavItem>
                        </NavItem>
                        <NavItem>
                        </NavItem>
                        <NavItem>
                        </NavItem>
                        <NavItem>
                            <a className="border border-light rounded mr-1 nav-link Ripple-parent" ><Fa icon="user" className="mr-2"/></a>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default TopNavigation;