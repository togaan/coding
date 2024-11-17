import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="home page">
            <div className="container pt5">
                <div className="text pt-5 ">
                    <h1 className="p-3 mt-5 mb-5 text-white text-center rounded-3">
                        If you want to become a programer and Your confused about form where you should start, which
                        courses you should take and which path you need to follow!
                        Here we got everything set for you. Just pick your creare and follow the path we set for you.
                    </h1>
                </div>
                <div className="w-100 d-flex justify-content-center pt-5 mt-5">
                    <Link
                        className="expl-path btn text-decoration-none  fs-3 text-white "
                        to="/programming"
                    >Explorer our paths</Link>
                </div>
           </div>
        </div>
    )
}

export default Home