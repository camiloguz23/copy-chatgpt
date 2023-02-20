import style from './container.module.scss';

interface Prop {
  children: React.ReactNode;
}
function Container({ children }: Prop): JSX.Element {
  return <div className={style.container}>{children}</div>;
}

export default Container;
