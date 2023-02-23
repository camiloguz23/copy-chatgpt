/* eslint-disable camelcase */
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_API_KEY
});

const openai = new OpenAIApi(configuration);

export const sendToOpenAi = async (question: string): Promise<any> => {
  const data = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${question}`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ['-']
  });

  return data;
};
