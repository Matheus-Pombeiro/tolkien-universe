import { useTranslation } from "react-i18next";     // Translation framework import

// Arry that contains the language options as objects
const languageOptions = [
    {
        name: "English",
        value: "en",
        flag: "/assets/british-flag.png"
    },
    {
        name: "Portuguese",
        value: "pt",
        flag: "/assets/portuguese-flag.png" 
    }
]

// Function that implement the language swtching
const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation(); 
    return (
        <div  className="flex justify-center items-center gap-1">
            {languageOptions.map(languageOption => (
                <button
                    key={languageOption.value}
                    onClick={() => 
                        i18n.changeLanguage(languageOption.value)
                    }
                >
                    <img src={languageOption.flag} alt={languageOption.name} className="h-11 xl:h-12"/>
                </button>
            ))}
        </div>
    )
};

export default LanguageSwitcher;