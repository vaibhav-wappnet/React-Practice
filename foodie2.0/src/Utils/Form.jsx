import React from 'react'
import * as FaIcons from "react-icons/fa";


const Form = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" >
            <form action="">
                <div className="input-group">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Ahmedabad</option>
                        <option value="1">Patan</option>
                        <option value="2">Mahesana</option>
                        <option value="4">Gandhinagar</option>
                        <option value="5">Baroda</option>
                        <option value="6">Valsad</option>
                        <option value="7">Surat</option>
                    </select>
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