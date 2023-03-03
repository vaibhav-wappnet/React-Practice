import React from 'react'
import FoodBg from "../Assets/food-bg.jpg";
import Form from "./Form";

const Carousel = () => {

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={FoodBg} className="d-block w-100 object-fit-cover" height={300} alt="yum yum" />
                        <div className="carousel-caption position-absolute" style={{top:"35%", padding:"10px"}}>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Carousel