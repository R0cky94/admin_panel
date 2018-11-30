import React, { Component } from 'react';
import logo from "../../assets/talktemple_logo.png";
import { ListGroup, ListGroupItem, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import './sidenavigation.css';

class TopNavigation extends Component {


    render() {
        return (
            <div className="sidebar-fixed position-fixed">
                <a href="#!" className="logo-wrapper waves-effect">
                    <img alt="MDB React Logo" className="logoStyle" src={logo}/>
                </a>
                <ListGroup className="list-group-flush">
                    <NavLink exact={true} to="/" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="pie-chart" className="mr-3"/>
                            Dashboard
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/profile" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="video-camera" className="mr-3"/>
                            Videos
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/tables" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="headphones" className="mr-3"/>
                            Audios
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/maps" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="suitcase" className="mr-3"/>
                            Packages
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/404" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="users" className="mr-3"/>
                             Users
                        </ListGroupItem>
                    </NavLink>
                </ListGroup>
            </div>
        );
    }
}

export default TopNavigation;