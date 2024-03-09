import { useTranslation } from "react-i18next";     // Translation framework import

const Books = (props) => {

    const { t } = useTranslation();

    return (
        <section className="w-5/6 xl:w-10/12 mx-auto p-2 xl:p-4 bg-stone-300  flex flex-col justify-evenly items-center gap-5 rounded-md drop-shadow-md">
            <h2 className="text-lg font-medium">{t("Books")}</h2>
            <p>{t("Books Description")}</p>
            <div className="max-w-full flex justify-center items-center flex-wrap gap-5">
                {props.books.map((book, index) => (
                    <div key={book.id} className="w-80 h-32 bg-stone-200 flex flex-col justify-center items-center gap-2 rounded border border-stone-400">
                        <h3 className="font-medium">{book.name}</h3>
                        <p>{t("Author")}: {book.author}</p>
                        <p>{t("Publishing Year")}: {book.publishingYear}</p>
                    </div>
                ))}
            </div>
        </section>
    )
};


export default Books;