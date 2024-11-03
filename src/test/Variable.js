import React from "react";

function Variable() {
    let name = '홍길동'; // let은 바꿀 수 있음, const는 바꿀 수 없음
    let message = '안녕';
    return (
        <>
            <div>
                {name}님
            </div>
            <div>
                {message}
            </div>
        </>
    );
}

export default Variable;