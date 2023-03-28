import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = (newLanguage) => {
    setLanguage(languages[newLanguage]);
  }

  return (
    <div className="App">
      <>{/* SUGERENCIA: Agregue el Provider de LanguageContext */}
      <h1>Idioma actual: {language.id}</h1>
       {language}
        <Navbar />
        <Body />
      </>
    </div>
  )
}

export default App