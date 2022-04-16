import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsList from "./DetailsList";


const Details=()=>{
    const params=useParams()

    return (
        // <div>详情: {params.id}</div>
        <div>
            <DetailsList id={params.id}></DetailsList>
        </div>
        
    )
}

export default Details