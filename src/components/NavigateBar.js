import React from 'react';
import '../assets/style/NavigateBar.scss'
import logo from '../assets/img/logo.png'
import {NavLink} from 'react-router-dom'
import NavTools from "./NavTools";
const NavLinks = [
    {
        to: "/market",
        name: "课程超市"
    },
    {
        to: "/competition",
        name: "赛事"
    },
    {
        to: "/course",
        name: "课程"
    },
    {
        to: "/store",
        name: "积分商城"
    }
]


export default class NavigateBar extends React.Component {
    state = {};

    constructor(props) {
        super(props)
    }

    static propTypes = {};

    componentDidMount() {
    }

    render() {
        return (
            <div className='nav-bar'>
                <img src={logo} alt="" className="logo"/>
                <div className="nav-main-container">
                    <ul className="nav-browse-menu">
                        {
                            NavLinks.map(link =>
                            <li key={link.name}>
                                <NavLink to={link.to}>{link.name}</NavLink>
                            </li>)
                        }
                    </ul>
                    <NavTools/>
                </div>
            </div>
        )
    }
}
