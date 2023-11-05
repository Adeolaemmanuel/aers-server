type QuestionsDto = {
  question: string;
  input_type: string;
  options: any;
  stage_slug?: string;
  answer_id?: number;
};

type UpdateQuestionDto = QuestionsDto & {
  id?: number;
};
