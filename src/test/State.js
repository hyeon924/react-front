import { useState } from 'react';

function State() {
    const [names, setName] = useState(['김철수', '홍길동', '홍길순']);
    return(
        <div>
            {names[0]}<br/>
            {names[1]}<br/>
            {names[2]}<br/>
        </div>
    );
}

export default State;