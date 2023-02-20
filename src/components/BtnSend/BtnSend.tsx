import { type FormEvent } from 'react';
import style from './btnSend.module.scss';

function BtnSend(): JSX.Element {
  const onSubmitData = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
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
