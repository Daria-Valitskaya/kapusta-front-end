import s from "./Container.module.css";

export default function Container({ children }) {
  return (
    <div className={s.container}>
      <div className={s.background}>{children}</div>
    </div>
  );
}
