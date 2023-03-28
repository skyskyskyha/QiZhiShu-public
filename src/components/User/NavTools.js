import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import SignUpPage from "./SignUpPage"
import SignInPage from "./SignInPage";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { signIn, signOut } from "../../redux/SignInSlice";
import UserProfilePage from "./UserProfilePage";

const NavTools = () => {
    const dispatch = useDispatch()
    const [menuOpen, setMenuOpen] = useState(false)
    const [openDialog, setDialog] = useState({
        signIn: false,
        signUp: false,
        userProfile: false
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
    const closeAllMenus = () => {
        setDialog({signUp: false, signIn: false, userProfile: false})
    }
    const toggleSignMenu = () => {
        const signInMenu = openDialog.signIn;
        const signUpMenu = openDialog.signUp
        setDialog({signIn: !signInMenu, signUp: !signUpMenu})
    }
    const signInStatus = useSelector(state => state.SignInStatus)
    const handleSignOut = () => {
        dispatch(signOut())
        console.log(signInStatus)
    }
    return (
        <div className="nav-user-icon-container">
            <button onClick={(e) =>toggleMenu(e)}><i className="fa fa-bars"/><i className="fa fa-user-circle"/></button>
            <ul className={`nav-user-menu nav-user-menu-pos ${menuOpen ? 'nav-menu-open':''}`} >
                {!signInStatus.hasSignedIn &&
                <li onClick={() => setDialog({signUp: false, signIn: true, userProfile: false})}><LoginIcon/> <span>登录</span></li>}
                {!signInStatus.hasSignedIn &&
                <li onClick={() => setDialog({signUp: true, signIn: false, userProfile: false})}><HowToRegIcon/><span>注册</span> </li>}
                {signInStatus.hasSignedIn && <li onClick={() => setDialog({signUp: false, signIn: false, userProfile: true})}> <PeopleOutlineIcon/><span> 用户信息 </span> </li>}
                {signInStatus.hasSignedIn && <li className="nav-signout" onClick={handleSignOut}><ExitToAppIcon/><span>登出</span> </li>}
            </ul>
            <SignUpPage open={openDialog.signUp} handleClose={closeAllMenus} toggleSignMenu={toggleSignMenu}/>
            <SignInPage open={openDialog.signIn} handleClose={closeAllMenus} toggleSignMenu={toggleSignMenu}/>
            <UserProfilePage open={openDialog.userProfile} handleClose={closeAllMenus}/>
        </div>
    )
}

export default NavTools
