import React, { useContext } from 'react'
import QuizContext from '../store/quiz-context';

const Options = () => {
    const { updateQues, options, currQues } = useContext(QuizContext);

    return (
        <ul className="list-group">
            {options[currQues].map((opt, index) => <li key={index} className="list-group-item" onClick={updateQues}>{opt}</li>)}
        </ul>
    );
}

export default Options;
