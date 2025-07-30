import React from 'react';

const AnalyzingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#1e1e1e] text-white">
        <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-4 border-dashed border-[#ffee55] rounded-full animate-spin"></div>
            <div className="absolute inset-2 flex items-center justify-center text-5xl">
                🧠
            </div>
        </div>
      <h2 className="font-press-start text-2xl text-[#61e8ff] animate-pulse">
        분석 중...
      </h2>
      <p className="text-xl mt-4">
        나의 학습 유형을 찾고 있어요!
      </p>
    </div>
  );
};

export default AnalyzingScreen;