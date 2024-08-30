import React, { useState } from 'react';

const Option = () => {
    const [fruits, setFruits] = useState('banana')
    function changeValue(e){
        setFruits(e.target.value)
    }
    return (
        <div>
            <h1>선택한 과일 : {fruits}</h1>
            <select value={fruits} onChange={changeValue}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
            <input type="submit" onSubmit={changeValue}/>
        </div>
    );
};

export default Option;