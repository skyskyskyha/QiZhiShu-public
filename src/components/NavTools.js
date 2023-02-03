import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import SignInPage from "./User/SignInPage"
import SignUpPage from "./User/SignUpPage";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { signIn, signOut } from "../redux/SignInSlice";
const NavToolsRework = () => {
    const dispatch = useDispatch()
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
    const signInStatus = useSelector(state => state.SignInStatus)
    const handleSignOut = () => {
        dispatch(signOut())
        console.log(signInStatus)
    }
    

    return <div className="nav-user-icon-container">
        <button onClick={(e) =>toggleMenu(e)}><i className="fa fa-bars"></i><i className="fa fa-user-circle"></i></button>
        <ul className={`nav-user-menu nav-user-menu-pos ${menuOpen ? 'nav-menu-open':''}`} >
            {!signInStatus.hasSignedIn && <li onClick={() => setDialog({signIn: false, signUp: true})}><LoginIcon/> <span>Sign In</span> </li>}
            {!signInStatus.hasSignedIn && <li onClick={() => setDialog({signIn: true, signUp: false})}><HowToRegIcon/><span>Sign Up</span> </li>}
            {signInStatus.hasSignedIn && <li> <PeopleOutlineIcon/><span> Profile </span> </li>}
            {signInStatus.hasSignedIn && <li className="nav-signout" onClick={handleSignOut}><ExitToAppIcon/><span>Sign Out</span> </li>}
        </ul>
        <SignInPage open={openDialog.signIn} handleClose={() => setDialog({signIn: false, signUp: false})}/>
        <SignUpPage open={openDialog.signUp} handleClose={() => setDialog({signIn: false, signUp: false})}/>
    </div>

}

export default NavToolsRework