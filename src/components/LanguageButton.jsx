import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "./SVG/SVGS";

function LanguageButton() {
  const { language, handleChangeLanguage } = useLanguage(); //Language context conection

  return (
    <>
      <form className="flex flex-row items-center ml-10 ">
        <Language
          width={20}
          height={20}
          stroke="#fff"
          className="absolute dark:visible order-2"
        />
        <Language width={20} height={20} className="absolute dark:hidden " />
        <select
          type="submit"
          className="dark:border- my-5 mx-2  dark:text-white ml-6 dark:bg-smoothDark hover:cursor-auto"
          onChange={handleChangeLanguage}
        >
          <option value="spanish">En</option>
          <option value="english">Es</option>
        </select>
      </form>
    </>
  );
}

export default LanguageButton;
