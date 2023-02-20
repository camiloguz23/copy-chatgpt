'use client';
import { BtnSend } from '@/components';
import { type ContentMessage } from '@/models';
import Message from '../message/Message';
import style from './containerChat.module.scss';

function ContainerChat(): JSX.Element {
  const messageList: ContentMessage[] = [
    {
      message: 'user message',
      type: 'user'
    },
    {
      message: 'este es una prueba de como va funcionar el type effect',
      type: 'ai'
    },
    {
      message: 'user message',
      type: 'user'
    },
    {
      message: 'este es una prueba de como va funcionar el type effect',
      type: 'ai'
    }
  ];
  return (
    <div className={style.containerChat}>
      <div className={style.ContainerMessage}>
        {messageList.map((item, index) => (
          <Message key={index} message={item.message} type={item.type} last={(index + 1) === messageList.length}/>
        ))}
      </div>
      <div className={style.btnSend}>
        <BtnSend />
      </div>
    </div>
  );
}

export default ContainerChat;
