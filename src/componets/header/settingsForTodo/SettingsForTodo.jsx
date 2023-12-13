import { useCallback, useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import styled, { css } from "styled-components";
import ChangeSettingForTodo from "../changeSettingForTodo/ChangeSettingForTodo";

const SettingsForTodo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const modalButtonClose = useCallback(
    (e) => {
      if (e.key === "Escape") {
        setIsOpen(!isOpen);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    if (isOpen) window.addEventListener("keydown", modalButtonClose);
    return () => {
      window.removeEventListener("keydown", modalButtonClose);
    };
  }, [isOpen, modalButtonClose]);

  return (
    <>
      <Overlay
        $open={isOpen}
        onKeyDown={modalButtonClose}
        onClick={handleClick}
      ></Overlay>
      <Wrapper $open={isOpen}>
        <WrapperBtn>
          <Btn onClick={handleClick}>
            <IoSettingsSharp />
          </Btn>
        </WrapperBtn>
        <Box>
          <ChangeSettingForTodo closeModal={handleClick} />
        </Box>
      </Wrapper>
    </>
  );
};

export default SettingsForTodo;

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colorBkgItemTodo};
  opacity: 0;
  z-index: 2;
  transform: translateY(-100%);
  transition: ${(props) => props.theme.transitionHover};
  ${(props) => {
    if (props.$open) {
      return css`
        opacity: 0.7;
        transform: translateY(0);
        transition: ${(props) => props.theme.transitionHover};
      `;
    }
  }}
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  width: calc(100% - 36px);
  height: 300px;
  top: -300px;
  left: 18px;
  border: ${(props) => props.theme.borderForSettings};
  border-radius: ${(props) => props.theme.borderRadiusFormItem};
  background-color: ${(props) => props.theme.basicColorForSettingWindow};
  z-index: 3;

  transform: translateY(0);
  transition: ${(props) => props.theme.transitionHover};
  ${(props) => {
    if (props.$open) {
      return css`
        transform: translateY(100%);
        transition: ${(props) => props.theme.transitionHover};
      `;
    }
  }}
`;
const Box = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const WrapperBtn = styled.div`
  position: absolute;
  bottom: -65px;
  right: 0px;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.basicColorForSettingWindow};
  display: flex;
  justify-content: center;
  padding: 7px;
  border-radius: 0 0 8px 8px;
`;

const Btn = styled.button`
  position: relative;
  width: 36px;
  height: 36px;
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  & svg {
    position: absolute;
    top: 10%;
    left: 10%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    fill: ${(props) => props.theme.colorSvgSettingsOpen};

    animation-name: rotation;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  transition: ${(props) => props.theme.transitionHover};

  &:hover,
  &:focus {
    svg {
      transition: ${(props) => props.theme.transitionHover};
      fill: ${(props) => props.theme.basicColorForSettingWindowHover};
    }
  }
`;
