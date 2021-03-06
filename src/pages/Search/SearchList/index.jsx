import React, { useEffect, useRef, useState } from "react";
import api from "../../../api";
import SearchListView from "../SearchListView";
import LoadMore from "../../../components/LoadMore";
import BackToTop from "../../../components/BackToTop";
import { useMount } from "../../../hooks/useMount";

const SearchList=(props)=>{
    
    const [searchResult,setSearchResult]=useState([])
    const [hasMore, setHasMore]=useState(true)
    const [isLoading, setIsLoading]=useState(true)
    const list=useRef([])
    const searchList=useRef()
    const isMount=useMount()

    function loadMoreHandle(){
        if (!isMount()) return
        console.log(isLoading)
        if (isLoading) {
            setIsLoading(false)
            getList(true)
        }
    }
 
    function getList(isLoadMore){
        api.getSearchResult({
            keywords: props.keywords
        }).then((res)=>{
            if (!isMount()) return
            if (res.data.status===200){
                console.log("data",res.data.result.data);
                if (isLoadMore){
                    console.log("add searchlist");
                    setSearchResult([...searchList.current,...res.data.result.data])
                    // console.log(searchResult);
                } else {
                    console.log("new searchlist")
                    setSearchResult(res.data.result.data)
                }
                
                setHasMore(res.data.result.hasMore)
                setIsLoading(true)
            }
        }, (reason)=>{
            console.log(reason)
            setIsLoading(true)
        })
    }

    useEffect(()=>{
        isLoading && getList(false)
    },[props.keywords])

    useEffect(()=>{
        console.log("new list",searchResult)
        searchList.current=searchResult
    },[searchResult])

    return (
        <div ref={list}>
            <BackToTop></BackToTop>
            {
                searchResult.length>0? 
                <SearchListView list={searchResult}></SearchListView>: null
                // <Loading></Loading>
            }
            {
                hasMore?
                <LoadMore hasMore={hasMore} onLoadMore={loadMoreHandle}></LoadMore>:
                <div>?????????</div>
            }
            
        </div>
    )
}

export default SearchList