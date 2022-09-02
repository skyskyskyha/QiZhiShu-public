import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import SignInPage from "./SignInPage"

// class NavTools extends React.Component {
//     constructor(props) {
//         super(props);
//         this.naviagte = useNavigate()
//         this.state = {
//             menuOpen: false
//         }
//     }
//     componentDidMount = () => {
//         document.addEventListener('click', this.hideMenu)
//     }
//     componentWillUnmount() {
//         document.removeEventListener('click', this.hideMenu)
//     }
//     hideMenu = () => {
//         this.setState({
//             menuOpen: false
//         })
//     }
//
//     render() {
//         return (
//             <div className="nav-user-icon-container">
//                 <button onClick={this.toggleMenu}><i className="fa fa-bars"></i><i className="fa fa-user-circle"></i></button>
//                 <ul className={`nav-user-menu ${this.state.menuOpen ? 'nav-menu-open':''}`} >
//                     <li > 登录 </li>
//                     <li> 注册 </li>
//                 </ul>
//             </div>
//         )
//     }
//
// }

const NavToolsRework = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [openDialog, setDialog] = useState(false)
    const hideMenu = (e) => {
        setMenuOpen(false)
    }

    useEffect(() => {
        document.addEventListener('click', hideMenu)
        return () => {
            document.removeEventListener('click', hideMenu)
        }
    }, [])


    const toggleMenu = (e) => {
        e.stopPropagation()
        setMenuOpen(!menuOpen)
    }
    return <div className="nav-user-icon-container">
        <button onClick={(e) =>toggleMenu(e)}><i className="fa fa-bars"></i><i className="fa fa-user-circle"></i></button>
        <ul className={`nav-user-menu ${menuOpen ? 'nav-menu-open':''}`} >
            <li onClick={() => setDialog(true)}> 登录 </li>
            <li> 注册 </li>
        </ul>
        <SignInPage open={openDialog} handleClose={() => setDialog(false)}/>
    </div>

}

export default NavToolsRework