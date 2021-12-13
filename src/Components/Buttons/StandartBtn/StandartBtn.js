import { CommunButton } from "..";
import s from "./standartBtn.module.css";

//передаем через пропсы текст кнопки
export default function StandartBtn({ children, className }) {
  return (
    <CommunButton type="button" className={s.btn + " " + className}>
      {children}
    </CommunButton>
  );
}
