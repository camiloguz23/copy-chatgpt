'use client';
import { BtnSend } from '@/components';
import style from './containerChat.module.scss';

function ContainerChat(): JSX.Element {
  return (
    <div className={style.containerChat}>
      <div className={style.ContainerMessage}></div>
      <div className={style.btnSend}>
        <BtnSend />
      </div>
    </div>
  );
}

export default ContainerChat;
