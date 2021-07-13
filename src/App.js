import React, { useContext, useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import QuizContext from './store/quiz-context';
import Result from './pages/Result';
import SideNav from './components/SideNav';
import Timer from './components/Timer';

const App = () => {
  const { currQues, ques, isLoading } = useContext(QuizContext);
  const [timeLeft, setTimeLeft] = useState(true);

  const timeHandler = () => {
    setTimeLeft(false);
  };

  let content;

  if (currQues < ques.length && timeLeft) {
    content = <div className='d-flex justify-content-between flex-md-row flex-column'>
      {!isLoading && <SideNav />}
      <Quiz />
      <Timer initialSeconds={10} isOver={timeHandler} />
    </div>;
  } else {
    content = <Result />;
  }

  return (
    <div className='container mt-3'>
      {content}
    </div>
  );
}

export default App;
