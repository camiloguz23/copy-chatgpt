import { type FormEvent } from 'react';
import style from './btnSend.module.scss';

interface Prop {
  onSend: (text: string) => void;
}

function BtnSend({ onSend }: Prop): JSX.Element {
  const onSubmitData = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { question } = Object.fromEntries(new FormData(e.target as HTMLFormElement));
    onSend(question as string);
  };

  return (
    <form className={style.form} onSubmit={onSubmitData}>
      <input type='text' name='question' id='' />
      <button type='submit' className='material-symbols-outlined'>
        send
      </button>
    </form>
  );
}

export default BtnSend;
