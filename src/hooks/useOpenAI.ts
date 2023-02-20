import { type OpenAiContent } from '@/models';
import { sendToOpenAi } from '@/services';
import { useState } from 'react';

interface useOpen {
  loading: boolean;
  makeQuery: (question: string) => Promise<OpenAiContent>;
}

export const useOpenAI = (): useOpen => {
  const [loading, setLoading] = useState<boolean>(false);

  const makeQuery = async (question: string): Promise<OpenAiContent> => {
    let data: OpenAiContent;
    try {
      const response = await sendToOpenAi(question);
      data = response;
      setLoading(true);
      return data;
    } catch (error) {
      throw Error('error');
    }
  };

  return {
    loading,
    makeQuery
  };
};
