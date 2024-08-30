import React, { useState } from 'react';

const TextArea = () => {
    const [title, setTitle] = useState('안녕하세요')
    function changeText(e){
        e.preventDefault()
        console.log(title)
    }
    return (
        <div>
            <h1>내용 : {title}<br/></h1>
            <form onSubmit={changeText}>
                <textarea value={title} onChange={(e)=>{setTitle(e.target.value)}}></textarea>
                <input type="submit" value='제출'/>
            </form>
        </div>
    );
};

export default TextArea;