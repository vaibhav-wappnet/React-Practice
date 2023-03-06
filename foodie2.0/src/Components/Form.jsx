import React from 'react'
import * as FaIcons from "react-icons/fa";
import CountrySelector from "../Utils/CountrySelector";


const Form = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" >
            <form action="" className="">
                <div className="input-group ">
                    <CountrySelector className="form-select" aria-label="Default select example" />
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search for chef,cuisine or a dish"
                        aria-label="Search"
                    />
                    <button className='btn btn-primary'>
                        <FaIcons.FaSearch />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form