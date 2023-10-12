import CardDiv from "./CardDiv"
import japan from './../images/japan.jpg'
const Card = ( {place , deletePlace}) =>{
    const { id , text , name , image} = place
    return <div  className="cardDiv">
            <article>
               <img src={image}  />
               <h3> Welcome to {name} </h3>
               <p> {text}</p>  
            </article>
            <button onClick={() => deletePlace(id)}> not interested </button>
    </div >
    
   
}

export default Card