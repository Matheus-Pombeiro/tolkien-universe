import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./locales/en/en.json";
import PT from "./locales/pt/pt.json";

const resources = {
    "en": EN,
    "pt": PT
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: navigator.language,
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;