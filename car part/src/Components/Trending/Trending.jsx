import React, { useEffect } from "react"
import './Trending.css'

//import aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

//Imported Icons

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

//Imported images
import image1 from '../../assets/part1.jpg'
import image2 from '../../assets/part2.jpg'
import image3 from '../../assets/part3.jpg'

const Trending = ()=>{

    useEffect(()=>{
        Aos.init(
            {
                duration: 2000
            }
        )
        }, [])

    return(
        <div className="trending section">
            <div className="secContainer container">
                <div data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Trending near you
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div className="carContainer grid">
                   {/* Single car div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={image1} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Steeda Mustang Upgraded Front Knuckle and Hub Kit
                        </h5>
                        <span className="miles">
                            2015-2023
                        </span>
                        <span className="AWD">
                            Steeda Autosports
                        </span>

                        <div className="price_seller flex">
                            <span className="price">
                                $799.95
                            </span>
                            <span className="seller">
                                Best seller
                            </span>
                        </div>
                    </div>
                    {/* Single car div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={image2} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Anchor Room Mustang Coolant Tank Cover
                        </h5>
                        <span className="miles">
                            2024+
                        </span>
                        <span className="AWD">
                            Anchor Room
                        </span>

                        <div className="price_seller flex">
                            <span className="price">
                                $82.99
                            </span>
                            <span className="seller">
                                Best seller
                            </span>
                        </div>
                    </div>
                    {/* Single car div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={image3} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Ford Performance Mustang 2.3L Track Lowering Springs - Coupe (2024+)
                        </h5>
                        <span className="miles">
                            2024+
                        </span>
                        <span className="AWD">
                            Ford Performance
                        </span>

                        <div className="price_seller flex">
                            <span className="price">
                                $364.95
                            </span>
                            <span className="seller">
                                Best seller
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Trending