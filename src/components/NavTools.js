import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import SignInPage from "./SignInPage"
import SignUpPage from "./SignUpPage";


const NavToolsRework = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [openDialog, setDialog] = useState({
        signIn: false,
        signUp: false
    })
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
            <li onClick={() => setDialog({signIn: false, signUp: true})}> 登录 </li>
            <li onClick={() => setDialog({signIn: true, signUp: false})}> 注册 </li>
        </ul>
        <SignInPage open={openDialog.signIn} handleClose={() => setDialog({signIn: false, signUp: false})}/>
        <SignUpPage open={openDialog.signUp} handleClose={() => setDialog({signIn: false, signUp: false})}/>
    </div>

}

export default NavToolsRework