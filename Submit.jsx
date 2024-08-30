import React, { useState } from 'react';

const Submit = (p) => {
    const { region } = p; // 지역 데이터 받아오기
    const [form, setForm] = useState(''); // 선택된 값을 저장할 상태

    function updateValue(e) {
        setForm(e.target.value); // 라디오 버튼 값 업데이트
    }

    function submitHandler(e) {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
        alert(form); // 선택된 값을 알림으로 표시
    }

    return (
        <div>
            <h1>라디오 버튼의 value를 출력</h1>
            <form onSubmit={submitHandler}>
                {region.map((k) => (
                    <label key={k.en}>
                        <input
                            type='radio'
                            name='region' // 같은 name으로 그룹화
                            value={k.en}
                            onChange={updateValue} // 값 변경 시 상태 업데이트
                        />
                        {k.kr} {/* 올바른 지역 이름 표시 */}
                    </label>
                ))}
                <input type='submit' value='제출' />
            </form>
        </div>
    );
};

export default Submit;
