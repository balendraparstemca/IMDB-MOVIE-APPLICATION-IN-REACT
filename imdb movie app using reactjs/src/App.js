import React,{ Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Movie from './movie';
import Mdetail from './moviedetail';

export default class Main extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path="/" exact strict component={Movie}></Route>
                    <Route path="/mdetail/:id" component={Mdetail}></Route>
                </div>

            </Router>
        )
    }



};