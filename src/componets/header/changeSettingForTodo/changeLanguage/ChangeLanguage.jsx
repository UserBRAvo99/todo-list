import { useSelector } from "react-redux";

import {
  Input,
  Label,
  WrapperChange,
} from "../StyleForChangeLanguageAndTheme.style";
import { BoxFlag } from "./changeLanguage.style";

const ChangeLanguage = ({ handleClick }) => {
  const { setting } = useSelector((state) => state.settingSlice);

  return (
    <WrapperChange onChange={handleClick}>
      <Label name="england">
        <Input name="language" type="radio" value="england" />
        <BoxFlag
          $flag="england"
          className={setting.language === "england" && "activeLanguage"}
        ></BoxFlag>
      </Label>
      <Label name="ukraine">
        <Input name="language" type="radio" value="ukraine" />
        <BoxFlag
          $flag="ukraine"
          className={setting.language === "ukraine" && "activeLanguage"}
        ></BoxFlag>
      </Label>
      <Label name="sweden">
        <Input name="language" type="radio" value="sweden" />
        <BoxFlag
          $flag="sweden"
          className={setting.language === "sweden" && "activeLanguage"}
        ></BoxFlag>
      </Label>
    </WrapperChange>
  );
};

export default ChangeLanguage;
