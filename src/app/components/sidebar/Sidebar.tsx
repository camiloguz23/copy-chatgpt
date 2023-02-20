import { ButtonPlus } from '@/components';
import style from './sidebar.module.scss';

function Sidebar(): JSX.Element {
  return (
    <div className={style.sidebar}>
      <div className={style.subContainer}>
        <ButtonPlus />
      </div>
      <div className={style.subIcon}>
        <hr className={style.line}/>
      </div>
    </div>
  );
}

export default Sidebar;
