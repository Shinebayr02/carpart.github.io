import React, { useEffect } from "react"
import './Review.css'
// imported icons
import { AiFillStar } from "react-icons/ai"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"

//import aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

//imported images
import { default as car1, default as user1 } from '../../assets/review1.jpg'
import review2 from '../../assets/review2.jpg'

const Review = ()=>{

    useEffect(()=>{
        Aos.init(
            {
                duration: 2000
            }
        )
        }, [])

    return(
        <div className="review section">
            <div className="secContainer container">
                <div data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Recent Reviews
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className="icon leftIcon"/>
                        <BsArrowRightShort className="icon RightIcon"/>
                    </div>
                </div>

                {/* review container */}
                <div className="reviewContainer grid">
                    {/* single review */}
                    <div className="singleReview grid" data-aos='fade-up'>
                        <div className="imgDiv">
                            <img src={car1} alt="Car image" />
                        </div>
                        <h5 className="reviewTitle">
                            Steeda Mustang Differential Cooler Kit 2015-2024
                        </h5>
                        <span className="desc">
                            Good cars have good engine and wheels
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user1} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Jakline Nelson
                                    </span>
                                    <p>
                                        Chief Editor
                                    </p>
                                </div>
                            </div>
                            <div className="rightDiv">
                                <AiFillStar className='icon' />
                                <blockquote>5</blockquote>
                            </div>
                        </div>
                    </div>
                    {/* single review */}
                    <div className="singleReview grid" data-aos='fade-up'>
                        <div className="imgDiv">
                            <img src={review2} alt="Car image" />
                        </div>
                        <h5 className="reviewTitle">
                            2023 Cadiallac
                        </h5>
                        <span className="desc">
                            Good cars have good engine and wheels
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user1} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Jakline Nelson
                                    </span>
                                    <p>
                                        Chief Editor
                                    </p>
                                </div>
                            </div>
                            <div className="rightDiv">
                                <AiFillStar className='icon' />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>
                    {/* single review */}
                    <div className="singleReview grid" data-aos='fade-up'>
                        <div className="imgDiv">
                            <img src={car1} alt="Car image" />
                        </div>
                        <h5 className="reviewTitle">
                            2023 Cadiallac
                        </h5>
                        <span className="desc">
                            Good cars have good engine and wheels
                        </span>

                        <div className="reviewerDiv flex">
                            <div className="leftDiv flex">
                                <div className="reviewerImage">
                                    <img src={user1} alt="Reviewer Image" />
                                </div>
                                <div className="aboutReviewer">
                                    <span className="name">
                                        Jakline Nelson
                                    </span>
                                    <p>
                                        Chief Editor
                                    </p>
                                </div>
                            </div>
                            <div className="rightDiv">
                                <AiFillStar className='icon' />
                                <blockquote>4.84</blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review