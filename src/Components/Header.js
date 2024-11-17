import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useMode } from "../ModeContext";

const Header = () => {
    const isLoggedIn = localStorage.getItem("loggedin")
    const { mode, toggleMode } = useMode();
    
    return (
        <header className="sticky-top">
            <nav className={`navbar  p-1 ${!mode && "dark-mode"}`}>
                <div className="container-fluid ">
                    
                    <h1 className="logo fs-1 fw-bold ">Codeing</h1>
                    <form className="form d-flex w-25 ms-5   rounded-3" role="search" >
                    <button className="btn" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon fs-5 " /></button>
                    <input 
                        className={`form-control me-2  search text-white  `}
                        type="search"
                        placeholder="Search"
                    ></input>
   
                   
                </form>
                    <div className="links d-flex gap-4">
                        <NavLink
                            to='/'
                            end
                            className={`link text-decoration-none fw-bold fs-5 ${({isActive}) => isActive ? 'active': null}`}
                        >Home</NavLink>

                        <NavLink
                            to='/about'
                            className={`link text-decoration-none fw-bold fs-5 ${({isActive}) => isActive ? 'active': null}`}
                        >About</NavLink>

                        <NavLink
                            to='/programming'
                            className={`link text-decoration-none fw-bold fs-5 ${({isActive}) => isActive ? 'active': null}`}
                        >Propgramming</NavLink>

                        {!isLoggedIn &&
                            <NavLink
                            to='/login'
                            className={`link text-decoration-none fw-bold  ${({isActive}) => isActive ? 'active': null}`}
                        >
                            <FontAwesomeIcon icon={faCircleUser} className="fs-3"/>
                        </NavLink>}

                        {isLoggedIn &&
                            <NavLink
                            to='/logout'
                            className={`link text-decoration-none fw-bold fs-5 ${({isActive}) => isActive ? 'active': null}`}
                        >Log out</NavLink>}
                        
                    </div>

                    <div className={`mode d-flex align-items-center gap-2   `} onClick={toggleMode} >
                        <p className={` mode-type   mt-3 ms-3`} >Light</p>
                        <div
                            className={`modeIcon rounded-5 position-relative `}
                        >
                            <div className="circle rounded-circle d-block position-absolute"></div>
                        </div>
                        <p className={` mode-type   mt-3 `} >Dark</p>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header