import CloseIcon from "@mui/icons-material/Close";
import { StandartBtn } from "../../Buttons";
import s from "./sureModal.module.css";

// Animation
import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
const zoomInAnimation = keyframes`${zoomIn}`;
const ZoomInDiv = styled.div`
  animation: 1s ${zoomInAnimation};
`;

export default function SureModal() {
  return (
    <ZoomInDiv>
      <div className={s.field}>
        <button class={s.sureCloseBtn} id="sureCloseBtn">
          {/* можно анимацию сделать для каждого элемента */}
          {/* <ZoomInDiv>
          <CloseIcon fontSize="small" />
        </ZoomInDiv> */}
          <CloseIcon fontSize="small" />
        </button>
        <div>
          <p className={s.text}>Вы уверенны?</p>
          <StandartBtn className={s.btn}>да</StandartBtn>
          <StandartBtn>нет</StandartBtn>
        </div>
      </div>
    </ZoomInDiv>
  );
}
