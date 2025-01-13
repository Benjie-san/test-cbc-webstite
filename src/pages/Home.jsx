import React from 'react'
import '../styles/pages/home.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function Home() {
    return (
        <div id="main">
            <Navbar />

            <div className='flex' id="header-container">

                <div className="header flex">
                    <div id='header-text'>
                        <h4>City Bible Church</h4>
                    
                    </div>
                    
                    <div id="why-join">
                        <h4>Why i want to join</h4>
                    </div>
                </div>


            
                <img src={require("../assets/images/home.png")} alt="bg"/>
        

            </div>

    
            <div className='containers' id="mission-statement" >
                <div className="mission-statement">
                    <h1>Our Mission</h1>
                    <p>City Bible Church is a community of believers who are committed to the mission of Jesus Christ. We are passionate about reaching the lost and making disciples of all nations. We believe that the church is the hope of the world and that we are called to be a light in the darkness.</p>
                </div>
            </div>

            <div className='containers' id="cbc-culture" >
                <div className="cbc-culture">
                    <h1>Our Culture</h1>
                    <p>At City Bible Church, we are committed to creating a culture of love, acceptance, and forgiveness. We believe that every person is created in the image of God and deserves to be treated with dignity and respect. We are a community that is passionate about worship, prayer, and the study of God's Word. We are committed to living out our faith in practical ways by serving our community and sharing the love of Jesus with those around us.</p>
                </div>
            </div>
            
            <div className='containers' id="core-values" >
                <div className="core-values">
                    <h1>Our Core Values</h1>
                    <ul>
                        <li>Love God</li>
                        <li>Love People</li>
                        <li>Make Disciples</li>
                        <li>Be a Light in the Darkness</li>
                    </ul>
                </div>
            </div>

            <div className='containers' id="featured-ministry" >
                <div className="featured-ministry">
                    <h1>Featured Ministry</h1>
                    <div className="ministry">
                    
                        <div className="ministry-info">
                            <h2>Children's Ministry</h2>
                            <p>Our Children's Ministry is dedicated to helping kids grow in their relationship with Jesus. We provide a safe and fun environment for kids to learn about God's love and the Bible. Our goal is to partner with parents to help kids develop a strong foundation of faith that will last a lifetime.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        
        

            < Footer />


            
        </div>
    )
}

export default Home
