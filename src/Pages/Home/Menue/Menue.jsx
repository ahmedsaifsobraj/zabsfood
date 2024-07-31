import React, { useState } from 'react';
import Breakfast from '../Items/Breakfast/Breakfast';
import Launches from '../Items/Launches/Launches';
import Dinners from '../Items/Dinners/Dinners';
import './Menue.css';

const Menue = () => {
    const [menue,setMenue]=useState('');
    const getBreakfast=()=>{
        setMenue("Breakfast");
    }
    const getLaunch=()=>{
        setMenue("Launch");
    }
    const getDinner=()=>{
        setMenue("Dinner");
    }
    return (
        <div className='mt-5'>
            <div className='d-flex justify-content-evenly'>
                <p onClick={getBreakfast} className={`border-bottom fw-bold ${menue === 'Breakfast' ? 'selected' : ''}`}>Breakfast</p>
                <p onClick={getLaunch} className={`border-bottom fw-bold ${menue === 'Launch' ? 'selected' : ''}`}>Launch</p>
                <p onClick={getDinner} className={`border-bottom fw-bold ${menue === 'Dinner' ? 'selected' : ''}`}>Dinner</p>
            </div>
            <div className='p-2'>
                {menue==='Breakfast'&& <Breakfast></Breakfast>}
                {menue==='Launch'&& <Launches></Launches>}
                {menue==='Dinner'&& <Dinners></Dinners>}
            </div>
        </div>
    );
}

export default Menue;
