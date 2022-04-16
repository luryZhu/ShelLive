import React, { useEffect, useRef, useState } from "react";
import api from "../../../api";
import SearchListView from "../SearchListView";
import LoadMore from "../../../components/LoadMore";
import Loading from "../../../components/Loading";

const SearchList=(props)=>{
    
    const [searchResult,setSearchResult]=useState([])
    const [hasMore, setHasMore]=useState(false)
    const abortController=new AbortController()
    const list=useRef()

    function loadMoreHandle(){
        getList(true)
    }

    
    function getList(isLoadMore){
        api.getSearchResult({
            keywords: props.keywords
        }).then((res)=>{
            if (res.data.status===200)
                console.log(res.data.result.data);
                if (isLoadMore){
                    // console.log(list);
                    list.current && setSearchResult(searchResult.concat(res.data.result.data))
                    // console.log(searchResult);
                } else {
                    list.current && setSearchResult(res.data.result.data)
                }
                
                setHasMore(res.data.result.hasMore)
        })
    }

    useEffect(()=>{
        getList(false)
        return ()=>{
            abortController.abort()
        }

    },[props.keywords])



    return (
        <div ref={list}>
            {
                searchResult.length>0? 
                <SearchListView list={searchResult}></SearchListView>:
                <Loading></Loading>
            }
            {
                hasMore?
                <LoadMore hasMore={hasMore} onLoadMore={loadMoreHandle}></LoadMore>:
                <div>到底了</div>
            }
            
        </div>
    )
}

export default SearchList