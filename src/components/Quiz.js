import React, { useContext } from 'react'
import Options from './Options';
import QuizContext from '../store/quiz-context';


const Quiz = () => {
    const { ques, currQues, isLoading } = useContext(QuizContext);

    return (
        <div className="card mx-auto my-2" style={{ width: '18rem' }}>
            {isLoading && <p>Loading...</p>}
            {!isLoading && <div>
                <div className="card-body">
                    <p className="card-text">{ques[currQues].question}</p>
                </div>
                <Options />
            </div>}
        </div>
    );
}

export default Quiz;
