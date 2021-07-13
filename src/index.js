import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QuizContextProvider } from './store/quiz-context';

ReactDOM.render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
