import Header from "../components/Header"
import axios from "axios"
import { useState, useEffect } from "react";
//import './ListBeer.css'

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/random"

function RandomBeer () {

    const [randomBeer, setRandomBeer] = useState({})

    useEffect(() => {
        const apiCall = async () => {
           const res = await axios.get(apiEndpoint)
           setRandomBeer(res.data)
        }
  
        apiCall()
     }, [])




    return(
        <div>
            <Header></Header>

            <div className = 'beerCardFlex card'>
                        <img className = 'beerImage' src= {randomBeer.image_url} alt='Beer Image'/>
                        <section>
                        <br></br>
                        <h4>{randomBeer.name}</h4>
                        <br></br>
                        {randomBeer.tagline}
                        <br></br>
                        Created by: {randomBeer.contributed_by}
                        </section>
                    </div>
        </div>
    )
}

export default RandomBeer


