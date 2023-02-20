import style from './btnSend.module.scss';

function BtnSend(): JSX.Element {
  return (
    <form className={style.form}>
      <input type='text' name='question' id='' />
      <i className='material-symbols-outlined'>send</i>
    </form>
  );
}

export default BtnSend;
