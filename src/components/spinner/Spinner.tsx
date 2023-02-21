import style from './spinner.module.scss';

function Spinner(): JSX.Element {
  return (
    <div className={style.spinner}>
      <div className={`${style.miniSpinner} ${style.spinner1}`}></div>
      <div className={`${style.miniSpinner} ${style.spinner2}`}></div>
      <div className={`${style.miniSpinner} ${style.spinner3}`}></div>
      <div className={`${style.miniSpinner} ${style.spinner4}`}></div>
      <div className={`${style.miniSpinner} ${style.spinner5}`}></div>
    </div>
  );
}

export default Spinner;
