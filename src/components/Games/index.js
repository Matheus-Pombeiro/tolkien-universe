import { useTranslation } from "react-i18next";     // Translation framework import

const Games = (props) => {       // Games component
    const { t } = useTranslation();     // Traslation method

    //JSX
    return (
        <section className="section">
            <h2 className="h2">{t("Games")}</h2>
            <p className="text-center">{t("Games Description")}</p>
            <div className="item-container">
                {props.games.map((game) => (
                    <div className="item" key={game.id}>
                        <h3 className="h3">{game.name}</h3>
                        <p>{t("Studio")}: {game.studio}</p>
                        <p>{t("Publishing Year")}: {game.publishingYear}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Games;