import Header from "../components/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './SingleBeer.css'

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/"

function SingleBeer () {
    const { beerId } = useParams()
    const [beer, setBeer] = useState({})

    useEffect(() =>{
        const apiCall = async () => {
           const res = await axios.get((apiEndpoint + beerId))
           setBeer(res.data)
        }
        apiCall()
    }, [])


    return(
        <div>
            <Header></Header>
           
                    <div className = 'beerCardFlex card'>
                        <img className = 'beerImage' src= {beer.image_url} alt='Beer Image'/>
                        <section>
                        <br></br>
                        <h4>{beer.name}</h4>
                        <br></br>
                        {beer.tagline}
                        <br></br>
                        {beer.first_brewed}
                        <br></br>
                        {beer.attenuation_level}
                        <br></br>
                        <br></br>
                        {beer.description}
                        </section>
                    </div>            
        </div>
    )
}

export default SingleBeer