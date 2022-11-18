import Header from "../components/Header"
import axios from "axios"
import { useState, useEffect } from "react";
import './ListBeer.css'
import { Link } from "react-router-dom";

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

function ListBeer () {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        const apiCall = async () => {
           const res = await axios.get(apiEndpoint)
           setBeers(res.data)
        }
  
        apiCall()
     }, [])

    return(
        <div>
            <Header></Header>

        
              
            {beers.map((beer) =>{
                return(
                    <Link to={`/beers/${beer._id}`}>
                    <div className = 'beerCardFlex card'>
                        <img className = 'beerImage' src= {beer.image_url} alt='Beer Image'/>
                        <section>
                        <br></br>
                        <h4>{beer.name}</h4>
                        <br></br>
                        {beer.tagline}
                        <br></br>
                        Created by: {beer.contributed_by}
                        </section>
                    </div>
                    </Link>

                    )
                })}
          
        </div>
    )
}

export default ListBeer