import React, { useState } from 'react';

const Images = () => {
    const selectList = ['apple', 'mango', 'banana', 'strawberry']
    const [fruit, setFruit] = useState(''); // 초기값을 'banana'로 설정
    function updateValue(e){
        setFruit(e.target.value)
    }

    return (
        <div>
            <h1>선택한 과일 : {fruit}</h1>
            <select value={fruit} onChange={updateValue}>
                {
                    selectList.map(i =>(<option value={`/imgs/${i}.png`}>{i}</option>))
                }
            </select>
            <img src={fruit} width='150px'/>
        </div>
    );
};

export default Images;
