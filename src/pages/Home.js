import React from "react";
import {Link} from "react-router-dom"

const Home = () => {
    const fullText = ` If you want to become a programer and Your confused about form where you should start, which
                        courses you should take and which path you need to follow!
                        Here we got everything set for you. Just pick your creare and follow the path we set for you.`;
    const [displayedText, setDisplayedText] = React.useState("");
    
    React.useEffect(() => {
        let currentIndex = 0;
        const index = fullText.length - 1
        const interval = setInterval(() => {
            if (currentIndex < index) {
                setDisplayedText((prev) => prev + fullText[currentIndex]);
                currentIndex++;
            } 
            else {
                clearInterval(interval);
            }
        }, 50); // adjust the speed (in milliseconds) here

        return () => clearInterval(interval); // cleanup on unmount
    }, [fullText]);

    // Set the first character immediately after the component mounts
    React.useEffect(() => {
        if (fullText.length > 0) {
            setDisplayedText(fullText[0]);
        } 
            
        
    }, [fullText]); // This effect runs immediately, setting the first letter



    return (
        <div className="home page">
            <div className="container pt5">
                <div className="text pt-5 ">
                    <h1 className="p-3 mt-5 mb-5 text-white  rounded-3">{displayedText}</h1>
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


