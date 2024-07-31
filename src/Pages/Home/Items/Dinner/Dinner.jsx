import React from 'react';
import './Dinner.css';

const Dinner = ({dinner}) => {
    const {img,name,description,price}=dinner;
    return (
        <div className="col p-2">
            <div className="card h-150 p-3 border border-0 rounded-lg">
                <img style={{height:'150px'}} src={img} className="card-img-top rounded-circle w-50 mx-auto" alt="..."/>
                    <div className="card-body">
                        <h6 className="card-title text-center fw-bold">{name}</h6>
                        <p className="card-text text-center">{description}</p>
                        <p className='text-center fs-5 fw-bold'>৳{price}</p>
                    </div>
            </div>
        </div>
    );
}

export default Dinner;
