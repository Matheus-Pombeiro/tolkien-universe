const Footer = () => {
    // Get the currently year
    const date = new Date
    const year = date.getFullYear();

    //JSX
    return (
        <footer className="h-16 py-2 bg-stone-400 flex justify-center items-center dark:bg-stone-600">
            <p className="text-lg dark:text-white"><a href="https://www.linkedin.com/in/matheus-pombeiro/" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">Matheus Pombeiro</a> | {year}</p>
        </footer>
    )
};

export default Footer;