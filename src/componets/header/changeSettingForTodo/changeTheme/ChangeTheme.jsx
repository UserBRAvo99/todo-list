import { useSelector } from "react-redux";
import {
  Input,
  Label,
  WrapperChange,
} from "../StyleForChangeLanguageAndTheme.style";
import { BoxTheme } from "./changeTheme.style";

const ChangeTheme = ({ handleClick }) => {
  const { setting } = useSelector((state) => state.settingSlice);
  return (
    <WrapperChange onChange={handleClick}>
      <Label name="forest">
        <Input name="theme" type="radio" value="forest" />
        <BoxTheme
          $theme="forest"
          className={setting.theme === "forest" && "activeLanguage"}
        ></BoxTheme>
      </Label>
      <Label name="classic">
        <Input name="theme" type="radio" value="classic" />
        <BoxTheme
          $theme="classic"
          className={setting.theme === "classic" && "activeLanguage"}
        ></BoxTheme>
      </Label>
      <Label name="dark">
        <Input name="theme" type="radio" value="dark" />
        <BoxTheme
          $theme="dark"
          className={setting.theme === "dark" && "activeLanguage"}
        ></BoxTheme>
      </Label>
    </WrapperChange>
  );
};

export default ChangeTheme;
