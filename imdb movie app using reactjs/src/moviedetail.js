import React,{ Component } from "react";
import axios from "axios";
import "./App.css";
import "./detail.css";
import { useParams} from "react-router-dom";
export default class Mdetail extends React.Component
{
  constructor({ match }){
    super();
    this.state = {
        status : {},
        data:[],
        id:match.params.id,
        loading:true
    };
  }

  componentDidMount()
  {     
      axios.get("https://www.myapifilms.com/imdb/idIMDB?idIMDB="+ this.state.id +"&token=f9a8659c-977d-4c55-a793-4ef1fbcfb86a&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&trailers=1&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=1&biography=0&bornDied=0&actorActress=1&similarMovies=0&goofs=0&keyword=0&quotes=1&fullSize=0&companyCredits=0&filmingLocations=0&directors=1&writers=1").then((posRes)=>
      {
                console.log(posRes.data.data.movies);
           this.setState({
               
                loading:false,
                data:posRes.data.data.movies

           })
      },(errRes)=>
      {
              console.log(errRes);
      })

}


    render(){
      
        return(
          <div className="App">

{ this.state.data.map((e,index)=>(

             <div class="movie-card">
  
  <div class="container">
    
    <a href="#"><img  src={e.urlPoster} alt="cover" class="cover" /></a>
        
    <div class="hero" style={{ backgroundImage: `url(${e.urlPoster})`}} >
            
      <div class="details">
      <div class="back">
     <div class="title2">{e.title}</div> 
    <div class="title1">{e.type} | <span>{e.year}</span> | <span>{e.rating}</span></div>   
        
        <fieldset class="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" checked /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
  </fieldset>
        </div>
<span class="likes">{ e.runtime }</span>
        
      </div> 
      
    </div> 
    
    <div class="description">
      
      <div class="column1">
<p class="tag">| Type:{ e.genres[0]}|</p>   <p class="tag">Directed_By:{ e.directors[0].name}</p> 

<p class="tag">| Country:{ e.countries[0]} |</p> 
<p class="tag">| Languages:{ e.languages[0]} |</p> 


      
      </div> 
      
      <div class="column2">
        
        <p>{e.plot}.. <a href="#">read more</a></p>
        
        <div class="avatars">
          <a href="#" data-tooltip="Person 1" data-placement="top">
            <img src={e.actors[0].urlPhoto} alt="avatar1" />
          </a>
          
          <a href="#" data-tooltip="Person 2" data-placement="top">
            <img src={e.actors[1].urlPhoto} alt="avatar2" />
          </a>
          
          
         
          
        </div> 
        
        
        
      </div> 
    </div>
    
   
  </div> 
</div>  ))}
          </div>
        )
    };

};