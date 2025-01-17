import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const HomePart1 = () => {
    return (
        <div>
            <div className="hero-section position-relative">
                <img
                    className="img-fluid w-100"
                    src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg"
                    alt="Shopping"
                    style={{
                        maxHeight: '80vh',
                        objectFit: 'cover'
                    }}
                />
                <div className="position-absolute top-50 start-0 translate-middle-y text-right ps-5">
                    <h1 className="logo-img">Finding Your Perfect Shoes</h1>
                    <p className="fs-5 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                    </p>
                    <div>
                        <button className="btn-shop-now">Shop Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePart1