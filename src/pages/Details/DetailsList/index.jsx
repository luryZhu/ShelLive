import React, { useEffect, useState } from "react";
import DetailsView from "../DetailsView";
import api from "../../../api";


const DetailsList=(props)=>{
    const [details, setDetails]=useState({})

    // 请求detail
    useEffect(()=>{
        api.getDetails({id: props.id}).then((res)=>{
            // console.log(res);
            if (res.data.status===200){
                console.log(res.data.result)
                setDetails(res.data.result)
            }
        })
    },[])

    return (
        // <div>详情: {params.id}</div>
        
        details.title?
        <DetailsView details={details} id={props.id}></DetailsView>:
        <div>loading</div>
        
        
    )
}

export default DetailsList