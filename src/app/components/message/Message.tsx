import { type ContentMessage } from '@/models';
import Image from 'next/image';
import style from './message.module.scss';

function Message({ message, type }: ContentMessage): JSX.Element {
  return (
    <div className={`${style.containerMessage} ${style[type]}`}>
      <div className={style.message}>
        <Image src={`/${type}.svg`} width={30} height={30} alt='user' />
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
