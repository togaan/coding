import React from "react";
import { useParams, useLoaderData, defer, Await, Link, useSearchParams } from "react-router-dom";
import { getCourses } from "../../api";
import { useMode } from "../../ModeContext";

export function loader() {
    return defer({ courses: getCourses() })
  }

  const Courses = () => {
    const coursesPromise = useLoaderData();
    const { id } = useParams(); // Get the id from URL params
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    const handleFilterChange = (value) => {
        if (value === 'All') {
            setSearchParams({});
        } else {
            setSearchParams({ type: value });
        }
    };

    const { mode } = useMode();

    return (
        <div className={`courses w-100 p-3 ${!mode && 'dark-mode'}  `}>
            <React.Suspense fallback={
                <>
                    <h2 className="loading text-center pt-5">Loading courses...</h2>
                    <div className="load pt-5 d-flex  justify-content-center">
                        <div className="load-one rounded-circle"></div>
                        <div className="load-two rounded-circle"></div>
                        <div className="load-three rounded-circle"></div>
                    </div>
                </>
            }>
                <Await resolve={coursesPromise.courses}>
                    {Courses => { 
                        // Find the corresponding course by id
                        const courses = Courses.find(item => item.id === id);
                        
                        // If no course is found, show a message or handle the error
                        if (!courses) {
                            return <h2>No course found for ID: {id}</h2>;
                        }
                        
                        const displayedCourses = typeFilter
                            ? courses.items.filter(course => course.type === typeFilter)
                            : courses.items;

                        return (
                            <div className="container-fluid">
                                <h1 className="course-name pb-3 ">{courses.name}</h1>
                                <div className="filters d-flex align-items-center gap-2 flex-wrap pb-3 sticky-top">
                                    {courses.filters.map((item, index) => (
                                        <button
                                            onClick={() => handleFilterChange(item)}
                                            key={index}
                                            className={`filter btn shadow-sm bg-white text-black ${(!typeFilter && item === 'All') || typeFilter === item ? 'isActive' : ''}`}
                                        >{item}</button>
                                    ))}
                                </div>
                                <div className="row justify-content-center">
                                    {displayedCourses.map((item, index) => (
                                        <Link
                                            to={item.link}
                                            key={index} 
                                            className="item col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3 p-4 text-decoration-none">
                                            <div className="card  position-relative" >
                                                <img src={item.imageUrl} className="card-img-top" alt="..."></img>
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h5 className="card-text fs-6">{item.publisher}</h5>
                                                        <img src={item.publisherImage} className="publisher-image img-fluid rounded-circle " alt="..."></img>
                                                    </div>
                                                    <p className="fs-6">Published in {item.year}</p>
                                                    <p className="fs-6">{item.level}</p>
                                                </div>
                                                <div 
                                                    className={`lable position-absolute bottom-0 end-0 ps-5 pe-4  fw-bold
                                                             ${item.isFree ? 'free text-black' : 'pro text-white'}   
                                                        `}>
                                                    {item.isFree ? 'Free' : 'PRO'}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )
                    }}
                </Await> 
            </React.Suspense>
        </div>
    )
}
export default Courses

/**<Link href="#" class="btn btn-primary">Watch on Youtube</Link> 
 * onClick={() => handleFilterChange(item)}
 * filter btn shadow-sm text-black bg-white


Ethical Hacking in 15 Hours - 2023 Edition - Learn to Hack! (Part 2)
Heath Adams
https://pbs.twimg.com/profile_images/1492688110655836165/6c5BPMhH_400x400.jpg


*/