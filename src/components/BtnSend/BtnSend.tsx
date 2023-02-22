import { type FormEvent } from 'react';
import style from './btnSend.module.scss';

interface Prop {
  onSend: (text: string) => void;
  loading: boolean;
}

function BtnSend({ onSend, loading = false }: Prop): JSX.Element {
  const onSubmitData = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form: HTMLFormElement = e.target as HTMLFormElement;
    const { question } = Object.fromEntries(new FormData(form));
    onSend(question as string);
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={onSubmitData}>
      <input type='text' name='question' id='' disabled={loading} autoFocus/>
      <button type='submit' className='material-symbols-outlined' disabled={loading}>
        send
      </button>
    </form>
  );
}

export default BtnSend;
