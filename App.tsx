import React, { useState, useCallback } from 'react';
import { GameState, MBTIResult, Answer } from './types';
import { QUESTIONS, getMbtiType } from './constants';
import { getLearningTypeDescription } from './services/geminiService';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import AnalyzingScreen from './components/AnalyzingScreen';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [result, setResult] = useState<MBTIResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleStart = () => {
    setGameState(GameState.PLAYING);
  };

  const handleAnswer = useCallback((answer: Answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameState(GameState.ANALYZING);
      processResults(newAnswers);
    }
  }, [answers, currentQuestionIndex]);

  const processResults = async (finalAnswers: Answer[]) => {
    try {
      const mbtiType = getMbtiType(finalAnswers);
      const description = await getLearningTypeDescription(mbtiType.type);
      setResult({ ...mbtiType, description });
      setGameState(GameState.RESULT);
    } catch (err) {
      console.error(err);
      setError('결과를 불러오는 데 실패했어요. 잠시 후 다시 시도해주세요.');
      setGameState(GameState.RESULT); // Show error on result screen
    }
  };

  const handleRestart = () => {
    setGameState(GameState.START);
    setAnswers([]);
    setCurrentQuestionIndex(0);
    setResult(null);
    setError(null);
  };

  const renderContent = () => {
    switch (gameState) {
      case GameState.PLAYING:
        return (
          <QuestionScreen
            question={QUESTIONS[currentQuestionIndex]}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={QUESTIONS.length}
          />
        );
      case GameState.ANALYZING:
        return <AnalyzingScreen />;
      case GameState.RESULT:
        return <ResultScreen result={result} onRestart={handleRestart} error={error} />;
      case GameState.START:
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="bg-[#2d2d2d] min-h-screen text-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl h-[600px] max-h-[90vh] bg-[#1e1e1e] border-4 border-black shadow-[8px_8px_0px_#f9237e] flex flex-col">
        <main className="flex-grow flex flex-col">
          {renderContent()}
        </main>
        <footer className="flex-shrink-0 text-center py-2 text-sm text-gray-400 border-t-2 border-black bg-[#1e1e1e]">
          Copyright © 2025. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;