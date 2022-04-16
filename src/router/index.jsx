import React from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import Home from "../pages/Main/Home";
import LifeService from "../pages/Main/LifeService";
import Shop from "../pages/Main/Shop";
import User from "../pages/Main/User";
import BottomNav from "../components/BottomNav";
import Layout from "../pages/Main/Layout";
import City from "../pages/City";
import Search from "../pages/Search";
import Details from "../pages/Details";
import Login from "../pages/Login";


const AppRouter= ()=>{
    return (
        <Router>
            <Routes>
                <Route path="/city" element={ <City /> } />
                <Route path="/search/:keywords" element={ <Search /> } />
                <Route path="/details/:id" element={ <Details /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="*"
                    element={
                        <Layout exact="true">
                            <BottomNav />
                            <Routes>
                                <Route path="*" element={ <Home /> } />
                                <Route path="/life" element={ <LifeService /> } />
                                <Route path="/shop" element={ <Shop /> } />
                                <Route path="/user" element={ <User /> } />
                            </Routes>
                        </Layout>
                    }>
                </Route>
                
            </Routes>
            
            
        </Router>
    )
}

export default AppRouter;