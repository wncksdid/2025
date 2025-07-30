import { Question, Answer } from './types';

export const QUESTIONS: Question[] = [
  // E (Extraversion) vs I (Introversion)
  {
    text: "새로운 친구를 사귈 때 나는...",
    options: [
      { text: "먼저 다가가서 말을 건다!", type: 'E' },
      { text: "누가 말을 걸어주길 기다린다.", type: 'I' },
    ],
  },
  {
    text: "주말에 에너지를 충전하는 방법은?",
    options: [
      { text: "친구들과 만나 신나게 논다!", type: 'E' },
      { text: "집에서 조용히 혼자만의 시간을 보낸다.", type: 'I' },
    ],
  },
   {
    text: "수업 시간에 발표할 기회가 생겼다!",
    options: [
      { text: "신난다! 손을 번쩍 든다.", type: 'E' },
      { text: "조용히 다른 친구가 하길 바란다.", type: 'I' },
    ],
  },
  // S (Sensing) vs N (Intuition)
  {
    text: "새로운 게임을 배울 때 나는...",
    options: [
      { text: "설명서를 꼼꼼히 읽고 차근차근 따라한다.", type: 'S' },
      { text: "일단 눌러보면서 '감'으로 익힌다.", type: 'N' },
    ],
  },
  {
    text: "동화책을 읽을 때 더 재미있는 것은?",
    options: [
      { text: "현실에서 일어날 법한 이야기", type: 'S' },
      { text: "마법과 상상 속 동물들이 나오는 이야기", type: 'N' },
    ],
  },
  {
    text: "친구가 '나무'를 그려달라고 한다면?",
    options: [
      { text: "나뭇잎, 나이테 등 자세하게 그린다.", type: 'S' },
      { text: "사람 얼굴 모양의 신기한 나무를 그린다.", type: 'N' },
    ],
  },
  // T (Thinking) vs F (Feeling)
  {
    text: "친구가 게임 규칙을 어겼을 때 나는...",
    options: [
      { text: '"규칙은 규칙이야!" 라고 말한다.', type: 'T' },
      { text: "친구가 속상할까 봐 그냥 넘어가 준다.", type: 'F' },
    ],
  },
  {
    text: "친구가 슬퍼 보일 때 나는...",
    options: [
      { text: "왜 슬픈지 이유를 물어보고 해결책을 찾아준다.", type: 'T' },
      { text: "먼저 꼭 안아주며 위로부터 해준다.", type: 'F' },
    ],
  },
  {
    text: "숙제를 잘해서 칭찬받고 싶을 때!",
    options: [
      { text: "결과가 완벽하다는 칭찬이 좋다.", type: 'T' },
      { text: "노력하는 과정이 멋지다는 칭찬이 좋다.", type: 'F' },
    ],
  },
  // J (Judging) vs P (Perceiving)
  {
    text: "소풍 가기 전날 밤, 나는...",
    options: [
      { text: "내일 입을 옷, 간식을 미리 다 챙겨놓는다.", type: 'J' },
      { text: "아침에 일어나서 마음 가는 대로 준비한다.", type: 'P' },
    ],
  },
  {
    text: "내 방 책상은 보통...",
    options: [
      { text: "항상 깔끔하게 정리정돈 되어있다.", type: 'J' },
      { text: "조금 어지럽지만 어디에 뭐가 있는지 다 안다.", type: 'P' },
    ],
  },
  {
    text: "놀이공원에 가면?",
    options: [
      { text: "지도를 보고 탈것 순서를 미리 정한다.", type: 'J' },
      { text: "발길 닿는 대로 재미있어 보이는 것부터 탄다.", type: 'P' },
    ],
  },
];

const MBTI_RESULTS_INFO = {
    'ISTJ': { title: '성실한 소금빵 마법사', color: 'bg-sky-400' },
    'ISFJ': { title: '따뜻한 마시멜로 수호자', color: 'bg-sky-300' },
    'INFJ': { title: '신비로운 마카롱 예언가', color: 'bg-emerald-400' },
    'INTJ': { title: '똑똑한 별사탕 전략가', color: 'bg-emerald-500' },
    'ISTP': { title: '만능 재주꾼 로봇 탐험가', color: 'bg-amber-400' },
    'ISFP': { title: '호기심 많은 젤리 예술가', color: 'bg-amber-300' },
    'INFP': { title: '꿈꾸는 솜사탕 중재자', color: 'bg-violet-400' },
    'INTP': { title: '상상력 풍부한 슬라임 발명가', color: 'bg-violet-500' },
    'ESTP': { title: '용감한 불꽃사탕 모험가', color: 'bg-rose-400' },
    'ESFP': { title: '자유로운 반짝이 인형 스타', color: 'bg-rose-300' },
    'ENFP': { title: '활발한 무지개 스파클 활동가', color: 'bg-orange-400' },
    'ENTP': { title: '재치있는 아이디어뱅크 팝콘', color: 'bg-orange-500' },
    'ESTJ': { title: '듬직한 초코블록 행정관', color: 'bg-blue-500' },
    'ESFJ': { title: '다정한 컵케이크 외교관', color: 'bg-blue-400' },
    'ENFJ': { title: '정의로운 캔디 리더', color: 'bg-pink-400' },
    'ENTJ': { title: '대담한 비행기젤리 사령관', color: 'bg-pink-500' },
};


export const getMbtiType = (answers: Answer[]): { type: string; title: string; color: string } => {
  const counts = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  answers.forEach(answer => {
    counts[answer.type]++;
  });

  let type = '';
  type += counts.E > counts.I ? 'E' : 'I';
  type += counts.S > counts.N ? 'S' : 'N';
  type += counts.T > counts.F ? 'T' : 'F';
  type += counts.J > counts.P ? 'P' : 'P';
  
  const resultInfo = MBTI_RESULTS_INFO[type as keyof typeof MBTI_RESULTS_INFO] || { title: '알 수 없는 유형', color: 'bg-gray-400' };

  return { type, ...resultInfo };
};