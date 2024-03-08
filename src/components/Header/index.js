import { useTranslation } from "react-i18next";     // Translation framework import

import LanguageSwitcher from "../LanguageSwitcher";

// Function that 
const Header = () => {
    const { t } = useTranslation();

    // JSX Header
    return (
        <header className="p-2 xl:p-3 bg-stone-400 flex justify-between items-center">
            <img src="/assets/logo.png" alt="Logo" className="h-14 xl:h-16"></img>

            <nav className="flex justify-between items-center gap-1">
                <button><img src="/assets/sun.png" className="h-12"></img></button>
                <LanguageSwitcher />
            </nav>
        </header>
    )
};

export default Header;
