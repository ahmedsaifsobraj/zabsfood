import React, { useEffect, useState } from 'react';
import Launch from '../Launch/Launch';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Launches = () => {
    const [launches, setLaunches]=useState([]);
    useEffect(()=>{
        fetch('launch.json')
        .then(res=>res.json())
        .then(data=>setLaunches(data))
    })
    return (
        <div>
           
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                {
                    launches.map(launch=><Launch key={launch.id} launch={launch}></Launch>)
                }
            </div>
            <div className='d-flex justify-content-center my-4'>
                <Link to='checkout'><Button className='btn btn-dark'>Checkout Your Food</Button></Link>
            </div>
            
        </div>
    );
}

export default Launches;
