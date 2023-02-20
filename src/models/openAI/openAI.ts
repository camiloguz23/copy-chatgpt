export interface OpenAiContent {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: ChoiceData[];
  usage: Usage;
}

export interface ChoiceData {
  text: string;
  index: number;
  logprobs: null;
  finish_reason: string;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
