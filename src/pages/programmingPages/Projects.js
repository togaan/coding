import React from "react";
import { useParams } from "react-router-dom";

const Projects = () => {
    const { id } = useParams()
    const data = [
        { type: "Backend Courses", itemid: "backendCourses" },
        { type: "Frontend Courses", itemid: "frontendCourses" },
        { type: "Backend Projects", itemid: "backendProjects" },
        { type: "Frontend Projects", itemid: "frontendProjects" },
        { type: "Backend Resources", itemid: "backendResources" },
        {
            type: "frontend Resources",
            itemid: "frontendResources",
            filters: ["HTML", "CSS", "JavaScript", "Tailwind", "Bootstrap", "Ract.js", "Next.js", "React Classes", "TypeScript"],
            item: {imageUrl: "", title: "HTML", level: "Beginner", publisher: "Ali", date: "2024", link: "html.com"}
        },
    ]
    const item = data.find(item => item.itemid === id);
    return (
        <div className="container">
            <h1>{item.type}</h1>
        </div>
    )
}

export default Projects