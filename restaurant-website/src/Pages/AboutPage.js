import React from 'react'
import Location from '../assets/images/location.jpg'

const AboutPage = () => {
    return (
        <>
            <div className="container my-2">
                <nav className="navbar navbar-expand-lg navbar-info bg-primary rounded-pill">
                    <div className="container d-flex flex-column">
                        <h1 className='aboutPageTitle text-light'>About My Restaurant</h1>
                    </div>
                </nav>
                <h5 className='p-4 mt-1' style={{ overflowX: 'auto' }}>
                    <b>
                        Welcome to <strong className='text-danger'>My Restaurant!</strong> Nestled in the heart of Islamabad, we are more than just a dining establishment; we are a culinary experience rooted in tradition and innovation. Established in <strong className='text-danger'>1995</strong>, My Restaurant has been serving exquisite cuisine that tantalizes taste buds and warms the soul.
                        <br /><br />
                        Our journey began with a simple yet powerful philosophy: to create dishes that tell a story, recipes that have been passed down through generations, and flavors that capture the essence of our culture. With every dish we craft, we pay homage to the rich culinary heritage that has shaped us while embracing the excitement of modern gastronomy.
                        <br /><br />
                        At My Restaurant, our chefs are culinary artists, curating menus that reflect the changing seasons and the freshest ingredients. From farm-fresh salads to delectable entrees and decadent desserts, each dish is a masterpiece carefully orchestrated to delight the senses.
                        <br /><br />
                        Whether you're joining us for a romantic evening, a family celebration, or a casual dinner with friends, we invite you to savor the experience that is My Restaurant. Come share in our passion for culinary artistry, warm hospitality, and the joy of savoring life's simple pleasures.
                    </b>
                </h5>
                <div className="locationBox">
                    <img className='locationImg' src={Location} alt="locationImg" />
                </div>
            </div>
        </>
    )
}

export default AboutPage
