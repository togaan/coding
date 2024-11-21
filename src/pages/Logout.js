import React from "react";
import { useNavigate } from "react-router-dom";
import { useMode } from "../ModeContext";

const Logout = () => {
    const navigate = useNavigate()
    // const { logout } = useAuth(); // Get logout function from context

    const handleLogout = () => {
        localStorage.removeItem('loggedin')
        setTimeout(() => {
            window.location.reload()
          }, 1000)
        return navigate(`/`)
    }

    const goBackToPreviousPage = () => {
        window.history.back();
    }

    const { mode } = useMode();
    return (
        <div className={`logout page ${!mode && 'dark-mode'}`}>
            <div className="container pt-5 ">
                <div className="alert alert-warning  mt-5 h-100  p-5" role="alert">
                    <h1 className="text-center">Are you sure you want to log out</h1>
                    <div className="d-flex justify-content-around pt-5">
                        <button
                            onClick={handleLogout}
                            className="btn btn-primary"
                        >Log out
                        </button>

                        <button
                            onClick={goBackToPreviousPage}
                            className="btn  btn-dark "
                        >cansle
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout