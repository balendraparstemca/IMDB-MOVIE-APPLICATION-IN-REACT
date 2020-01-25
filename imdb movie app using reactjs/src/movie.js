import React from 'react';
import axios from "axios";
import logo from "./logo.gif";
import Mdetail from './moviedetail';
import imdb from './imdb.png';
import $ from 'jquery';

class Movie extends React.Component
{
    constructor(props)
    {
         super(props);
         this.handleLoad = this.movieapi.bind(this);
         this.state={
             data:[],
             loading:true,
             toDashboard: false
         }
         this.myRef = React.createRef();
       
    }
    

     movieapi=()=>
     {
        console.log("hii"+ this.refs.h);
              
        axios.get("http://www.omdbapi.com/?apikey=84079d5c").then((posRes)=>
        {
                  console.log(posRes);
             this.setState({
                 
                  loading:false

             })
        },(errRes)=>
        {
                console.log(errRes);
        })

        axios.get("https://www.myapifilms.com/imdb/top?token=f9a8659c-977d-4c55-a793-4ef1fbcfb86a&format=json&data=0").then((posRes)=>
        {
                  console.log(posRes.data.data.movies);
             this.setState({
                  data:posRes.data.data.movies,
                  loading:false

             })
        },(errRes)=>
        {
                console.log(errRes);
        })
     }
 
    componentDidMount()
    {
       
          
        window.addEventListener('load', this.movieapi);
       
    }



    handleClick=(letter)=> 
    {
                    
      this.props.history.push('/mdetail/'+ letter);

    }
    render()
    {

        return(<div>
            
<div id="throbber"></div>
<div id="noty-holder"></div>
<div id="wrapper">
  
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="navbar-header">
            <button ref="h" type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="http://cijulenlinea.ucr.ac.cr/dev-users/">
                <img src={logo} alt="LOGO" />
            </a>
        </div>
      
        <ul class="nav navbar-right top-nav">
        <li><img src={imdb} width="100px"></img>
            </li>  
            <li><a href="#"  className="tool" data-placement="bottom" data-toggle="tooltip" href="#" data-original-title="Stats"><i class="fa fa-bar-chart-o"></i>
                </a>
            </li>   
            <li> 
               
    
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit"><i class="fa fa-search"></i></button>
   
        </li>         
            <li class="dropdown">
                <a href="#" ref="test2" class="dropdown-toggle" data-toggle="dropdown">Admin User <b class="fa fa-angle-down"></b></a>
                <ul class="dropdown-menu">
                    <li><a href="#"><i class="fa fa-fw fa-user"></i> Edit Profile</a></li>
                    <li><a href="#"><i class="fa fa-fw fa-cog"></i> Change Password</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="fa fa-fw fa-power-off"></i> Logout</a></li>
                </ul>
            </li>
        </ul>
         <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav side-nav">
                <li>
                    <a href="title" ><i class="fa fa-fw fa-search"></i> Movie</a>
        
                </li>
                <li>
                    <a href="#"><i class="fa fa-fw fa-star"></i> Tv Episode </a>
                   
                </li>
                <li>
                    <a href="investigaciones/favoritas"><i class="fa fa-fw fa-user-plus"></i> TV </a>
                </li>
                <li>
                    <a href="sugerencias"><i class="fa fa-fw fa-paper-plane-o"></i> Top 10</a>
                </li>
                <li>
                    <a href="faq"><i class="fa fa-fw fa fa-question-circle"></i> Bottom 10</a>
                </li>
            </ul>
        </div>
      
    </nav>

    <div id="page-wrapper">
        <div class="container-fluid">
      
        { this.state.data.map((e,index)=>(
                            
                       

<div class="movie_card" id="tomb">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={e.urlPoster}/>
        <h1  onClick={() => this.handleClick(e.idIMDB)} >{e.title}</h1>
      <h4>{e.year}, Roar Uthaug</h4>
      <span class="minutes">125 min</span>
      <p class="type">Action, Fantasy</p>
    </div>
    <div class="movie_desc">
      <p class="text">
     </p>
    </div>
    
  </div>
  <div class="blur_back tomb_back" style={{ backgroundImage: `url(${e.urlPoster})`}}></div>
</div>
 ))}


            
        </div>
      
    </div>
   
</div>
        </div>)
    }
}

export default Movie;