import React, { useState } from 'react';

const ClickBox = (p) => {
    const [click, updateClick] = useState(0)
    function updateNum(){
        updateClick(click+1)
        p.onCount()
    }
    return (
        <div className='big_container'>
            <div className="container">
                <h1 className='h1_click'>{click}</h1>
                <button className='button_click' onClick={updateNum}>클릭</button>
            </div>
        </div>
    );
};

export default ClickBox;