import React from 'react';
import bannerbackground from "../../../images/bannerbackground.png";
import { Button } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Banner = () => {
    return (
        <div className="bg-image mb-3"
            style={{
                backgroundImage: `url(${bannerbackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '400px'  // Adjust height as needed
            }}>
            <div className='py-5'>
                <div className='mb-5'>
                    <h1 className='fs-1 text-center'>Find Your Next Delicious Meal</h1>
                </div>
                <div className="input-group w-50 bg-light border border-0 rounded-pill mx-auto">
                    <input type="search" className="form-control rounded border border-0 rounded-pill" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" className="btn btn-dark rounded-pill" data-mdb-ripple-init>search</button>
                </div>
            </div>

        </div>
    );
}

export default Banner;
