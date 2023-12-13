import { useCallback, useEffect, useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import ChangeSettingForTodo from "../changeSettingForTodo/ChangeSettingForTodo";
import {
  Box,
  Btn,
  Overlay,
  Wrapper,
  WrapperBtn,
} from "./settingsForTodo.style";

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
