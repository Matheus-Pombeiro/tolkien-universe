import { useTranslation } from "react-i18next";     // Translation framework import
import Books from "../Books";

const Main = (props) => {
    const { t } = useTranslation();
    return (
        <main>
            <h1 className="text-xl xl:text-2xl font-semibold">{t("Title")}</h1>
            <Books books = { props.books }/>
            
        </main>
    )
};

export default Main;