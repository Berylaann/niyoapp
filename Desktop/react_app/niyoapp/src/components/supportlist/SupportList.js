import React from "react"; 
import ServiceList from "../servicelist/ServiceList";


const SupportList = ({ services }) => {
    
    return (
    <div>
    <h1 className="heading">Bespoke all round <span style={{color: "orange"}}>support!</span></h1>
    <ul>
        {services.map((services, index) => 
    (

        <ServiceList
        key={index}
        icon={services.icon}
        description={services.description}
        />
        ))}
    </ul> 

</div>
    );
};

export default SupportList;
