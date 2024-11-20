import React from "react";
import { Link, defer, Await, useLoaderData } from "react-router-dom";
import { useMode } from "../../ModeContext";
import { getCourses } from "../../api";
import { requireAuth } from "../../Authentication";

export async function loader({ request }) {
    await requireAuth(request)
    return defer({ sections: getCourses() })
  }

const Sections = () => {
    const { mode } = useMode();
    const sectionsPromice = useLoaderData()
    const  id  = 'sections'

    return (
        <div className={`body-page w-100 p-3 ${!mode && 'dark-mode'} sections `}>
            <React.Suspense fallback={
                <>
                    <h2 className="loading text-center pt-5">Loading paths...</h2>
                    <div className="load pt-5 d-flex  justify-content-center">
                        <div className="load-one rounded-circle"></div>
                        <div className="load-two rounded-circle"></div>
                        <div className="load-three rounded-circle"></div>
                    </div>
                </>
            }>
                <Await resolve={sectionsPromice.sections}>
                    {Section => {
                        // Find the corresponding course by id
                        const section = Section.find(item => item.id === id);
                        const sectionItems = section.items
                        // If no course is found, show a message or handle the error
                        if (!sectionItems) {
                            return <h2>No course found for ID: {id}</h2>;
                        }
                        return ( 
                            <div className="container-fluid">
                                <div className="row">
                                    {sectionItems.map((item, index) => (
                                        <div key={index} className="item col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3 p-4 text-decoration-none">
                                            <div className="card position-relative">
                                                <img src={item.imageUrl} className="card-img-top" alt="..."></img>
                                                <h5 className="p-3">{item.title}</h5>
                                                <div className="d-flex align-items-center gap-2 flex-wrap p-3 position-absolute bottom-0">
                                                    {item.links.map((link, index) => (
                                                        <Link
                                                            key={index}
                                                            to={link.path}
                                                            className="section-link text-decoration-none btn btn-light shadow-sm"
                                                        >{link.name}</Link>
                                                    ))}    
                                                </div> 
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>
                            </div>    
                        )
                    }}
            </Await></React.Suspense>
            
        </div>
    )
}

export default Sections

/**
 * js, ts + React natev 
 * dart + fluter
 */