type QuestionsDto = {
  question: string;
  input_type: string;
  options: any;
  stage_id?: number;
  answer_id?: number;
};

type UpdateQuestionDto = QuestionsDto & {
  id?: number;
};
