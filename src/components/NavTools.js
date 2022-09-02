import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";


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
        console.log(e)
        e.stopPropagation()
        setMenuOpen(!menuOpen)
    }

    return <div className="nav-user-icon-container">
        <button onClick={(e) =>toggleMenu(e)}><i className="fa fa-bars"></i><i className="fa fa-user-circle"></i></button>
        <ul className={`nav-user-menu ${menuOpen ? 'nav-menu-open':''}`} >
            <li > 登录 </li>
            <li> 注册 </li>
        </ul>
    </div>

}

export default NavToolsRework