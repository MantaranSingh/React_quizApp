import React, { useContext, useEffect } from 'react'
import QuizContext from '../store/quiz-context';

const SideNav = () => {
    const { currQues, ques } = useContext(QuizContext);

    useEffect(() => {
        document.querySelectorAll(`#serial div span`).forEach(ele => ele.classList.remove('highlight'));
        document.querySelector(`#serial div:nth-child(${currQues + 1}) span`).classList.add('highlight');
    }, [currQues]);

    return (
        <div className='row align-items-center justify-content-between' id='serial' style={{ width: '14vw' }}>
            {ques.map((q, index) => <div key={index} className='col-4 text-center my-2'><span className='circle'>{index + 1}</span></div>)}
        </div>
    )
}

export default SideNav;
