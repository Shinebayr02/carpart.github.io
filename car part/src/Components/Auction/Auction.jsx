import React, { useEffect } from "react"
import './Auction.css'

//import aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

//imported images

import part3 from '../../assets/555-4467-v1-1__44322.jpg'
import part5 from '../../assets/M198653810__71595.jpg'
import part2 from '../../assets/Wing-Risers-GT500-4-Rear-1200x800__64918.jpg'
import part4 from '../../assets/cover.jpg'
import car1 from '../../assets/kw_35230079_001_1600_9__62886.jpg'
import part6 from '../../assets/yndan.jpg'

const Auction = ()=>{

    useEffect(()=>{
        Aos.init(
            {
                duration: 2000
            }
        )
        }, [])

    return(
        <div className="auction section">
            <div className="secContainer container">
                <div data-aos='fade-up' className="secHeading flex">
                    <h3 className="secTitle">
                        Active Auctions
                    </h3>

                    <div className="navBtns flex">
                        <BsArrowLeftShort className='icon leftIcon' />
                        <BsArrowRightShort className='icon rightIcon' />
                    </div>
                </div>

                <div data-aos='fade-up' className="carContainer grid">
                   {/* Single car div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={car1} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            KW Suspension V3 S550/S650 Mustang Coilover Kit
                        </h5>
                        <span className="miles">
                            2018-2024
                        </span>
                        <span className="AWD">
                            KW Suspension
                        </span>

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $3,324.00
                            </span>
                            <span className="buyBtn">
                                Buy now
                            </span>
                        </div>
                    </div>
                    {/* Single car div */}
                    <div data-aos='fade-up' className="singleCar grid singleCarActive">
                        <div className="imgDiv">
                            <img src={part2} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Fathouse Performance Mustang GT500 CFTP Wing Risers
                        </h5>
                        <span className="miles">
                            2020-2022
                        </span>
                        <span className="AWD">
                            Fathouse Performance
                        </span>

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $799.99
                            </span>
                            <span className="buyBtn">
                                Buy now
                            </span>
                        </div>
                    </div>
                    {/* Single car div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={part3} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Steeda Explorer Pro Differential Support System
                        </h5>
                        <span className="miles">
                            2020-2024
                        </span>
                        <span className="AWD">
                            Steeda Autosports
                        </span>

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $649.95
                            </span>
                            <span className="buyBtn">
                                Buy now
                            </span>
                        </div>
                    </div>
                    {/* Single car div */}
                    <div data-aos='fade-up' className="singleCar grid singleCarActive">
                        <div className="imgDiv">
                            <img src={part4} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Ford Performance Mustang Coupe Outdoor Car Cover - Mid Wing
                        </h5>
                        <span className="miles">
                            2024+
                        </span>
                        <span className="AWD">
                            Ford Performance
                        </span>

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $564.95
                            </span>
                            <span className="buyBtn">
                                Buy now
                            </span>
                        </div>
                    </div>
                    {/* Single car div */}
                    <div data-aos='fade-up' className="singleCar grid">
                        <div className="imgDiv">
                            <img src={part5} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Injen Focus RS SP-Series Cold Air Intake Kit - Special Edition Blue
                        </h5>
                        <span className="miles">
                            2016-2018
                        </span>
                        <span className="AWD">
                            Injen
                        </span>

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $436.95
                            </span>
                            <span className="buyBtn">
                                Buy now
                            </span>
                        </div>
                    </div>
                    {/* Single car div */}
                    <div data-aos='fade-up' className="singleCar grid singleCarActive">
                        <div className="imgDiv">
                            <img src={part6} alt="Car Image" />
                        </div>
                        <h5 className="carTitle">
                            Injen Focus RS Performance Exhaust System - Black Chrome Tips
                        </h5>
                        <span className="miles">
                            2016-2018
                        </span>
                        <span className="AWD">
                            Injen
                        </span>

                        <div className="price_buyBtn flex">
                            <span className="price">
                                $1,415.95
                            </span>
                            <span className="buyBtn">
                                Buy now
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Auction