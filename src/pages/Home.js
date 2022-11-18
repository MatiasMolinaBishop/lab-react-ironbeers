import { Link } from "react-router-dom";

function Home(){
    return(
        <div>

            <Link to={'/beers'}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8sr8R3uQ1WlUDHiz-kFIgGbMvee_uecqKHg&usqp=CAU' alt='Beers Image'/>
            <h1>All Beers</h1>
            <p>Browse through our amazing beer slecetion</p>
            </Link>

            <Link to={'/random'}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8sr8R3uQ1WlUDHiz-kFIgGbMvee_uecqKHg&usqp=CAU' alt='Beers Image'/>
            <h1>Random Beer</h1>
            <p>Try a random beer form our selection. You'll love it!</p>
            </Link>

            <Link to={'/create'}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8sr8R3uQ1WlUDHiz-kFIgGbMvee_uecqKHg&usqp=CAU' alt='Beers Image'/>
            <h1>New Beer</h1>
            <p>Add your favorite beer to our collection. Only good quality accepted</p>
            </Link>

        </div>
    )
}

export default Home