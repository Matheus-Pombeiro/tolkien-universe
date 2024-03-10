import { useTranslation } from "react-i18next";     // Translation framework import

const Movies = (props) => {      // Movies component  
    const { t } = useTranslation();     // Translation method

    // JSX
    return (
        <section className="section">
            <h2 className="h2">{t("Movies")}</h2>
            <p>{t("Movies Description")}</p>
            <div className="item-container">
                {props.movies.map((movie) => (
                    <div className="item" key={movie.id}>
                        <h3 className="h3">{movie.name}</h3>
                        <p>{t("Director")}: {movie.director}</p>
                        <p>{t("Publishing Year")}: {movie.publishingYear}</p>
                    </div>
                ))}
            </div>

        </section>
    )
};

export default Movies;