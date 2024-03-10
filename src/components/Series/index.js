import { useTranslation } from "react-i18next";     // Translation framework import

const Series = (props) => {      // Series component
    const { t } = useTranslation();     // Traslation method

    //JSX
    return (
        <section className="section">
            <h2 className="h2">{t("Series")}</h2>
            <p className="text-center">{t("Series Description")}</p>
            <div className="item-container">
                {props.series.map((serie) => (
                    <div className="item" key={serie.id}>
                        <h3 className="h3">{serie.name}</h3>
                        <p>{t("TV Channel")}: {serie.tvChannel}</p>
                        <p>{t("Publishing Year")}: {serie.publishingYear}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Series;