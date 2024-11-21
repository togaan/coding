import React from "react";
import { Link, Form, useNavigation, redirect, useActionData, useLoaderData } from "react-router-dom";
import { useMode } from "../ModeContext";
import { loginUser } from "../api";


export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) { 
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    // get the path that the user were in before he want to login, so we rediract the user after he login to the same path
    const pathname = new URL(request.url).searchParams.get('redirectTo') || '/programming'

    // Get user data by calling the loginUser function
    const userData = await loginUser(); // Ensure this returns the user data correctly.

    // Check the authentication status
    const searchedUserFromDatabase = userData.findIndex(item => item.email === email)

    if (userData && email === userData[searchedUserFromDatabase].email && password === userData[searchedUserFromDatabase].password) {
        
        localStorage.setItem("loggedin", true);
        setTimeout(() => {
            window.location.reload()
          }, 1000)
        return redirect(pathname);

    } else {
        return 'No user with those credentials found!'    
    }
}


const Login = () => {
    const { mode } = useMode();
    const navigaiton = useNavigation();
    const message = useLoaderData();
    const error = useActionData();
    

    return (
        <div className={`page login ${!mode && 'dark-mode'}`}>
            <div className="container">
                <h1 className="fw-bold text-center pb-5 pt-5">Sign in to your account</h1>
                {message && <h3 className="fw-bold text-danger text-center pt-5 pb-3">{message}</h3>}
                {error && <h3 className="fw-bold text-danger text-center pt-5 pb-3">{error}</h3>}
                <Form method="post" replace className="login-form m-auto">
                    <input
                        className="form-control search"
                        name="email"
                        type="email"
                        placeholder="Email address"
                    />
                    <input
                        className="form-control search mt-2"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        disabled={navigaiton.state === "submitting"}
                        className="btn w-100 text-white fs-5 fw-bold mt-5 mb-5">
                        {navigaiton.state === "submitting" ? "Logging in..." : "Log in"}
                    </button>
                </Form>
                <div className="d-flex justify-content-center">
                    <Link to='/createAccount' className="account text-decoration-none text-black text-center pt-3 fs-5">
                        Don’t have an account? <span className="create-account">Create one now</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login