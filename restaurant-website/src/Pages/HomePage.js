import React from 'react'
import {
    Link
} from "react-router-dom";
const HomePage = () => {
    return (
        <div className="homePage">
            <div className='homePageText'>
                <h1><b>My Restaurant</b></h1>
                <h4><b>Origin Of Delicious Food</b></h4>
                <Link to="/menu">
                    <button className='btn btn-dark'>
                        Order Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;
