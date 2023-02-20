'use client';
import { BtnSend } from '@/components';
import { useOpenAI } from '@/hooks';
import { type ContentMessage } from '@/models';
import { useState } from 'react';
import Message from '../message/Message';
import style from './containerChat.module.scss';

function ContainerChat(): JSX.Element {
  const { loading, makeQuery } = useOpenAI();
  const [messageApi, setMessageApi] = useState('');
  const [messageList, setMessageList] = useState<ContentMessage[]>([]);

  const getResponse = async (question: string, list: ContentMessage[]): Promise<void> => {
    const structure: string = `${messageApi}Q:${question}-A:`;
    const data = await makeQuery(structure);
    const { text } = data.choices[0];
    const structureApi = `Q:${question}-A:${text}-`;
    setMessageApi(`${messageApi}${structureApi}`);
    setMessageList([...list, { message: text, type: 'ai' }]);
  };
  return (
    <div className={style.containerChat}>
      <div className={style.ContainerMessage}>
        {messageList.map((item, index) => (
          <Message key={index} message={item.message} type={item.type} last={index + 1 === messageList.length} />
        ))}
      </div>
      <div className={style.btnSend}>
        <BtnSend
          onSend={(question) => {
            const updateList: ContentMessage[] = [...messageList, { message: question, type: 'user' }];
            setMessageList(updateList);
            void getResponse(question, updateList);
          }}
        />
      </div>
    </div>
  );
}

export default ContainerChat;
