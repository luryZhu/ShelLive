import React, { useEffect, useRef, useState } from "react";
import api from "../../../api";
import SearchListView from "../SearchListView";
import LoadMore from "../../../components/LoadMore";
import Loading from "../../../components/Loading";

const SearchList=(props)=>{
    
    const [searchResult,setSearchResult]=useState([])
    const [hasMore, setHasMore]=useState(false)
    const [isLoading, setIsLoading]=useState(true)
    const list=useRef()
    const searchList=useRef()

    function loadMoreHandle(){
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
            if (res.data.status===200){
                console.log("data",res.data.result.data);
                if (isLoadMore){
                    console.log("add searchlist");
                    list.current && setSearchResult([...searchList.current,...res.data.result.data])
                    // console.log(searchResult);
                } else {
                    console.log("new searchlist")
                    list.current && setSearchResult(res.data.result.data)
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