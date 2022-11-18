import Header from "../components/Header"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/new"

function CreateBeer () {

const [name, setName] = useState("")
const [tagline, setTagline] = useState("")
const [description, setDescription] = useState("")
const [first_brewed, setFirst_brewed] = useState("")
const [brewers_tips, setBrewers_tips] = useState("")
const [attenuation_level, setaAttenuation_level] = useState(0)
const [contributed_by, setContributed_by] = useState("")

const navigate = useNavigate()

const nameHandler = (event) => {
    setName(event.target.value)
 }
 const taglineHandler = (event) => {
    setTagline(event.target.value)
 }
 const descriptionHandler = (event) => {
    setDescription(event.target.value)
 }
 const first_brewedHandler = (event) => {
    setFirst_brewed(event.target.value)
 }
 const brewers_tipsHandler = (event) => {
    setBrewers_tips(event.target.value)
 }
 const contributed_byHandler = (event) => {
    setContributed_by(event.target.value)
 }
 const attenuation_levelHandler = (event) => {
    setaAttenuation_level(event.target.value)
 }

 const submitHandler = (event) => {
    event.preventDefault()

    const newBeer =  {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: first_brewed,
        brewers_tips: brewers_tips,
        attenuation_level: attenuation_level,
        contributed_by: contributed_by,
     }

     const postApi = async () => {
        try {
           const res = await axios.post(apiEndpoint, newBeer)
           console.log(res)
           navigate("/")
        } catch (error) {
           console.log(error)
        }
     }

     postApi()


    setName("")
    setTagline("")
    setDescription("")
    setFirst_brewed("")
    setBrewers_tips("")
    setaAttenuation_level(0)
    setContributed_by("")
  }


    return(
        <div>

        <Header></Header>

        <h1>Add Your Favorite Beer Brah</h1>
         <form onSubmit={submitHandler}>
            <label>Name</label>
            <input type="text" name="name" value={name} onChange={nameHandler} />
            <br></br>
            <label>TagLine</label>
            <input type="text" name="tagline" value={tagline} onChange={taglineHandler} />
            <br></br>
            <label>Description</label>
            <input type="text" name="description" value={description} onChange={descriptionHandler} />
            <br></br>
            <label>First Brewed</label>
            <input type="text" name="first_brewed" value={first_brewed} onChange={first_brewedHandler} />
            <br></br>
            <label>Brewers Tips</label>
            <input type="text" name="brewers_tips" value={brewers_tips} onChange={brewers_tipsHandler} />
            <br></br>

            <label>Attenuation Level </label>
            <input type="number" name="attenuation_level " value={attenuation_level}   onChange={attenuation_levelHandler} />
            <br></br>

            <label>Contributed By</label>
            <input type="text" name="contributed_by" value={contributed_by} onChange={contributed_byHandler} />
            <br></br>

            <button type="submit">Create</button>
         </form>
        </div>
    )
}

export default CreateBeer