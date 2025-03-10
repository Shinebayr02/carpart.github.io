import React, { useEffect } from "react"
import './Search.css'

//Imported icons
import { AiOutlineSearch } from 'react-icons/ai'

//import aos for animation and scroll reveal
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = ()=>{

    useEffect(()=>{
        Aos.init(
            {
                duration: 2000
            }
        )
        }, [])
        
    return(
        <div className="search">
            <div className="secContainer container">
                <h3 data-aos='fade-up' className="title">
                    Which parts are you looking
                </h3>
            </div>

            <div className="searchDiv grid">
                <input data-aos='fade-up' type="text" placeholder='Type' />
                <input data-aos='fade-up' type="number" placeholder='Year' />
                <input data-aos='fade-up' type="text" placeholder='Model' />
                <input data-aos='fade-up' type="number" placeholder='Price' />
                <button data-aos='fade-up' className='btn primaryBtn flex'>
                    <AiOutlineSearch className='icon'/>
                    <span>
                        Search
                    </span>
                </button>
            </div>
        </div>
    )
}
export default Search