import React from "react";
import { useParams } from "react-router-dom";

const Resources = () => {
    const { id } = useParams()
    const data = [
        { type: "backend Projects", itemid: "backendProjects" },
        { type: "frontend Projects", itemid: "frontendProjects" },
        { type: "backend Resources", itemid: "backendResources" },
        { type: "frontend Resources", itemid: "frontendResources" },
    ]
    const item = data.find(item => item.itemid === id);
    return (
        <div className="container">
            <h1>{item.type}</h1>
        </div>
    )
}

export default Resources