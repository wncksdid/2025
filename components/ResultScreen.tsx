import React from 'react';
import { MBTIResult } from '../types';

interface ResultScreenProps {
  result: MBTIResult | null;
  onRestart: () => void;
  error: string | null;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRestart, error }) => {
  
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-red-900 text-white">
        <div className="text-6xl mb-4">😢</div>
        <h2 className="font-press-start text-2xl text-yellow-300">오류 발생!</h2>
        <p className="text-lg mt-4">{error}</p>
        <button
          onClick={onRestart}
          className="font-press-start mt-8 text-xl bg-gray-500 text-white py-3 px-6 border-4 border-black active:translate-y-1 active:translate-x-1 active:shadow-none shadow-[4px_4px_0px_#000] hover:bg-gray-600 transition-all duration-150"
        >
          다시하기
        </button>
      </div>
    );
  }

  if (!result) {
    return <div className="flex items-center justify-center h-full">결과를 불러오는 중...</div>;
  }
  
  const formattedDescription = result.description.split('\n').map((line, index) => (
    <p key={index} className="mb-3 text-lg leading-relaxed">{line}</p>
  ));

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] text-white overflow-y-auto">
      <div className={`p-6 text-center text-black border-b-4 border-black ${result.color}`}>
        <h3 className="text-xl font-bold">나의 학습 유형은...</h3>
        <h2 className="font-press-start text-2xl md:text-3xl mt-2 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
            {result.title}
        </h2>
        <p className="font-bold text-xl mt-1">({result.type})</p>
      </div>
      
      <div className="p-6 md:p-8 flex-grow">
          <div className="bg-[#2d2d2d] p-4 border-2 border-gray-500">
             {formattedDescription}
          </div>
      </div>

      <div className="p-6 pt-0 text-center">
        <button
          onClick={onRestart}
          className="font-press-start text-xl bg-[#f9237e] text-white py-3 px-6 border-4 border-black active:translate-y-1 active:translate-x-1 active:shadow-none shadow-[4px_4px_0px_#000] hover:bg-[#ff4f9a] transition-all duration-150"
        >
          다시하기
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;