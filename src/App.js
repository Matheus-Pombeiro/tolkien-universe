import './App.css';
import { UseTranslation, useTranslation } from "react-i18next"

const App = () => {
  const { t } = useTranslation();
  return (
    <div className="App">
      <h1 className='text-3xl font-bold underline'>{t('Title example')}</h1>
      <p>{t('One more example')}</p>
    </div>
  );
}

export default App;