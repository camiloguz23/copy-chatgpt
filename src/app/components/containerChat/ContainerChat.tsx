'use client';
import { BtnSend } from '@/components';
import Message from '../message/Message';
import style from './containerChat.module.scss';

function ContainerChat(): JSX.Element {
  return (
    <div className={style.containerChat}>
      <div className={style.ContainerMessage}>
        <Message message='aaaaaaa' type='ai' />
        <Message message='aaaaaaa' type='user' />
        <Message message='aaaaaaa' type='ai' />
      </div>
      <div className={style.btnSend}>
        <BtnSend />
      </div>
    </div>
  );
}

export default ContainerChat;
