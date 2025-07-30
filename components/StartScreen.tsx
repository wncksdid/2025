import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const PixelHeart: React.FC = () => (
    <div className="flex">
        <div className="w-4 h-4 bg-red-500 transform rotate-45 -mr-2 mb-2"></div>
        <div className="w-4 h-4 bg-red-500 transform rotate-45"></div>
    </div>
);

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#1e1e1e] text-white">
      <div className="absolute top-8 right-8 flex space-x-2">
         <div className="w-6 h-6 bg-[#f9237e] animate-bounce delay-75"></div>
         <div className="w-6 h-6 bg-[#61e8ff] animate-bounce"></div>
         <div className="w-6 h-6 bg-[#ffee55] animate-bounce delay-150"></div>
      </div>
      <h1 className="font-press-start text-3xl md:text-4xl text-[#ffee55] drop-shadow-[4px_4px_0px_#000]">
        나의 학습 스타일은?
      </h1>
      <h2 className="text-xl md:text-2xl mt-4 text-[#61e8ff] drop-shadow-[2px_2px_0px_#000]">
        8비트 진단 테스트
      </h2>
      
      <div className="text-7xl my-10 animate-pulse">🕹️</div>

      <p className="text-lg mb-8 max-w-md mx-auto">
        간단한 질문에 답하고 나에게 꼭 맞는 공부 방법을 찾아보자!
        준비됐으면 아래 버튼을 눌러줘!
      </p>

      <button
        onClick={onStart}
        className="font-press-start text-2xl bg-[#f9237e] text-white py-4 px-8 border-4 border-black active:translate-y-1 active:translate-x-1 active:shadow-none shadow-[4px_4px_0px_#000] hover:bg-[#ff4f9a] transition-all duration-150"
      >
        시작!
      </button>

      <div className="absolute bottom-8 left-8 text-4xl transform -scale-x-100">
        👾
      </div>
    </div>
  );
};

export default StartScreen;