'use client';
import { BtnSend, Spinner } from '@/components';
import { useOpenAI } from '@/hooks';
import { type ContentMessage } from '@/models';
import { useEffect, useState } from 'react';
import Message from '../message/Message';
import style from './containerChat.module.scss';

function ContainerChat(): JSX.Element {
  const { loading, makeQuery } = useOpenAI();
  const [messageList, setMessageList] = useState<ContentMessage[]>([]);

  useEffect(() => {
    const body: HTMLElement = document.getElementById('bodyMessage')!;
    body.scroll(0, 1900);
    console.log('aaa')
  }, [messageList]);

  const getResponse = async (question: string, list: ContentMessage[]): Promise<void> => {
    const structure: string = `Q:${question}-A:`;
    const { data } = await makeQuery(structure);
    const { text } = data.choices[0];
    setMessageList([...list, { message: text, type: 'ai' }]);
  };

  return (
    <div className={style.containerChat}>
      <div className={style.ContainerMessage} id='bodyMessage'>
        {messageList.map((item, index) => (
          <Message key={index} message={item.message} type={item.type} last={index + 1 === messageList.length} />
        ))}
        {loading && <Spinner />}
      </div>
      <div className={style.btnSend}>
        <BtnSend
          onSend={(question) => {
            const updateList: ContentMessage[] = [...messageList, { message: question, type: 'user' }];
            setMessageList(updateList);
            void getResponse(question, updateList);
          }}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default ContainerChat;
