import React, { useContext, Fragment } from 'react'
import QuizContext from '../store/quiz-context';

const Result = () => {
    const quizContext = useContext(QuizContext);
    if (quizContext.isLoading) {
        return <p className='text-center'>Loading..</p>
    }
    return (
        <Fragment>
            <h1 className='text-center'>Thank You!</h1>
            <p className='text-center'>{`You scored ${quizContext.score}/${quizContext.ques.length}`}</p>
        </Fragment>
    )
}

export default Result;
