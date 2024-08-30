import React, { useState } from 'react';

const ItemComponent = (p) => {
    const [total, setTotal] = useState(0);
    const { list } = p
    function checkSum(e) {
        if(e.checked){
            setTotal(total)
        }
           
    }

    return (
        <div>
        {
           list.map((i)=>{
            <label key = {i.name}>
                <input type = "checkbox"  price = {i.price} onChange={ e=> checkSum(e.target)}/>
            </label>
           })
        }           
            합계 : {total}원
        </div>
    );
};

export default ItemComponent;
