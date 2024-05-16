import React, { useEffect } from "react"
import './Sellers.css'

//import aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

//imported images

import seller4 from '../../assets/bmw.png'
import seller1 from '../../assets/fond1.png'
import seller3 from '../../assets/mclaren.png'
import seller2 from '../../assets/nissan.png'

const Sellers = ()=>{

    useEffect(()=>{
        Aos.init(
            {
                duration: 2000
            }
        )
        }, [])

    return(
        <div className="sellers section">
            <div className="secContainer container">
                <div data-aos='fade-up' className="secHeading grid">
                    <h3 className="secTitle">
                        Explore the top sellers in town
                    </h3>

                    <p>
                        Joseph Samuel Girard holds the world record for being the greatest salesman in the world.
                    </p>
                </div>

                <div className="sellersContainer grid">
                    {/* Single seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={seller1} alt="" className="img" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                FORD PERFORMANCE
                            </h4>
                            <p>from $40k</p>
                        </span>
                    </div>
                    {/* Single seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={seller2} alt="" className="img" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                            ANCHOR ROOM
                            </h4>
                            <p>from $40k</p>
                        </span>
                    </div>
                    {/* Single seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={seller3} alt="" className="img" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                McLaren
                            </h4>
                            <p>from $40k</p>
                        </span>
                    </div>
                    {/* Single seller */}
                    <div data-aos='fade-up' className="singleSeller flex">
                        <div className="imgDiv flex">
                            <img src={seller4} alt="" className="img" />
                        </div>
                        <span className="info">
                            <h4 className="name">
                                BMW
                            </h4>
                            <p>from $40k</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sellers