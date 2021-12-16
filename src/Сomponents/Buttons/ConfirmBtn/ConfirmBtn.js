import { CommunButton } from "..";
import s from "./confirmBtn.module.css";

export default function ConfirmBtn() {
  //нужно добавить условие, если в инпуте ввода баланса - пусто, либо 0,
  //либо пришел ответ с червера о наличии баланса - тогда disabled={true}
  // в другом случае disabled={false}, или вообще убираем пропс(по дефолту и так false)
  return (
    <CommunButton type="submit" className={s.btn} disabled={false}>
      Подтвердить
    </CommunButton>
  );
}
