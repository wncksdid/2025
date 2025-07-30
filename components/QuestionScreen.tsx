import React from 'react';
import { Question, AnswerOption } from '../types';

interface QuestionScreenProps {
  question: Question;
  onAnswer: (answer: { questionIndex: number; type: string }) => void;
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  return (
    <div className="w-full bg-gray-700 border-2 border-black h-8 flex items-center p-1">
      <div
        className="bg-gradient-to-r from-[#f9237e] to-[#ff7e5f] h-full transition-all duration-500 ease-in-out flex items-center justify-end"
        style={{ width: `${(current / total) * 100}%` }}
      >
        <span className="text-white font-bold text-sm mr-2">{`${current}/${total}`}</span>
      </div>
    </div>
  );
};


const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, onAnswer, currentQuestion, totalQuestions }) => {
  
  const handleOptionClick = (option: AnswerOption) => {
    onAnswer({ questionIndex: currentQuestion - 1, type: option.type });
  };

  return (
    <div className="flex flex-col h-full p-6 bg-[#3a3a3a]">
      <div className="mb-4">
        <ProgressBar current={currentQuestion} total={totalQuestions} />
      </div>

      <div className="flex-grow flex flex-col items-center justify-center text-center bg-[#1e1e1e] p-6 border-4 border-black shadow-[4px_4px_0px_#61e8ff]">
        <h2 className="text-2xl md:text-3xl font-bold leading-relaxed text-white">
          <span className="text-[#61e8ff] font-press-start text-xl">Q{currentQuestion}.</span> {question.text}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className="w-full text-lg text-left p-4 bg-gray-200 text-black border-4 border-black shadow-[4px_4px_0px_#000] active:translate-y-1 active:translate-x-1 active:shadow-none hover:bg-yellow-300 transition-all duration-150"
          >
            <span className={`font-press-start text-xl ${index === 0 ? 'text-[#f9237e]' : 'text-[#3b82f6]'}`}>
              {index === 0 ? 'A' : 'B'}.
            </span>
            <span className="ml-2 text-xl">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionScreen;