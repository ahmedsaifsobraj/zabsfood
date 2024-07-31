import React, { useEffect, useState } from 'react';
import Dinner from '../Dinner/Dinner';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Dinners = () => {
    const [dinners, setDinners]=useState([]);
    useEffect(()=>{
        fetch('launch.json')
        .then(res=>res.json())
        .then(data=>setDinners(data))
    })
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                {
                    dinners.map(dinner=><Dinner key={dinner.id} dinner={dinner}></Dinner>)
                }
            </div>
            <div className='d-flex justify-content-center my-4'>
                <Link to='checkout'><Button className='btn btn-dark'>Checkout Your Food</Button></Link>
            </div>
            
        </div>
    );
}

export default Dinners;
