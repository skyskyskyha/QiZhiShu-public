import React from "react";

export default class NavTools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }
    componentDidMount = () => {
        document.addEventListener('click', this.hideMenu)
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.hideMenu)
    }
    hideMenu = () => {
        this.setState({
            menuOpen: false
        })
    }
    toggleMenu = (e) => {
        e.stopPropagation()
        this.setState({
            menuOpen: !this.state.menuOpen
        })
   }
    render() {
        return (
            <div className="nav-user-icon-container">
                <button onClick={this.toggleMenu}><i className="fa fa-bars"></i><i className="fa fa-user-circle"></i></button>
                <ul className={`nav-user-menu ${this.state.menuOpen ? 'nav-menu-open':''}`} >
                    <li> 登录 </li>
                    <li> 注册 </li>
                </ul>
            </div>
        )
    }
    p
}