import React, { useEffect, useState } from 'react';
import Bitems from '../BItems/Bitems';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Breakfast = () => {
    const [breakfastItems, setBreakfastItems] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfastItems(data))
    }, [])
    return (
        <div className='my-5'>

            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                {
                    breakfastItems.map(bItems => <Bitems key={bItems.id} bItems={bItems}></Bitems>)
                }
            </div>
            <div className='d-flex justify-content-center my-4'>
                <Link to='checkout'><Button className='btn btn-dark'>Checkout Your Food</Button></Link>
            </div>

        </div>
    );
}

export default Breakfast;
