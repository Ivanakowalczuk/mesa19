import { createContext, useContext } from 'react';
import EN from "./languages/english.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    spanish: {
        id: "ES",
        text: ES
    }
 
    /* SUGERENCIA: agregue los demás idiomas */
};

/* SUGERENCIA: Usa createContext e inicia el idioma inglês como predeterminado */
const LanguageContext = createContext();

const Context = ({children}) =>{
const [language, setlanguage] = useState()

return(

    <LanguageContext.Provider value={{language, setlanguage}}>
          {children}
    </LanguageContext.Provider>
)

}

export default LanguageContext;

export const useLanguageContext = () => useContext(LanguageContext)