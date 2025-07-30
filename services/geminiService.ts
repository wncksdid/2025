import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY is not defined in environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function getLearningTypeDescription(mbtiType: string): Promise<string> {
  const prompt = `
    당신은 초등학교 여학생들의 눈높이에 맞춰 설명하는 학습 성향 전문가입니다.
    MBTI 유형이 '${mbtiType}'인 학생의 학습 스타일을 분석해주세요.
    결과는 다음 형식에 맞춰 8비트 게임 캐릭터가 자신을 소개하는 것처럼, 귀엽고 친근한 말투로 작성해주세요.

    1.  **나의 학습 스타일은?**: 학습할 때 어떤 특징을 보이는지 2-3문장으로 설명해주세요. (예: 나는 친구들과 함께 떠들면서 공부할 때 가장 신나!)
    2.  **나의 슈퍼 파워! (강점)**: 어떤 것을 잘하는지 2가지 강점을 알려주세요.
    3.  **레벨업을 위한 추천 방법!**: 학습 효율을 높일 수 있는 구체적인 공부 방법 2가지를 추천해주세요.

    답변은 항상 한국어로 작성하고, 마크다운은 사용하지 마세요. 각 항목 앞에는 귀여운 이모지(💖, ✨, 🚀)를 붙여주세요.
    `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            temperature: 0.7,
            topP: 1,
            topK: 1,
        }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return "결과를 생성하는 중 에러가 발생했어요! 잠시 후 다시 시도해주세요.";
  }
}