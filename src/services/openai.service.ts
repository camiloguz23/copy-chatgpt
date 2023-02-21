/* eslint-disable camelcase */
import { type OpenAiContent } from '@/models';

export const sendToOpenAi = async (question: string): Promise<OpenAiContent> => {
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY ?? ''}`
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: `${question}`,
      temperature: 0,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['-']
    })
  });

  const data: OpenAiContent = await response.json();
  return data;
};
// 'Q:sabes de colombia-A:
