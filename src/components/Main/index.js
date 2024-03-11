import { useTranslation } from "react-i18next";     // Translation framework import

// Component imports
import Books from "../Books";
import Movies from "../Movies";
import Games from "../Games";
import Series from "../Series";

const Main = (props) => {       // Main component   
    const { t } = useTranslation();     // Traslation method

    // JSX
    return (
        <main className="my-7 mx-auto flex flex-col justify-evenly items-center gap-14">
            <h1 className="text-center text-xl xl:text-2xl font-semibold">{t("Title")}</h1>
            <Books books = { props.books }/>
            <Movies movies = { props.movies }/>
            <Games  games = { props.games }/>
            <Series series = { props.series }/>
            
        </main>
    )
};

export default Main;