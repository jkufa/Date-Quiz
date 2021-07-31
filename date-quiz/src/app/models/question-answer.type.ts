export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  id: number;
  answer: string;
  pointMap: {point: number, dateId:number}[];
}