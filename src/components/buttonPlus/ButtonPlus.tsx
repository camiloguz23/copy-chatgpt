import style from './button.module.scss';

function ButtonPlus(): JSX.Element {
  return (
    <button className={style.button}>
      <i className='material-symbols-outlined'>add</i> New Chat
    </button>
  );
}

export default ButtonPlus;
