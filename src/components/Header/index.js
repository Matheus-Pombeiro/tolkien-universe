import { useTranslation } from "react-i18next";     // Translation framework import

import LanguageSwitcher from "../LanguageSwitcher";
import ThemeSwitcher from "../ThemeSwitcher";

// Function that 
const Header = () => {
    const { t } = useTranslation();

    // JSX Header
    return (
        <header className="p-2 bg-stone-400 flex justify-between items-center dark:bg-stone-700">
            <img src="/assets/logo.png" alt="Logo" className="h-12 xl:h-14"></img>

            <nav className="flex justify-between items-center gap-1">
                <ThemeSwitcher />
                <LanguageSwitcher />
            </nav>
        </header>
    )
};

export default Header;
