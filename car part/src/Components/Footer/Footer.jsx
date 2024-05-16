import React, {useEffect} from "react"
import './Footer.css'

//import aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = ()=>{

    useEffect(()=>{
        Aos.init(
            {
                duration: 2000
            }
        )
        }, [])

    return(
        <div className="footer">
            <div className="footerContainer container">
                <div className="footerMenuDiv grid">
                    {/* single grid1 */}
                    <div className="singleGrid" data-aos='fade-up'>
                        <span className="footerTitle">
                            About
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                How it works
                            </li>
                            <li className="footerLi">
                                Careers
                            </li>
                            <li className="footerLi">
                                Affliates
                            </li>
                            <li className="footerLi">
                                Media
                            </li>
                        </ul>
                    </div>
                    {/* single grid2 */}
                    <div className="singleGrid" data-aos='fade-up'>
                        <span className="footerTitle">
                            Become a seller
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Add a vehicle
                            </li>
                            <li className="footerLi">
                                Resource center
                            </li>
                            <li className="footerLi">
                                Bonds
                            </li>
                            <li className="footerLi">
                                Release Dates
                            </li>
                        </ul>
                    </div>
                    {/* single grid3 */}
                    <div className="singleGrid" data-aos='fade-up'>
                        <span className="footerTitle">
                            Community
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Recommendations
                            </li>
                            <li className="footerLi">
                                Gift cards
                            </li>
                            <li className="footerLi">
                                Top Ups
                            </li>
                            <li className="footerLi">
                                Selling
                            </li>
                        </ul>
                    </div>
                    {/* single grid4 */}
                    <div className="singleGrid" data-aos='fade-up'>
                        <span className="footerTitle">
                            Booking Support
                        </span>
                        <ul className="footerUl grid">
                            <li className="footerLi">
                                Updates
                            </li>
                            <li className="footerLi">
                                Help center
                            </li>
                            <li className="footerLi">
                                Centers
                            </li>
                            <li className="footerLi">
                                Trust & Safety
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer lower section */}
                <div className="lowerSection grid">
                    <p>2024 All right reserved</p>
                    <blockquote>Chipmunks</blockquote>
                </div>
            </div>
        </div>
    )
}
export default Footer