import React from "react";
import "./ServiceList.css"

const ServiceList = ({icon, title, description, }) => {
    return (
        <li className="grid-container"
        style={{ display: 'grid', alignItems: 'left',
        marginBottom: '2px'}}>
            <div style={{ marginRight: '10px'}}>
                {icon}
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
        </li>
    );
};

export default ServiceList;

