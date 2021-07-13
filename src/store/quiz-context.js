import React, { useState, useEffect } from 'react';

const QuizContext = React.createContext({
    ques: [],
    currQues: 0,
    options: [],
    isLoading: true,
    updateQues: () => { },
    score: 0
});

export const QuizContextProvider = (props) => {
    const [ques, setQues] = useState([]);
    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currQues, setCurrQues] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        async function fetchQuizData() {

            const response = await fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`);
            const data = await response.json();

            setQues(data.results);

            const optionsArr = [];
            data.results.forEach(d => {
                const opts = d.incorrect_answers;
                const ans = d.correct_answer;

                opts.splice(
                    Math.floor(Math.random() * 3),
                    0,
                    ans
                );
                optionsArr.push(opts);
            });
            setOptions(optionsArr);
            setIsLoading(false);
        }

        fetchQuizData();
    }, []);


    const updateQues = (e) => {

        if (ques[currQues].correct_answer.trim() === e.target.innerText.trim()) {
            setScore(score + 1);
        }
        setCurrQues(currQues + 1);
    };


    return (
        <QuizContext.Provider value={{
            ques,
            options,
            currQues,
            isLoading,
            score,
            updateQues
        }}>
            {props.children}
        </QuizContext.Provider>
    );
};

export default QuizContext;