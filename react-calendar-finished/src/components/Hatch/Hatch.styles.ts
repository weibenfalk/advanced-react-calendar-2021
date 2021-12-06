import styled from 'styled-components';
import hatchBackdrop from '../../img/hatch_backdrop.jpg';

type Props = {
  open: boolean;
  background: string;
  enabled: boolean;
};

export const Wrapper = styled.div<Props>`
  padding-top: 100%; /* padding-top is based on the width - believe it or not!!! */
  position: relative;
  cursor: pointer;
  pointer-events: ${({ enabled }) => (enabled ? '' : 'none')};

  .front {
    background: center / cover url(${props => props.background});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transform: ${props => (props.open ? 'rotateY(180deg)' : 'rotateY(0deg)')};

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Dancing Script', cursive;
      color: #fff;
      padding: 20px;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      font-weight: 700;
      font-size: 4rem;
      user-select: none;
    }
  }

  .back {
    position: absolute;
    background: center / cover url(${hatchBackdrop});
    top: 0px;
    left: 0px;
    z-index: ${props => (props.open ? 2 : 1)};
    transform: ${props => (props.open ? 'rotateY(0deg)' : 'rotateY(180deg)')};

    p {
      font-family: 'Dancing Script', cursive;
      color: #fff;
      padding: 10px;
      font-size: 1.2rem;
      text-align: center;
      user-select: none;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }
`;
