import { useTranslation } from "react-i18next";     // Translation framework import

const Books = (props) => {     // Books component 

    const { t } = useTranslation();     // Translation method

    // JSX
    return (
        <section className="section">
            <h2 className="h2">{t("Books")}</h2>
            <p>{t("Books Description")}</p>
            <div className="item-container">
                {props.books.map((book) => (    /* books json object mapping */
                    <div key={book.id} className="item">
                        <h3 className="h3">{book.name}</h3>
                        <p>{t("Author")}: {book.author}</p>
                        <p>{t("Publishing Year")}: {book.publishingYear}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};


export default Books;