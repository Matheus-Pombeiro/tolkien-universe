import { Children } from "react";

const ThemeSwitcher = () => {
    // Theme switching logic
    const handleThemeSwitching = (e) => {        
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.contains("dark") ? e.target.src = "/assets/moon.png" : e.target.src = "/assets/sun.png";
    };

    // JSX
    return (
        <button type="button" onClick={handleThemeSwitching}><img src="/assets/sun.png" className="h-12 btn"></img></button>
    )
};

export default ThemeSwitcher;